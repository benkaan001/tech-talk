// return the sum of the values in the array

const arr = [5, 1, 3, 2, 6];

const findSum = (array) => {
  return array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

console.log(findSum(arr)); // 17

// -------- USE LOOP ---- //

const findSumLoop = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

console.log(findSumLoop(arr)); //17
