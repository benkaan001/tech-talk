// Write a function that squares every digit of the input number.
// You can assume that the input number will be a positive integer, not a float

// For example, if we run 2112 through the function,
//4114 will come out, because 2 squared is 4 and 1 squared is 1.

const squareMe = (num) => {
  const output = num
    .toString() //                   444
    .split('') //              [ '4', '4', '4' ]
    .map((x) => x * x) //       [ 16, 16, 16 ]
    .join(''); //                     161616
  console.log(output);
};

// Test Cases
console.log(squareMe(2112)); // 4114
console.log(squareMe(444)); // 161616

// ------------- USING LOOP -------------- //

const squareMeLoop = (num) => {
  // set up an empty array to hold the new numbers

  let array = [];

  // turn each digit into a string

  let stringified = num.toString();
  //   console.log(stringified); // 222

  // use the split('') method to turn it into an array
  let splited = stringified.split('');
  //   console.log(splited); // [ '2', '2', '2' ]

  // loop through this array and use Math.pow to square each value
  // push the squared number into the new array

  for (let i = 0; i < splited.length; i++) {
    array.push(Math.pow(splited[i], 2));
    // console.log(array);  // [ 4, 4, 4 ]
  }

  // return a parsed integer, and join it back together

  return parseInt(array.join(''));
};

console.log(squareMeLoop(222)); //  444

console.log(parseInt('10')); //10
console.log(parseInt('30 40 50')); //30
console.log(parseInt(' 36 years old')); //36
console.log(parseInt('She was 35')); // NaN
