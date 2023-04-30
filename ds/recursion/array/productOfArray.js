function productOfArray(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.splice(1));
}
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([])); // 0
console.log(productOfArray([2])); // 2
console.log(productOfArray([0, 1, 2, 3])); // 0
console.log(productOfArray([1, -2, 3])); // -6

function productOfArrayHelper(arr) {
  let result = 1;
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  const helper = (newArray) => {
    if (newArray.length === 0) return 1;
    // ignoring 0 to get the actual sum
    if (newArray[0]) result *= newArray[0];
    helper(newArray.splice(1));
  };
  helper(arr);
  return result;
}

console.log(productOfArrayHelper([1, 2, 3])); // 6
console.log(productOfArrayHelper([])); // 0
console.log(productOfArrayHelper([2])); // 2
console.log(productOfArrayHelper([0, 1, 2, 3])); // 6
console.log(productOfArrayHelper([1, -2, 3])); // -6
