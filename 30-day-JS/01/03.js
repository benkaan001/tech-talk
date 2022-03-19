/*
Write a function findMax that takes three arguments and returns their maxiumum.
Without method Math.max method.
*/

const findMax = (a, b, c) => {
  let arr = [];
  arr.push(a, b, c);
  arr.sort((a, b) => b - a);
  return arr[0];
};

console.log(findMax(0, 10, 5)); // 10;
console.log(findMax(0, -10, -2)); // 0;
