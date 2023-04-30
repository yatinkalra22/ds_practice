function reverse(inputString) {
  if (inputString.length === 0) return "";
  if (inputString.length === 1) return inputString;
  return (
    inputString[inputString.length - 1] + reverse(inputString.slice(0, -1))
  );
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
console.log(reverse("")); // ''
console.log(reverse("a")); // 'a'

function reverseHelper(inputString) {
  let result = "";
  if (inputString.length === 0) return result;
  if (inputString.length === 1) return inputString;

  function helper(newString) {
    result += newString[newString.length - 1];
    if (newString.length === 1) return;
    helper(newString.slice(0, -1));
  }

  helper(inputString);
  return result;
}

console.log(reverseHelper("awesome")); // 'emosewa'
console.log(reverseHelper("rithmschool")); // 'loohcsmhtir'
console.log(reverseHelper("")); // ''
console.log(reverseHelper("a")); // 'a'
