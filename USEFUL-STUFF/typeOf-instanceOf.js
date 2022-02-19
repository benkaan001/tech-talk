/*

The typeof operator checks if a value belongs to one of the 7 basic types
-> boolean, string,num,object,function, undefined, symbol

typeof(null) will always return object

The instanceof operator checks if an OBJECT is a of the specified type.
Instanceof examines the prototype of an object.


*/
class Cat {
  constructor(hasAttitude) {
    this.hasAttitude = hasAttitude;
  }
}

let fluffy = new Cat();
fluffy instanceof Cat; // true

//__________________ typeof_______________________________//

let value = fluffy;
typeof value; // object

// TRICKY typeOf

function sayHi() {
  return (() => 0)();
}
console.log(typeof sayHi()); // number
console.log(typeof sayHi); // function
