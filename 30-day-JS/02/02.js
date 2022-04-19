/*
Write a function which takes an array parameter and returns an array of the data types of each item:

*/

function checkDataTypes(arr) {
  return arr.map((item) => typeof item);
}

const arr = ['Asabeneh', 100, true, null, undefined, { job: 'teaching' }];
console.log(checkDataTypes(arr)); // ['string', 'number', 'boolean', 'object', 'undefined', 'object'];
const mixedData = ['John', 25, 'David', 30, 'Sara', 22];
console.log(checkDataTypes(mixedData)); // ['string', 'number', 'string', 'number', 'string', 'number'];
