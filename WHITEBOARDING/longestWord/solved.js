// return the length of the longest word

const findLongest = (str) => {
  let string = str.split(' ');
  let lengths = string.map((word) => word.length);
  let sorted = lengths.sort((a, b) => b - a);
  return sorted[0];
};
console.log(findLongest('The quick brownish fox')); // 8
console.log(findLongest('It is hard to believe it!')); // 7

// using reduce

const findLongest2 = (str) => {
  let string = str.split(' ');
  let output = string.reduce((acc, curr) => {
    if (curr.length > acc.length) {
      acc = curr;
    }
    return acc;
  });
  return output.length;
};
console.log(findLongest2('The quick brownish fox')); // 8
console.log(findLongest2('It is hard to believe it!')); // 7
