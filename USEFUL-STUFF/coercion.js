// IMPLICIT COERSION

// when a value of one type is implicitly converted into another type by JS Engine

let x = 1; //number
let y = '1'; // string

let sum = x + y; // 11
console.log(typeof sum); // string

// EXPLICIT COERSION

// when we convert data or values using the built-in JS methods Number() , String() , Boolean()

Number('hello'); // NaN
Number(false); // 0
Number(true); // 1

String(2); // '2'
String(false); // 'false'
String(true); // 'true'

Boolean(0); // false
Boolean(1); // true
Boolean(2); // true
