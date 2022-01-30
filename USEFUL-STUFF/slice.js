/*

slice()

--> returns a copy of the array modified while preserving the original array


slice(start, end)

--> both start and end are optional arguments that we can pass in to point the index location
at which we want to slice our array. 


slice(-2) ... extracts the last two elements in the sequence



*/

arr = [1, 2, 3, 4, 5];

const lastThree = arr.slice(-3); // [ 3, 4, 5 ]
const firstTwo = arr.slice(0, 2); // [ 1, 2 ]
const combined = [...lastThree, ...firstTwo]; // [ 3, 4, 5, 1, 2 ]
