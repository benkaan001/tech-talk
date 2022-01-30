/*
Given a string s consisting of Latin letters and digits,
change each of its digit to the corresponding number of ones.

Example

For s = "abc5bc3", the output should be solution(s) = "abc11111bc111".

We change digit 5 to five ones and digit 3 to three ones.

*/

// _____________ better solution __________________ //

let betterSolution = (str) => {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let string = str.split('').map((letter) => {
    if (numbers.includes(letter) && letter !== '0') {
      return (letter = '1'.repeat(parseInt(letter)));
    } else if (numbers.includes(letter) && letter === '0') {
      return (letter = '');
    } else {
      return letter;
    }
  });
  return string.join('');
};

console.log(betterSolution('abc5bc3')); // abc11111bc111
console.log(betterSolution('abc5bc0')); // abc11111bc

// _________________________ MVP solution ______________________ //
function solution(s) {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let string = s.split('').map((letter) => {
    if (numbers.includes(letter) && letter === '9') {
      return (letter = '111111111');
    } else if (numbers.includes(letter) && letter === '8') {
      return (letter = '11111111');
    } else if (numbers.includes(letter) && letter === '7') {
      return (letter = '1111111');
    } else if (numbers.includes(letter) && letter === '6') {
      return (letter = '111111');
    } else if (numbers.includes(letter) && letter === '5') {
      return (letter = '11111');
    } else if (numbers.includes(letter) && letter === '4') {
      return (letter = '1111');
    } else if (numbers.includes(letter) && letter === '3') {
      return (letter = '111');
    } else if (numbers.includes(letter) && letter === '2') {
      return (letter = '11');
    } else if (numbers.includes(letter) && letter === '1') {
      return (letter = '1');
    } else if (numbers.includes(letter) && letter === '0') {
      return (letter = '');
    } else {
      return (letter = letter);
    }
  });
  return string.join('');
}

console.log(solution('abc5bc3')); // abc11111bc111
