// In this challenge you will be creating two classes,
//one original parent class and one that inherits its methods and properties

// Create a class constructor named User
class User {
  // Create a constructor that takes the properties
  //'firstName', 'lastName', 'age', and 'emotion' and set them

  constructor(firstName, lastName, age, emotion) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.emotion = emotion;
  }
  // create a getEmotion function getter that returns a string
  //saying how the user is feeling

  getEmotion() {
    console.log(`${this.firstName} is feeling pretty ${this.emotion}`);
  }

  // create a setEmotion function setter that sets
  //the value passed in as the new emotion for the object

  setEmotion(value) {
    this.emotion = value;
    console.log(`${this.firstName} is now feeling ${this.emotion}`);
  }
}

// Create an instance of the User class, give it the four original properties

const ben = new User('Ben', 'Kaan', 36, 'excited');

// Call the getEmotion method
ben.getEmotion(); //Ben is feeling pretty excited

// Set a new emotion on the new user
ben.setEmotion('pumped'); // Ben is now feeling pumped

//******************************//

//*********************************//

// Create a new class called Admin that will
//inherit properties and methods from the User class
class Admin extends User {
  // Create a constructor that takes the original four  paramaters,
  //but adds 'adminLevel' and 'role' for our Admin class
  constructor(firstName, lastName, age, emotion, adminLevel, role) {
    super(firstName, lastName, age, emotion);
    this.adminLevel = adminLevel;
    this.role = role;
  }
  // Create a new method called authorizeAccess on the Admin class
  // that returns a string stating the admin's adminLevel.

  authorizedAccess() {
    console.log(`${this.firstName} has admin level of ${this.adminLevel}`);
  }
}

// Create a new isntance of the Admin class, pass in all the necessary properties

const veda = new Admin('Veda', 'Inan', 56, 'positive', 1, 'executor');

// Call the authorizeAccess method on the Admin class

veda.authorizedAccess(); // Veda has admin level of 1

// Call the getEmotion method on the Admin class that is inherited from the User class,
//this should work even though you didn't define getEmotion in the Admin class

veda.getEmotion(); //Veda is feeling pretty positive
