/* 

A closure is a function that preserves the outer scope in its inner scope.

In other words, a closure is a combination of a function and its ability to remember
variables in the outer scope. 

*/

let weirdo = 'weird variable';

function greeting() {
  // greeting function creates a local variable message
  let message = 'hi';

  // sayHi is the inner function that is accessible only inside the greeting function
  function sayHi() {
    // sayHi has access to all the variables in its outer scope including weirdo
    console.log(message);
  }
  sayHi();
}

greeting();

//_______________________________//

let global = 'global variable';

function greet() {
  // local variable message normally only exists during the execution of greet. Once greet is
  // executed, message variable is no longer accessible, UNLESS it has an inner function like
  // sayHello that has a reference to the local variable of greet.
  let message = 'hello';
  let name = 'John';
  function sayHello() {
    console.log(`${message}, my name is ${name}. I have access to ${global}`);
  }
  return sayHello;
}

let hi = greet();
hi(); // has access to boeth name and message

// ___________ in a loop _________ //

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(`after ${i} seconds: ${i}`);
  }, 1000);
}

/*

Returns 

after 4 seconds: 4
after 4 seconds: 4
after 4 seconds: 4

We get the same message after 4 seconds because the callback is a closure.
It remembers the value of i from the last iteration of the loop.

The simplest solution would be declaring our i variable with let instead of var.

*/
