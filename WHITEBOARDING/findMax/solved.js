// find the max value in the array

const arr = [5, 1, 3, 2, 6];

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
