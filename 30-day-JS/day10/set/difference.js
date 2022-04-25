/*
Finding the difference between two sets using the filter method
*/

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6, 7, 8, 9];

let setA = new Set(a);
let setB = new Set(b);

let c = b.filter((num) => !setA.has(num));
let setC = new Set(c);

console.log(c); // [ 6, 7, 8, 9 ]
console.log(setC); // Set(4) { 6, 7, 8, 9 }

/*
Extractng the common elements between two sets
*/

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6];

let array1Set = new Set(array1);
let array2Set = new Set(array2);

let commonArray = array1.filter((num) => array2Set.has(num));
let commonArraySet = new Set(commonArray);

console.log(commonArraySet); // Set(3) { 3, 4, 5 }

/*

Combine two sets

There could be several different appoaches

*/

let arr1 = [0, 1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8, 9];
let combinedArray = [...arr1, ...arr2];
let combinedSet = new Set(combinedArray);

console.log(combinedSet); // Set(10) { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }
