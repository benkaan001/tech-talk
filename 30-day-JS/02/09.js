/*

Write a function which checks if items of an array are unique?

*/

const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne)); // false;
const arrTwo = [1, 4, 6, 2, 3];
console.log(checkUniqueness(arrTwo)); // true;

function checkUniqueness(arr) {
  let unique = [...new Set(arr)];
  return arr.length === unique.length ? true : false;
}
