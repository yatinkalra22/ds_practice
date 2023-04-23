// loop the unsorted array
// Calculate the sum of element based on number of element condition
// complexity worst and average O(n), best O(1)

const maxSubarraySum = (inputArray, sumCondition) => {
  if (!inputArray[0]) return null;
  if (sumCondition > inputArray.length) return null;

  let sum = 0;
  for (let counter = 0; counter < sumCondition; counter++) {
    sum += inputArray[counter];
  }

  let currentTotal = sum;
  for (let counter = sumCondition; counter < inputArray.length; counter++) {
    currentTotal += inputArray[counter] - inputArray[counter - sumCondition];

    sum = Math.max(currentTotal, sum);
  }

  return sum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
