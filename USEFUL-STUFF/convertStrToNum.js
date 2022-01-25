// Use parseFloat() function, which purses a string and returns a floating point number.

let myString = parseFloat('384.75a');
console.log(myString); // 384.75

// If the string argument cannot be parsed as a number, the result will be NaN

console.log(parseFloat('Ben is 36')); // NaN

// Use parseInt() function, which parses a string and returns an integer.

console.log(parseInt('384.75a')); // 384
