// loop the unsorted array
// Check if any duplicate exists, return true or false
// complexity worst and average O(n), best O(1)

const findDuplicate = (...params) => {
  if (!params[0]) return false;

  const object1 = {};

  for (let element of params) {
    object1[element] = (object1[element] || 0) + 1;
  }

  for (let element in object1) {
    if (object1[element] > 1) return true;
  }

  return false;
};

console.log(findDuplicate(1, 2, 4)); // false
console.log(findDuplicate(1, 2, 4, 4)); // true
console.log(findDuplicate("1", "2", "4", "4")); //false
console.log(findDuplicate("a", "b", "c", "d")); // false
console.log(findDuplicate("a", "b", "b", "d")); // true
console.log(findDuplicate()); // false
