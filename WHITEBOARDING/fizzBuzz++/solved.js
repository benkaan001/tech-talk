/* For this activity, consider the original FizzBuzz challenge. This is FizzBuzz++.
If we take an input number, like 15, for example, 
all the natural numbers that are also multiples of 3 or 5 are 3, 5, 6, 9, 12. 
The sum of these numbers is 35.

Write a function that completes the solution  so that it returns 
the sum of all mulitples of 3 or 5 below the number passed in as a parameter.
However, if the number is a multiple of 3 and 5 (i.e. 15), 
you should only count it once in your final value. */

const fizzBuzzPlusPlus = (number) => {
  // YOUR CODE HERE

  let total = [];

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total.push(i);
    }
  }
  return total.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

// Test cases
console.log(fizzBuzzPlusPlus(10)); // 23
console.log(fizzBuzzPlusPlus(15)); // 45
console.log(fizzBuzzPlusPlus(35)); // 258
console.log(fizzBuzzPlusPlus(500)); //57918

//________________________________alternative_________________________ //

const fizzBuzzPlusPlus2 = (number) => {
  // YOUR CODE HERE
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
};

// Test cases
console.log(fizzBuzzPlusPlus2(10)); // 23
console.log(fizzBuzzPlusPlus2(15)); // 45
console.log(fizzBuzzPlusPlus2(35)); // 258
console.log(fizzBuzzPlusPlus2(500)); //57918
