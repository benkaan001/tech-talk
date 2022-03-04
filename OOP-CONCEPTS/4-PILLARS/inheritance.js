/*
Inheritance allow classes to inherit features of other classes.

Inheritance is from parent to child.

Inheritance enables reusability of classes, as child classes automatically
gain access to functionalities within their parent class.

In JS, inheritance is also known as PROTOTYPING. A prototype object
acts as a template for another object to inherit properties and methods from.
There can be multiple prototype object templates, creating a prototype chain.
*/

//Parent class Dog
class Dog {
  //Declare protected (private) fields
  _attendance = 0;

  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }

  getAge() {
    //Getter
    return this.calcAge();
  }

  calcAge() {
    //calculate age using today's date and birthday
    return this.calcAge();
  }

  bark() {
    return console.log('Woof!');
  }

  updateAttendance() {
    //add a day to the dog's attendance days at the petsitters
    this._attendance++;
  }
}

//Child class HerdingDog, inherits from parent Dog
class HerdingDog extends Dog {
  constructor(name, birthday) {
    super(name);
    super(birthday);
  }

  herd() {
    //additional method for HerdingDog child class
    return console.log('Stay together!');
  }
}
//instantiate a new HerdingDog object
const fluffy = new HerdingDog('Fluffy', '1/12/2019');
fluffy.bark();

/*

fluffy is instantiated from the HerdingDog class and have access to herd() method.

*/
