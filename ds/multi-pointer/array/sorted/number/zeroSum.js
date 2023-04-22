// loop the sorted array
// Check if combination of 2 element result to zero, return the first find
// if found, return the elements
// if not found, return empty array
const sumZero = (inputArray) => {
  if (!inputArray[0]) return [];
  if (inputArray.length === 1) return [];

  let left = 0;
  let right = inputArray.length - 1;

  while (left < right) {
    const sum = inputArray[left] + inputArray[right];
    if (sum === 0) return [inputArray[left], inputArray[right]];
    if (sum > 0) right--;
    else left++;
  }
  return [];
};

// returns sums array
console.log(sumZero([-3, -2, -1, 0, 1, 2, 4]));
// return empty array when no element returns to zero
console.log(sumZero([-3, -2, -1, 0, 4, 5]));
// return empty array when input array is empty
console.log(sumZero([]));
// return empty array when input array is of 1 length
console.log(sumZero([1]));
