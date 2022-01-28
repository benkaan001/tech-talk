/*

A recursive function is a function that calls itself until it stops calling itself,
based on a condition defined. If not, we will get the 'call stack size exceeded' error.

function recurse (){

    if(condition){
        🛑 STOP!
    } else {
        👍🏻 recurse()
    }
}

 */

// fizzBuzz recursively

const recursiveCountDown = (num) => {
  // what would you like the function to do without the condition
  console.log(num);

  // declare the condition that specifies when the function should stop
  while (num - 1 > 0) {
    return recursiveCountDown(num - 1);
  }
};

recursiveCountDown(10); // 10,9,8,7,..,1

/********************

calculate the sum of n natural numbers from 1 to n

sum(n) = n + sum(n-1)
sum(n-1) = n-1 + sum(n-2)
...
sum(1);

***********************/

function sum(n) {
  if (n < 1) {
    return n;
  } else {
    return n + sum(n - 1);
  }
}

sum(10); //55

// // refactor

// const sum2 = (n) => (n < 1 ? n : n + sum2(n - 1));

// sum2(10); //55
