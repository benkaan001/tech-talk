// Import the Barista class
const Barista = require('./Barista');

// Create a new class called Manager that will inherit properties and methods from the Barista class
class Manager extends Barista {
  // Create a constructor that takes the original four  paramaters,
  //but adds 'adminLevel' and 'role' for our Admin class
  constructor(firstName, lastName, age, coffeeSkillLevel, adminLevel, role) {
    // Don't forget to call super for the inherited properties
    // set the new 'adminLevel' and 'role' properties
    super(firstName, lastName, age, coffeeSkillLevel);
    this.adminLevel = adminLevel;
    this.role = role;
  }

  // Create a new method called authorizeAccess on the Admin class that returns a string stating the admin's adminLevel.

  authorizeAccess() {
    return console.log(
      `${this.firstName} has authority level of ${this.adminLevel} because of his/her role as ${this.role}`
    );
  }
}

// Create a new instance of the Admin class, pass in all the necessary properties

const sue = new Manager('Sue', 'Liu', 40, 10, 1, 'supervisor');

// Call the authorizeAccess method on the Admin class

sue.authorizeAccess();

// Call the getCoffeeSkillLevel method on the Admin class that is inherited from the Barista class,
//this should work even though you didn't define getCoffeeSkillLevel in the Admin class
sue.getCoffeeSkillLevel();

// assign it to a variable called skillLevel, and then console log it

// run your program to check it all works and that you get two outputs
