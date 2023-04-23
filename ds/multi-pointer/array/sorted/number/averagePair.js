// loop the sorted array
// Check if any pair average matches the parameter
// if yes, return true
// if no, return false
// complexity worst and average O(n), best O(1)
function averagePair(inputArray, averageNumber) {
  if (inputArray.length === 0) return false;
  if (inputArray.length === 1) {
    if (inputArray[0] === averageNumber) return true;
    return false;
  }

  let left = 0;
  let right = inputArray.length - 1;

  while (left < right) {
    const countAvg = (inputArray[left] + inputArray[right]) / 2;
    if (countAvg === averageNumber) return true;
    if (averageNumber > countAvg) left += 1;
    else right -= 1;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
console.log(averagePair([], 4)); //false
console.log(averagePair([4,4], 4)); //true
