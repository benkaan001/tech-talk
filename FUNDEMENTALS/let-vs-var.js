/*

******************   AS A GLOBAL OBJECT  ***************************

When we declare a variable with var keyword, the scope of the variable is either global or local.
If we declare it inside a function, it is local; otherwise, it is global.

In fact, when we declare a global variable using var, it become a property of the global object.


*/
var a = 10;
console.log(window.a); // 10 yiels 10 in the browser console.

let b = 20;
console.log(window.b); // undefined because let is not attached to the global object as a property.

/*

**********************  REDECLARATION **********************************

the var keyword allows us to redeclare a variable without any issue.

However, redeclaring a variable using let will result in a SyntaxError

*/

var counter = 10;
var counter;
console.log(counter); // 10

let counter = 0;
let counter;
console.log(counter); // Uncaught SyntaxError: Identifier 'counter' has already been declared

/*
**************************  HOISTING   *****************************

Variables declared with var or let both get hoisted to the top of the block.

Unlike var, which gets initialized with an initial value of undefined,
JS engined does not initialze a let variable. Therefore, we get a ReferenceError,
which gets thrown at us when we try to reference an uninitialized variable.


*/

console.log(gemStone); // undefined
var gemStone = 'diamond';

console.log(location); // Uncaught ReferenceError: Cannot access 'location' before initialization
let location = 'USA';

/*

**********************    TEMPORAL DEAD ZONE      *******************

During the execution context memory creation phase, JS engine assigns storage
spaces to VAR variables and immediately initializes them to undefined.

During the execution context code execution phase, JS engine assigns VAR variables
the specified values if there are any. If not, they remain undefined.

For let variables, during the execution context memory creation phase, JS engine
assigns storage space for LET variables, but it doesn't initialize them. That is why
when/if we try to reference them, we get a ReferenceError.

During the code execution phase, let variables go through the same process as the
var variables go.

Temporal dead zone begins at the beginning of the block and expands to the location
hwere we cannot access the let variables before they are defined.

*/
