// Assuming that n is a positive number

// Write a function that takes an unsigned integer and returns the number of '1' bits it has

const binaryCount = (num) => {
  let binary = num.toString(2).split('');

  let output = binary.reduce((acc, curr) => {
    if (curr === '1') {
      acc += curr;
    }
    return acc; // 11111
  });

  return output.length;
};

console.log(binaryCount(1234)); // 5

//_________ alternative solution_____________ //

const binaryBits = (n) => {
  // convert the n to binary

  let binary = n.toString(2); // 10011010010

  // split the numbers via split('') or spread operator

  let splited = [...binary]; //   [ ('1', '0', '0', '1', '1', '0', '1', '0', '0', '1', '0') ];

  // filter the array and return the length

  return splited.filter((number) => number === '1').length;
};

console.log(binaryBits(1234)); // 5
