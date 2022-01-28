/**** SAMPLE INPUT
arr = [1,2,3,4,5];
d = 2;

SAMPLE OUTPUT
[3,4,5,1,2]

*/

// _________ most inefficient solution! 8-/ ________ //

const rotateLeft = (arr, d) => {
  let copy = [...arr];

  let shifted = [];

  let combined = [];

  for (let i = 0; i < d; i++) {
    arr.shift(arr[i]);
  }
  for (let j = 0; j < d; j++) {
    shifted.push(copy[j]);
  }

  return (combined = [...arr, ...result]);
};

console.log(rotateLeft([1, 2, 3, 4, 5], 2)); // [ 3, 4, 5, 1, 2 ]
