/* 
Give a number N, return the index value of the Fibonacci sequence,
where the sequence is:

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

The sequence is relatively simple mathematics. Each value is the sum
of the previous two values or:

F(n) = F(n-1) + F(n-2)
*/

const fib = (num) => {
  // The zeroth and the first numbers of the sequence are 0 and 1 respectively.
  // So we can create our conditional to return the num if the number is 0 or 1

  if (num < 2) {
    return num;
  }

  return fib(num - 1) + fib(num - 2);
};

console.log(fib(5)); // 5
console.log(fib(8)); // 21

// const fibonacci = (num) => {
//   if (num < 1) {
//     return 1;
//   }

//   return fibonacci(num - 1) + fibonacci(num - 2);
// };

// console.log(fibonacci(5));
