/*

Code is written;

JS executes the code/script:

1. A global execution context (GEC) gets pushed to the bottom of the call stack

GEC has two parts: memory creation and code execution.

During the memory creation phase, JS engine moves the variables and fuction declarations to the top
of our code. This is called hoisting.

*/

//_____________ VARIABLES___________ //

//In the example below, JS engine places the variable 'text' in the memory and INITIALIZES its value to undefined.

console.log(text); // undefined
var text = 'yes';

// under the hood this is what it looks like

var text;
console.log(text);
text = 'yes';

//______________ LET or CONST________ //

// Notice the error points out that the variable 'secret' is already in the heap memory. However,
// it has NOT been initialized yet.  Under the hood, JS engine hoists let and const as well,
// however it doesn't give them the initial value of undefined. Hence the error.

console.log(secret); //  "ReferenceError: Cannot access 'secret' before initialization
let secret = 'shhh';

//_______________ GHOST VARIABLE___________//

// If we try to access a variable that does not exist, notice that we will get a
// NOT DEFINED error.

console.log(ghost); // ReferenceError: ghost is not defined

// _______________ FUNCTION  DECLARATION ___________ //

// Like variables, function DECLARATIONS are also hoisted

printMessage(); // hello

function printMessage() {
  console.log('hello');
}

/********************************/

/*

under the hood, the function gets hoisted to the top

function sum(param1, param2) {
  return param1 + param2;
}

...

*/

let num1 = 5;
let num2 = 10;
let result = sum(num1, num2);
console.log(result); // 15

function sum(param1, param2) {
  return param1 + param2;
}

//_____________ FUNCTION EXPRESSIONS _________________//

/*
JS Engine does NOT hoist function expressions or arrow functions.

During the creation of the GEC, JS engine assignes 'undefined' to var add,
when let res= add(...) is executed, add is still undefined. That's why
we get the error stating that add is not a function. If we

*/

let numOne = 5;
let numTwo = 10;
let res = add(numOne, numTwo);
console.log(res); // TypeError: add is not a function
var add = function (a, b) {
  return a + b;
};

// the same concept applies to ===> functions as well, since arrow functions are
// just syntactic sugar for defining function expressions, they are not hoisted.
