/*Write a function that takes an input parameter, 'str',
 and returns a new string with the vowels removed. 
 Any special characters such as !@#$%^&*() should be left intact.
*/

const removeVowels = (str) => {
  // YOUR CODE HERE

  let vowels = ['a', 'e', 'i', 'o', 'u'];

  let letters = [...str];

  let result = [];

  letters.filter((letter) => {
    vowels.includes(letter) ? letter : result.push(letter);
  });
  return result.join('');
};

// Test cases
console.log(removeVowels('this is a test sentence'));
console.log(removeVowels('coffee is a necessary way to start the day'));

// _____________ another way________________ //

const removeVowels2 = (str) => {
  // YOUR CODE HERE

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let resultArr = [];

  str.split('').map((letter) => {
    if (!vowels.includes(letter)) {
      resultArr.push(letter);
    }
  });
  return resultArr.join('');
};
