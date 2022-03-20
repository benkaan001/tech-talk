// Write a funch which takes any number of arguments and return the sum of the arguments

function sum() {
  let args = [];
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  let result = args.reduce((acc, curr) => (acc += curr));
  return console.log(result);
}

sum(1, 2, 3); // 6;
sum(1, 2, 3, 4); // 10;

// Write a function sumOfAllNums which takes unlimited number of arguments
// both in function declaration and arrow functions

function sumOfAllNums() {
  let array = [];
  for (let i = 0; i < arguments.length; i++) {
    array.push(arguments[i]);
  }
  let total = array.reduce((acc, curr) => (acc += curr));

  return console.log(total);
}
sumOfAllNums(2, 3, 1); // 6
sumOfAllNums(1, 2, 3, 4, 5); // 15
sumOfAllNums(1000, 900, 120); // 2020

let sumOfAllNums2 = (...args) => {
  // console.log(args) // [ 2, 3, 1 ] , [ 1, 2, 3, 4, 5 ] , [ 1000, 900, 120 ]
  return args.reduce((acc, curr) => (acc += curr));
};

sumOfAllNums2(2, 3, 1); // 6
sumOfAllNums2(1, 2, 3, 4, 5); // 15
sumOfAllNums2(1000, 900, 120); // 2020

// Copy the student object to newStudent without mutating the original object.
// In the new object add the following
