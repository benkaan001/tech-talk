/*

LET vs CONST 

*******************   VALUE REASSIGNMENT   *****************


Both are block-scoped variables. 


Variables declared with let are MUTABLE, meaning that we can change
their values anytime we want.

However, variables declared with const are IMMUTABLE.
We cannont reassign new values to variables declared with const.

*/

let a = 10;
a=20;
a= a+ 5;
console.log(a); // 25

const speedLimit = 35;
speedLimit = 25 // TypeError 

/*

*******************    MISSING INITIALIZER  *****************

Unlike the let keyword, we need to initialize the value to the
variable declared by const. Otherwise, we will get a SyntaxError. 

*/

let x;
console.log(x);  // undefined

const y;
console.log(y); // SyntaxError: Missing initializer in const declaration

/*

CONST w/ OBJECTS & ARRAYS

The const keyword creates a read-only reference to a value. Though the
readonly reference cannot be reassigned, the value can be changed.

AGAIN, we can change the key/value properties of the object, however we cannot
redeclare a variable declared with const. 


*/

// OBJECTS 

const person = { zipCode: 78752 }
person.zipCode = 78745;  // here we are only attempting to change the value 
//of the zipCode property of the person variable
console.log(person.zipCode); // 78745

person = {zipCode: 78799 } // TypeError because we are attempting to
// reassign a different value to the pseson constant

// ARRAYS 

const colors = ['blue'];
colors.push('white');
console.log(colors); // ['blue', 'white' ]

colors.pop();
colors.pop();
console.log(colors); // []

colors = [] // TypeError 