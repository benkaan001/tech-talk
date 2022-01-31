/*
JS has two values:

PRIMITIVE (string,number,boolean,undefined,null,symbol,BigInt)
REFERENCE values that refer to OBJECTS

They both get stored on the STACK, since they both represent static data, whose size doesn't change.

Whereas functions and objects are stroed on the HEAP because JS doesn't allocate fixed amount of
memory to functions and objects. 


*/

// this gets stored in the stack

let name = 'Ben';
let age = 36;

// Person variable is still on the stack memory, however this variable
// gets linked to {name:'Ben', age:36} on the heap memory.
// This is why person variable is a reference that refers to an object.

let person = {
  name: 'Ben',
  age: 36,
};

// ______________ REFERENCE === DYNAMIC___________ //

// A reference value allows us to add, change, and delete properties.

let impersonator = person;
impersonator.age = 46;
impersonator.zipcode = 78752;

console.log(person); // { name: 'Ben', age: 46, zipcode: 78752 }
delete person.age;
console.log(impersonator); // { name: 'Ben', zipcode: 78752 }

//__________________ PRIMITIVE ==== NO PROPERTY______________ //

// primitive values cannot have properties. Notice how JS does allow us to add the age
// property to the stranger, but it will not take effect and return us undefined.

let stranger = 'Billy';
stranger.age = 21;
console.log(stranger.age); // undefined

//_________________ COPY_____________________ //

// copying a primitive value from one variable to another only creates an independent seperate copy.
// therefore changing the value in the second variable WON'T effect the first variable.

let primitiveVal = 3;
let primitiveCopy = primitiveVal;
console.log(primitiveCopy); // 3;
primitiveCopy = 30;

console.log(primitiveVal, primitiveCopy); // 3, 30

// whereas updating a reference value of an object also updates the reference values of any other object
// that has the same reference as in the example of person and impersonator.
