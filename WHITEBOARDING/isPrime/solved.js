// Write a function that takes in an integer argument and returns a boolean
//value stating whether the  integer is prime.

// For the purpose of this activity, a prime number is considered a
// natural number greater than 1 that has no positive divisors other than 1 and itself.

const isPrime = (num) => {
  // Check if the number is equal to, or less than, 1. If so, return false because it is not prime
  if (num <= 1) {
    return false;
  } else {
    // Otherwise, loop through the numbers preeding the given num, starting with 2
    for (let i = 2; i < num; i++) {
      // if the num is divisible by [i], it is not prime
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
};

// TEST CASES
isPrime(1); // false
isPrime(29); // true
isPrime(30); // false

/**************************************************************************************

// what are prime numbers?

//---> Is a number that can only two factors : itself and another number other than 1.
// ---> 0 and 1 are not prime numbers
//---> except 2, all even numbers are NOT prime numbers. For instance 4 is divisible
// by 1,2,and 4.

let isPrime2 = (n) => {
  if (n === 2) {
    return true;
  }
  if (n === NaN || n < 2 || !(n % 2)) {
    return false;
  }

  for (let i = 3; i < n - 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
isPrime2(5); // true

*/
