/**** SAMPLE INPUT
arr = [1,2,3,4,5];
d = 2;

SAMPLE OUTPUT
[3,4,5,1,2]

*/

//__________________ slice it!!! _________________-//

const rotateLeftSlice = (arr, d) => {
  let whatIsSliced = arr.slice(0, d);

  let whatIsLeft = arr.slice(d - arr.length);

  return [...whatIsLeft, ...whatIsSliced];
};

console.log(rotateLeftSlice([1, 2, 3, 4, 5], 2)); // [ 3, 4, 5, 1, 2 ]

// _________ most inefficient solution! 8-/ ________ //

const rotateLeft = (arr, d) => {
  let copy = [...arr];

  let shifted = [];

  for (let i = 0; i < d; i++) {
    arr.shift(arr[i]);
  }
  for (let j = 0; j < d; j++) {
    shifted.push(copy[j]);
  }

  return [...arr, ...shifted];
};

console.log(rotateLeft([1, 2, 3, 4, 5], 2)); // [ 3, 4, 5, 1, 2 ]

//______________ alternative _______________ //

let arr = [1, 2, 3, 4, 5];
let d = 2;

function myfunc(arr, d) {
  let ending = [];
  for (let i = arr.length - d; i < arr.length; i++) {
    ending.push(arr[i]);
  }
  console.log(ending);

  for (let i = 0; i < arr.length - d; i++) {
    ending.push(arr[i]);
  }
  return console.log(ending);
}

myfunc(arr, d);
