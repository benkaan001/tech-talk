/*

flat can take an optional 'depth' parameter into which we can pass a numeric number as
an argument to determine the array depth that we would like to flatten

*/

let array = [0, 1, 2, [10, 20, [3, 4]]];
let flatten = array.flat(3);
console.log(flatten); // [ 0, 1, 2, 10, 20, 3, 4]

let arr = [0, 1, 2, [[[3, 4]]]];
let flat = arr.flat(2);
console.log(flat); // [0, 1, 2, [3, 4]]
