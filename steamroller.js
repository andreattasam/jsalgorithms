
/* Intermediate Algorithm Scripting: SteamrollerPassed
Flatten a nested array. You must account for varying levels of nesting.
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods. */

function steamrollArray(arr) {
 const stack = [...arr];
  const res = [];
  while(stack.length) {
    const next = stack.pop();
    if(Array.isArray(next)) {      
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}

steamrollArray([1, [2], [3, [[4]]]]);