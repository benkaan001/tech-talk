/*********************************************************

***   All functions are an instance of the FUNCTION object

***   All functions have two important properties:  LENGTH & PROTOTYPE
 
***   All functions have 3 important methods: APPLY, CALL, BIND

***************************************************************/

function sum(a, b) {
  return a + b;
}
console.log(sum.length); // 2 which is referring to the length of the arguments passed into it
console.log(sum.prototype); // Object{} ==> again, all functions are an instance of the Function object
