/*

All function arguments are ALWAYS passed by value. What this means is that JS engine

first makes copies of the values of the variables before passing them into the function

arguments.

Any change that is made to the variable inside the function body are not reflected
on the variables outsdie the function body.

*/

function square(num) {
  num = num * num;
  return num;
}

let x = 10;
let result = square(x);

console.log(result); // 100
console.log(x); // 10
