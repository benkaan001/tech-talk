/**************************************************************
Functions are first-class citizens. Meaning you can pass function as an argument into another 
function, return a function form a function, store it in a variable, etc. 

In other words, the ability to use functions as values...
*************************************************************/

// ________ STORE IN A VARIABLE______________ //

function add(a, b) {
  return a + b;
}

let sum = add; // [Function: add]

// The sum variable is only referencing the function add and is NOT invoking the funciton.
// Hence we didn't put () at the end of add.

//We have two ways to execute the add function:

let resultAdd = add(2, 2); //4

let resultSum = sum(2, 3); //5

// _________________________ PASS IT AS AN ARGUMENT INTO ANOTHER FUNCTION __________//

// Our convert function is expecting a callback function for the cb parameter and a length value,
// which ends up getting passed into the callback function as an argument in the return statement;

function cToI(length) {
  return length / 2.54;
}

function iToC(length) {
  return length * 2.54;
}

function convert(cb, length) {
  return cb(length);
}

let inches = convert(cToI, 10); //3.937007874015748

let cm = convert(iToC, 10); // 25.4

// const fixed = inches.toFixed(2); //3.94
