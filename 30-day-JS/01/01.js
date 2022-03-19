/*
Write a function called checkDataTypes
it takes an array and a data type. I
t returns true if all the array items are the same data types.

*/
const checkDataTypes = (arr, type) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == type) {
      return true;
    } else {
      return false;
    }
  }
};
const numbers = [1, 3, 4];
const names = ['Asab', 'Eyob'];
const bools = [true, false, true, true, false];
const mixedData = ['Asab', 'JS', true, 2019, { name: 'Asab', lang: 'JS' }];
const object = [{ name: 'Asab', lang: 'JS' }];
console.log(checkDataTypes(numbers, 'number')); // true
console.log(checkDataTypes(numbers, 'string')); // false
console.log(checkDataTypes(names, 'string')); // true
console.log(checkDataTypes(bools, 'boolean')); // true
console.log(checkDataTypes(mixedData, 'boolean')); // false
console.log(checkDataTypes(object, 'object')); // true
