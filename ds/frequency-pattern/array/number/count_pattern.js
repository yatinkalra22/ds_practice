// take 2 array as an input
// array can be un sorted
// the second array should have multiple of first array element.
// Complexity O(n)

const compareTwoArraysFrequencyPattern = (array1, array2) => {
  if (!array1[0] || !array2[0]) return false;
  if (array1.length !== array2.length) return false;
  const object1 = {};
  const object2 = {};
  for (const element of array1) {
    object1[element] = object1[element] ? object1[element] + 1 : 1;
  }
  for (let element = 0; element < array2.length; element++) {
    const value = array2[element];
    object2[value] = (object2[value] || 0) + 1;
  }

  for (let element in object1) {
    const squareElement = element * element;
    if (!object2[squareElement]) return false;
    if (object1[element] !== object2[squareElement]) return false;
  }
  return true;
};

// match
console.log(
  compareTwoArraysFrequencyPattern([1, 2, 3, 4, 4], [1, 4, 9, 16, 16])
);

// doesn't match
console.log(
  compareTwoArraysFrequencyPattern([1, 2, 3, 4, 4], [1, 4, 9, 16, 8])
);

//empty array
console.log(compareTwoArraysFrequencyPattern([], []));

//different length array
console.log(compareTwoArraysFrequencyPattern([1], [1, 4]));

//different length array
console.log(compareTwoArraysFrequencyPattern([1, 4], [1]));
