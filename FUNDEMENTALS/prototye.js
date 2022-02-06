/*

Inheritance allows an object to use the properties and methods of another
object without duplicating the code.


Instead of classical inheritance that other object-oriented programming
languages such as Java and C++, JS uses prototypal inheritance.

In prototypal inheritrance, an object inherits properties from another object
via the prototype linkage.

JS engine has a built-in Object() function and an anonymous object that can be
referenced by Object.prototype.


*/

let person = {
  firstName: 'John',
  lastName: 'Doe',
  greet: function () {
    console.log(`Hello I am ${this.firstName + this.lastName}`);
  },
};
person.greet(); // Hello I am John Doe

/*

Our person object has a link to the anonymous object referenced by the Object() function.
For instance our object can call any of the methods this anonymous object has - such as
toString() or valueOf()


*/
console.log(person.toString()); // [object Object]
console.log(person.valueOf()); // { firstName: 'John', lastName: 'Doe', greet: [Function: greet] }
