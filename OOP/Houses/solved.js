// create a constructor called House that takes the following parameters: style, numOfRooms, squareFootage, hasCentralAir, color
class House {
  constructor(style, numOfRooms, squareFootage, hasCentralAir, color) {
    // assign each of the parameters a value
    this.style = style;
    this.numOfRooms = numOfRooms;
    this.squareFootage = squareFootage;
    this.hasCentralAir = hasCentralAir;
    this.color = color;
    // create a method called printBrochure that prints each value to the console

    this.printBrochure = function () {
      // your code here to print to console
      console.log(
        `This amazing ${this.style} house has ${this.numOfRooms} rooms, provides ${this.squareFootage} footage, hasCentralAir: ${hasCentralAir}, and colored in ${this.color}`
      );
    };
  }
}

// create an instance of House called 'blueHouse' that is a ranch home with 12 rooms, 1500sqft, does have central air and is blue in color
var blueHouse = new House('ranch', 12, 1500, true, 'blue');

// create an instance of House called 'redHouse' that is a craftsman style home with 15 rooms, 2500sqft, does have central air and is red in color

const redHouse = new House('craftsman', 15, 2500, true, 'red');

// create an instance of House called 'greenHouse' that is a duplex sty;e home with 6 rooms, 800sqft, does NOT have central air and is blue in color

const greenHouse = new House('duplex', 6, 800, false, 'green');
// call the printBrochure method for each home
blueHouse.printBrochure();
redHouse.printBrochure();
greenHouse.printBrochure();

// the green house gets an update! change the value of hasCentralAir from false to true

greenHouse.hasCentralAir = true;

// the blue house gets an extension added! add 4 rooms to it, and 900sft of space
blueHouse.numOfRooms += 4;
blueHouse.squareFootage += 900;

// reprint the brochures for the blue house and the green house
greenHouse.printBrochure(); //This amazing duplex house has 6 rooms, provides 800 footage, hasCentralAir: false, and colored in green
blueHouse.printBrochure(); // This amazing ranch house has 16 rooms, provides 2400 footage, hasCentralAir: true, and colored in blue
