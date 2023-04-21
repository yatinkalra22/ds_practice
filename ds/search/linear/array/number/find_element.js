// loop the array
// if element found return index
// if not return -1

const getIndexOfElement = (inputArray, searchElement) => {
  if (inputArray.length < 1) {
    return -1;
  }

  for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[index] === searchElement) {
      return index;
    }
  }
  return -1;
};

//exists
console.log(getIndexOfElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)); 
//doesn't exists
console.log(getIndexOfElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
//empty array
console.log(getIndexOfElement([], 11));
