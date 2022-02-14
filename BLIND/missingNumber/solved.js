// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

const missingNum = (arr) => {
  let missing = 0;

  let sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== i) {
      missing = i;
    }
  }
  return missing;
};

console.log(missingNum([3, 0, 1])); // 2
