/* In this exercise you will be creating two ES6 classes, Barista and Manager,
which extends and inherits from Barista
Using the comments, fill in the missing items for each class
Don't forget to test your work as you go */

// Create a class constructor named Barista
class Barista {
  // Create a constructor that takes the properties
  // 'firstName', 'lastName', 'age', and 'coffeeSkillLevel' and set them
  constructor(firstName, lastName, age, coffeeSkillLevel) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.coffeeSkillLevel = coffeeSkillLevel;
  }

  // create getters and setters for each constructor item

  // firstName
  getFirstName() {
    return this.firstName;
  }
  setFirstName(value) {
    this.firstName = value;
  }

  // lastName

  getLastName() {
    return this.lastName;
  }

  setLastName(value) {
    return (this.lastName = value);
  }

  // age ____________ pay attention to the syntax get / set_________________ //

  get getAge() {
    return console.log(`${this.firstName} is ${this.age} years old.`);
  }
  set setAge(value) {
    return (this.age = value);
  }

  // coffee skill level
  getCoffeeSkillLevel() {
    return console.log(this.coffeeSkillLevel);
  }
  setCoffeeSkillLevel(value) {
    this.coffeeSkillLevel = value;
  }
}

// Create an instance of the Barista class, give it the four original properties

const jade = new Barista('Jade', 'Sterle', 35, 5);

// Call the getCoffeeSkillLevel method

jade.getCoffeeSkillLevel(); // 5

// Your barista went through some training, increase their skill level by 1

jade.setCoffeeSkillLevel(jade.coffeeSkillLevel + 1);

// Call the getCOffeeSkillLevel method to see if the skillLevel is updated

jade.getCoffeeSkillLevel(); //6

// ___________________ get & set syntax difference_________________ //

/* 
jade.getAge(); // ERROR --> 

notice how this is thowing an error when we use get in the getAge() function */

jade.getAge; // Jade is 35 old.

// age Jade by 10 years old.
jade.setAge = jade.age + 10;

jade.getAge; // Jade is 45 years old.

// Export your class
module.exports = Barista;
