//using helper function
const oddNumbersUsingHelper = (arr) => {
  const result = [];
  function helper(inputArray) {
    if (!inputArray[0]) return;
    if (inputArray[0] % 2 === 1) result.push(inputArray[0]);
    helper(inputArray.splice(1));
  }
  helper(arr);
  return result;
};

console.log(oddNumbersUsingHelper([1, 2, 3, 4, 5]));

// using pure recursion

function oddNumbers(arr) {
  let result = [];
  if (arr.length === 0) return result;
  if (arr[0] % 2 === 1) result.push(arr[0]);
  result = result.concat(oddNumbers(arr.slice(1)));
  return result;
}

console.log(oddNumbers([1, 2, 3, 4, 5]));
