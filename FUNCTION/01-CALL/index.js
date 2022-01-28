let person1 = {
  firstName: 'Veda',
  lastName: 'Inan',
  printFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

let person2 = {
  firstName: 'Bilkem',
  lastName: 'Ozcan',
};

person1.printFullName(); // Veda Inan

/*------------------Call Method---------------------//

----> Call method is also known as function borrowing. We can borrow functions from other objects,
and use those functions with the current object. In this example we are going to borrow the
printFullName method from from  `person1` object.

CALL is a special function method that each function in JS has access to. It takes two arguments:
in our example we need to pass in what we want the printFullName to refer to as 'this'  */

person1.printFullName.call(person2); // Bilkem Ozcan

// here prinFullName is attached to person1, that is why we have to call it with person1 when we
// want to borrow it for another object. A better way would be --->
// if we have a method being shared by ojects, we keep it independent as follows:

let person3 = {
  firstName: 'Ben',
  lastName: 'Kaan',
};
let printFullName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

let person4 = {
  firstName: 'Marek',
  lastName: 'Kasianiuk',
};

printFullName.call(person3); // Ben Kaan
printFullName.call(person4); // Marek Kasianiuk

// let's suppose that the printFullName method/function takes in additional
// parameters such as hometown, country, zipcode, etc. ----> All we need to do
// would be to pass in those arguments into the call method's arguments as shown below

let printFullName2 = function (country, zipcode) {
  console.log(
    `${this.firstName} ${this.lastName} lives in ${country} in zipcode ${zipcode}`
  );
};

printFullName2.call(person3, 'USA', '78752'); //Ben Kaan lives in USA in zipcode 78752

printFullName2.call(person1, 'Turkey'); // Veda Inan lives in Turkey in zipcode undefined

/* 

Notice how we get undefined for Veda's zipcode since we did not pass any argument 
for that parameter. 

Additionally notice how we don't use 'this' in the country and zipcode because they are
not defined in our objects */
