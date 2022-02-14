// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// assume that the integers are positive

const getSum = (a, b) => {
  let first = '1'.repeat(a);
  let second = '1'.repeat(b);

  let result = [...first, ...second];

  return result.length;
};

console.log(getSum(4, 5)); // 9
