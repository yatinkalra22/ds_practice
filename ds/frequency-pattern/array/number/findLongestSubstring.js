const findLongestSubstring = (inputString) => {
  if (!inputString[0]) return 0;
  if (inputString.length === 1) return 1;
  let counter = 0;
  let object1 = {};
  let result = 0;
  for (let element of inputString) {
    if (!object1[element]) {
      object1[element] = 1;
      counter += 1;
    } else {
      object1 = {};
      counter = 1;
      object1[element] = 1;
    }
    if (counter > result) result = counter;
  }
  return result;
};

console.log(findLongestSubstring("abcdabc")); // 4
console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 5
console.log(findLongestSubstring("thecatinthehat")); // 5
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 7
console.log(findLongestSubstring("thisishowwedoit")); // 6
