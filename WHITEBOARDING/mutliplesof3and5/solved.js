/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

*/

const findSum = (num) => {
  let nums = [];
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      nums.push(i);
    }
  }
  return nums.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
};

console.log(findSum(49)); // 543
console.log(findSum(1000)); // 233168
