/*
Return true if Palindrome
Remove all non-alphanumeric characters
*/

const isPalindrome = (str) => {
  // remove all non-alphanumeric characters
  let oddCharacters = /[\W_]/g;

  // lowerCase the string
  let lowerCased = str.toLowerCase();

  // replace the oddCharacters with ''

  let finished = lowerCased.replace(oddCharacters, '');

  // reverse the string
  let reversed = finished.split('').reverse().join('');

  return reversed === finished;
};

console.log(isPalindrome('A man, a plan, a canal. Panama.')); // true
console.log(isPalindrome('hello world')); // false
