// In this exercise you will be creating two ES6 classes, Barista and Manager, which extends and inherits from Barista
// Using the comments, fill in the missing items for each class
// Don't forget to test your work as you go

// Create a class constructor named Barista
class Barista {
  // Create a constructor that takes the properties 'firstName', 'lastName', 'age', and 'coffeeSkillLevel' and set them
  constructor() {}

  // create getters and setters for each constructor item

  // firstName
  getFirstName() {
    return this.firstName;
  }
  setFirstName(value) {
    this.firstName = value;
  }

  // lastName

  // age

  // coffee skill level
}

// Create an instance of the Barista class, give it the four original properties

// Call the getCoffeeSkillLevel method

// Your barista went through some training, increase their skill level by 1

// Call the getEmotion method ... did your new emotion get console logged?

// Export your class
module.exports = Barista;
