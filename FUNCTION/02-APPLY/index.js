/******************************
**** The only difference between apply and call methods is the way we pass arguments

***** Instead of passing arguments individually, we pass them in an array list

**********************************/

let person1 = {
  firstName: 'Veda',
  lastName: 'Inan',
};

let person2 = {
  firstName: 'Bilkem',
  lastName: 'Ozcan',
};

let person3 = {
  firstName: 'Ben',
  lastName: 'Kaan',
};

let person4 = {
  firstName: 'Marek',
  lastName: 'Kasianiuk',
};

let printFullName2 = function (country, zipcode) {
  console.log(
    `${this.firstName} ${this.lastName} lives in ${country} with zipcode ${zipcode}`
  );
};

printFullName2.apply(person1, ['Turkey', '01110']); // Veda Inan lives in Turkey with zipcode 01110

printFullName2.apply(person4, ['USA', '78758']); // Marek Kasianiuk lives in USA with zipcode 78758
