// find the max value in the array

const arr = [5, 1, 3, 2, 6];

const findMax = (array) => {
  let max = [];

  return array.reduce((acc, curr) => {
    console.log(`acc: ${acc} vs curr: ${curr}`);
    if (curr > acc) {
      max = curr;
    }
    return max;
  }, 0);
};

console.log(findMax(arr));
