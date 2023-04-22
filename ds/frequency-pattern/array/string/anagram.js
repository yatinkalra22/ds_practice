// take 2 strings as an input
// make sure it's an anagram
// meaning the string character can be in any order
// if character match return true
// if character doesn't match return false
// Complexity O(n)

function findAnagramPattern(string1, string2) {
  if (!string1[0] || !string2[0]) return false;
  if (string1.length !== string2.length) return false;

  const object1 = {};
  const object2 = {};

  for (let element of string1) {
    object1[element] = (object1[element] || 0) + 1;
  }

  for (let element of string2) {
    object2[element] = (object2[element] || 0) + 1;
  }

  for (let element in object1) {
    if (!object2[element]) return false;
    if (object1[element] !== object2[element]) return false;
  }
  return true;
}

// string should match
console.log(findAnagramPattern("hello", "olleh"));
// comparing with empty string
console.log(findAnagramPattern("", "olleh"));
// comparing with empty string
console.log(findAnagramPattern("", ""));

// string doesn't match
console.log(findAnagramPattern("hellw", "olleh"));