/*
Reverse a string using recursion

*/

let string = 'awesome';
string.charAt(0); // a
string.substring(1); // wesome

const recursiveReverse = (str) => {
  if (str === '') {
    return '';
  } else return recursiveReverse(str.substring(1)) + str.charAt(0);
};
console.log(recursiveReverse('hola')); // aloh
