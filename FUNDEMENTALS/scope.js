/*

SCOPE determines the visibility and accessibility of a variable. 

There are three types: GLOBAL - LOCAL - BLOCK(const/let)


*/

//_________ GLOBAL ____________ //

// variables that are declared outside of functions. Variables that get stored in the memory of the
// global execution context.

var message = 'I am global';

function local() {
  var message = 'I am local';
  console.log(message);
}
local();
console.log(message);

// I am local
// I am global

//_____________ LOCAL____________ //

// variables that are accessible inside a function's execution context.

// __________ SCOPE CHAIN__________ //

const text = 'GLOBAL';

function printText() {
  console.log(text);
}
printText(); // GLOBAL

/*

Under the hood, JS looks for a text variable declared inside printText. When it cannot find,
it goes up to its parent's lexical environment, which is parent's local memory along with its parent's
lexicial env. It finds the text in the global execution context. 

Notice what happens if we were to declare a variable with the name text after console.log(text) statement
inside the function block. This will result in either undefined if the variable is declared with var
or REFERENCE ERROR if it is declared with block scope variables LET or CONST. (Hoisting!)

*/
//_______________________ VAR => undefined_______________________//
const text2 = 'GLOBAL';

function printText2() {
  console.log(text2);
  var text2 = 'I am just a good old variable! :( ';
}
printText2(); // undefined

//_____________________ (BLOCK SCOPE) LET/CONST => ReferenceError!!!________________//

const text3 = 'GLOBAL';

function printText3() {
  console.log(text3);
  let text3 = 'ES6 rules!';
}
printText3(); // ReferenceError: Cannot access 'text3' before initialization

//________________ DEEPER SCOPE CHAIN EXAMPLE_______________//

const num = 100;
const currency = 'USD';

function a() {
  let num = 10;
  b();
  function b() {
    console.log(num, currency);
  }
}
a(); // 10 USD
