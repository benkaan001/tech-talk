/*
Array destructuring preserves the original array.

*/

// we have an array with userName and age

let user = ['Ben', 'Kaan'];

let [firstName, lastName] = user;

/*
under the hood the JS engine sets
firstName = user[0]
lastName = user[1]

*/
console.log(firstName); // Ben
console.log(lastName); // Kaan

let [name, city] = 'Marek Austin'.split(' ');
console.log(name); // Marek
console.log(city); // Austin

//___________________________________________//

let admin = {
  canOverride: true,
  location: 'USA',
};
for (let [key, value] of Object.entries(admin)) {
  console.log(`${key} : ${value}`);
  // canOverride: true
  // location: USA
}
