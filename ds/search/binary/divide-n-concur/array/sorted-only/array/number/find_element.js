// loop the array
// if element found return index
// if not return -1

function findIndexOfSortedArray(inputArray, searchElement) {
  //handling array length
  if (inputArray.length < 1) return -1;
  if (inputArray.length === 1) return 0;
  if (inputArray.length === 2) {
    if (inputArray[0] === searchElement) return 0;
    return 1;
  }
  // handling greater or less than condition
  if (inputArray[inputArray.length - 1] < searchElement) return -1;
  if (inputArray[0] > searchElement) return -1;

  //looping to find the elemenet position
  let left = 0;
  let right = inputArray.length - 1;
  let middle = Math.ceil((right - left) / 2);
  while (left < right) {
    if (inputArray[left] === searchElement) return left;
    if (inputArray[right] === searchElement) return right;
    if (inputArray[middle] === searchElement) return middle;
    if (searchElement > inputArray[middle]) {
      left = middle + 1;
      const newMiddle = Math.ceil((right - left) / 2);
      middle = left + newMiddle;
    } else {
      right = middle - 1;
      middle = Math.ceil((right - left) / 2);
    }
  }

  return -1;
}

// element exist at start
console.log(findIndexOfSortedArray([0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11], 0));
// element exist at end
console.log(findIndexOfSortedArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 11));
// element exist at middle
console.log(findIndexOfSortedArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 6));
// element exist at leftside
console.log(findIndexOfSortedArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
// element exist at rightside
console.log(findIndexOfSortedArray([0, 1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11], 9));
// element is out of order
console.log(findIndexOfSortedArray([0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11], 20));
// element is out of order negative
console.log(findIndexOfSortedArray([0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11], -1));
// element doesn't exist in the list
console.log(findIndexOfSortedArray([0, 1, 2, 3, 4, 10, 11], 6));