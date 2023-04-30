function isPalindrome(inputString) {
  let isPalindromeString = false;
  if (inputString.length <= 1) return isPalindromeString;

  function helper(newString) {
    if (newString.length <= 1) return;
    if (newString[0] === newString[newString.length - 1])
      isPalindromeString = true;
      else isPalindromeString = false;
    helper(newString.substr(1).slice(0, -1));
  }
  helper(inputString);
  return isPalindromeString;
}
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
