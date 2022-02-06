/* 

JS engine is a single-threaded programmin language, meaning it has only one
call stack and do only one thing at a time. 

JS executes the code from top to bottom line by line, meaning it is synchronous.

Event loop brings asynchoronousity to JS engine by enabling it to execute other 
tasks such as Fetching Data or displaying a spinner while waiting for another 
task to complete. 

The event loop is a constantly running process that monitors both
the callback queue(FIFO) and the call stack(LIFO).

If the stack is not empty, the EL will wait until the call stack is empty
and then place the next function from the callback queue. 

*/

console.log('Hi 👋🏼');

setTimeout(() => {
  console.log('Execute immediately!!!!!');
}, 0);

console.log('Bye! ✌🏼');

/*

output will be

Hi 👋🏼
Bye! ✌🏼
Execute immediately!!!!!


This is because regardless of the timer's set timeout value, JS engine places
the callback on the queue and executes it when the call stack is empty. 

*/
