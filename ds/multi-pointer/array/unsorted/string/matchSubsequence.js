function matchSubsequence(subStr, str) {
  if (!subStr[0] || !str[0]) return false;
  if (subStr.length > str.length) return false;
  if (str.length === 1 && str.length) {
    if (str === subStr) return true;
    return false;
  }

  let left = 0;
  for (let right = 0; right < str.length; right++) {
    if (str[right] === subStr[left]) left++;
    if (left === subStr.length) return true;
  }

  return false;
}
console.log(matchSubsequence("abc", "lmabracadabra")); // true
console.log(matchSubsequence("abc", "abracadabra")); // true
console.log(matchSubsequence("abc", "acb")); //false (order matters)
console.log(matchSubsequence("1", "1")); // true
console.log(matchSubsequence("", "")); // false
console.log(matchSubsequence("1", "")); // false
console.log(matchSubsequence("", "1")); // false
console.log(matchSubsequence("abc", "a")); // false
