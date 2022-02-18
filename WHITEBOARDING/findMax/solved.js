// find the max value in the array

let arr = [5, 1, 3, 2, 6];

const findMax = (array) => {
  return array.reduce((acc, curr) => {
    // console.log(acc, curr);
    if (curr > acc) {
      acc = curr;
    }
    return acc;
  }, 0);
};

console.log(findMax(arr));

// alternative

const findMax2 = (array) => {
  let sorted = array.sort((a, b) => a - b);
  return sorted[array.length - 1];
};

// with Math.max

let maxValue = Math.max(...arr);
