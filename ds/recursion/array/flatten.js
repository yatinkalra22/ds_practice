function flattenHelper(arr) {
  const result = [];
  if (arr.length === 0) return result;

  function helper(newArr) {
    if (newArr.length === 0) return;
    if (Array.isArray(newArr[0])) helper(newArr[0].splice(0))
    else {
      result.push(newArr[0]);
    }
    helper(newArr.splice(1));
  }
  helper(arr);
  return result;
}

console.log(flattenHelper([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flattenHelper([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flattenHelper([[1], [2], [3]])); // [1,2,3]
console.log(flattenHelper([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
