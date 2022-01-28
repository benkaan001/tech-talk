/* 
STATEMENT vs DEFINITION vs EXPRESSION 

The key difference between a function statement and a function expression how they are hoisted.
Notice how we are able to call function a even before declaring it. When we try to call b() we 
get an error 'b is not a function' because it is treated as any other variable until the code
reached to the function expression line and allocates memory.


*/
a(); // a is called
// b(); // ReferenceError: Cannot access 'b' before initialization

// STATEMENT => refers to the way how a function is stated

function a() {
  console.log('a is called!');
}
// EXPRESSION => when we bind the function to a variable
const b = function () {
  console.log('b is called');
};

// NAMED FUNCTION EXPRESSION => is when we give a name to the function that is already being stored
// in another varaible

const c = function xyz() {
  console.log('this is weird, but possible');
};

c(); // this is weird, but possible
// xyz() // ===> ReferenceError: xyz is not defined

// DECLARATION => just a jargon referring to the same thing as STATEMENT aka using the word function
// in our function statement.

// ANONYMOUS  => a function without a name is an anonymous function. Creating an anonymous function
// without a statement will throw a syntax error on its own.

// function (){

// }  // Uncaught SyntaxError...

//This is because function statements
// require a function name. Anonymous functions are used as values as in the example of const b above.
// b is assigned an anonymous function. OR in the callback of the following filter() method.

['apple', 'orange', 'potato'].filter(function (item) {
  item === 'orange' && console.log('this is an orange');
});
