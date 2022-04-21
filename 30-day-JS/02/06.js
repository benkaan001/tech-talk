/*

Write a function which can generate a random Finnish car code.

Example:

AFG-205
JCB-586d

*/

const generatePlate = () => {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbers = '123456789';
  let firstHalf = [];
  let secondHalf = [];
  for (let i = 0; i < 3; i++) {
    let randomLetter = Math.floor(Math.random() * letters.length);
    let randomNumber = Math.floor(Math.random() * numbers.length);
    firstHalf.push(letters[randomLetter]);
    secondHalf.push(numbers[randomNumber]);
  }

  return `${String(firstHalf.join(''))}-${String(secondHalf.join(''))}`;
};
console.log(generatePlate());

/*

REMEMBER

let array = ['a','b','c']
let joinedArray = array.join('') // [abc]
String(joinedArray)  // abc

*/
