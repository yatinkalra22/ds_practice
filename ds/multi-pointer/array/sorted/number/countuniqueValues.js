// loop the sorted array
// Count the unique elements and return the count
// complexity worst and average O(n), best O(1)

const countUniqueValues = (inputArray) => {
  if (!inputArray[0]) return 0;
  if (inputArray.length === 1) return 1;
  let left = 0;
  for (let right = 1; right < inputArray.length; right++) {
    if (inputArray[left] !== inputArray[right]) {
      left++;
      inputArray[left] = inputArray[right];
    }
  }
  return left + 1;
};

// should return 2
console.log(countUniqueValues([1, 1, 1, 1, 2]));
// should return 6
console.log(countUniqueValues([1, 1, 1, 1, 2, 3, 3, 3, 3, 4, 5, 6]));
// should return 0 when empty array is passed
console.log(countUniqueValues([]));
// should return 1 when array with single element is passed
console.log(countUniqueValues([1]));
