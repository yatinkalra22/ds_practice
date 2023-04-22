// take 2 strings as an input
// make sure it's an anagram
// meaning the string character can be in any order
// if character match return true
// if character doesn't match return false
// Complexity O(n)

function findAnagramPatternV2(string1, string2) {
  if (!string1[0] || !string2[0]) return false;
  if (string1.length !== string2.length) return false;

  const object1 = {};

  for (let element of string1) {
    object1[element] = (object1[element] || 0) + 1;
  }
  for (let counter = 0; counter < string2.length; counter++) {
    const character = string2[counter];
    if (!object1[character]) return false;
    else object1[character] -= 1;
  }
  return true;
}

// string should match
console.log(findAnagramPatternV2("hello", "olleh"));
// comparing with empty string
console.log(findAnagramPatternV2("", "olleh"));
// comparing with empty string
console.log(findAnagramPatternV2("", ""));

// string doesn't match
console.log(findAnagramPatternV2("hellw", "olleh"));
