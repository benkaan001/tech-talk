// 1. Create a new class construction called Vacation using ES6 `Class` syntax
class Vacation {
  // 2. Call constructor() and pass in the following parameters: location, travelType, cost, hotelIncluded
  constructor(location, travelType, cost, hotelIncluded) {
    // 3. Assign those parameters within the constructor
    this.location = location;
    this.travelType = travelType;
    this.cost = cost;
    this.hotelIncluded = hotelIncluded;
  }

  // 4. Create setters and getters for each of the constructor parameters using the 'get' and 'set' keywords
  // GOOGLE the 'get' and 'set' keywords if you're unsure what these are
  set setLocation(location) {
    /*YOUR CODE HERE*/
    this.location = location;
  }
  get getLocation() {
    /*YOUR CODE HERE*/
    return `The location is set to ${this.location}`;
  }
  /*YOUR CODE HERE FOR THE REST OF THE GETTERS AND  SETTERS*/

  set setTravelType(travelType) {
    this.travelType = travelType;
  }

  get getTravelType() {
    return `You are traveling by ${this.travelType}`;
  }

  set setCost(cost) {
    this.cost = cost;
  }

  get getCost() {
    return `The total cost of your vacation is $${this.cost}`;
  }

  set setHotelIncluded(hotelIncluded) {
    this.hotelIncluded = hotelIncluded;
  }

  get gethotelIncluded() {
    return `Includes hotel: ${this.hotelIncluded}`;
  }
}

// 5. Create a new instance of Vacation
// For example `const Mariam = new Instructor('Houston', 'JavaScript', true,  false, 24);`

/*YOUR CODE HERE*/
const exploreThailand = new Vacation('Phuket', 'air', 2000, false);

// 6. Console log each of this new instance's property values
// location
// travel type
// cost
// whether the hotel is included

/*YOUR CODE HERE*/
console.log(exploreThailand.getLocation); //The location is set to Phuket
console.log(exploreThailand.getTravelType); // You are traveling by air
console.log(exploreThailand.getCost); // The total cost of your vacation is $2000
console.log(exploreThailand.gethotelIncluded); // Includes hotel: false
