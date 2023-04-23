// loop the unsorted array
// Calculate the sum of element based on number of element condition
// complexity worst and average O(n), best O(1)
const subArraySum = (inputArray, sumCondition) => {
  if (!inputArray[0]) return 0;
  if (sumCondition < 1) return 0;
  if (sumCondition > inputArray.length) return 0;

  let sum = 0;
  for (let counter = 0; counter < sumCondition; counter++) {
    sum += inputArray[counter];
  }

  for (let counter = sumCondition; counter < inputArray.length; counter++) {
    let newSum = 0;
    if (sumCondition === 1)
      newSum = sum + inputArray[counter] - inputArray[counter - sumCondition];
    else newSum = inputArray[counter];

    if (newSum > sum) sum = newSum;
    // another way to reassign the max number
    // sum = Math.max(sum, newSum);
  }
  return sum;
};

console.log(subArraySum([1, 2, 3, 4, 5, 6], 2)); //11
console.log(subArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(subArraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(subArraySum([4, 2, 1, 2, 6], 1)); //6
console.log(subArraySum([4, 2, 1, 6], 1)); //6
console.log(subArraySum([4, 2, 1, 6, 2], 4)); //13
console.log(subArraySum([], 4)); // 0
console.log(subArraySum([4, 2, 1, 6, 2], -4)); //0
