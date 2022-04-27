const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
let countries = ['Finland', 'Sweden', 'Norway'];

// create an empty set
const emptySet = new Set(); // Set(0) {}
console.log(emptySet);

// create a set containing 0 to 10 using loop
for (let i = 0; i <= 10; i++) {
  emptySet.add(i);
}
console.log(emptySet); // Set(11) { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// remove an element from the set
emptySet.delete(0);
console.log(emptySet); // Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// clear a set
emptySet.clear();
console.log(emptySet); // Set(0) {}

// create a set of 5 string elements from an array
let array = ['string1', 'string2', 'string3', 'string4', 'string5'];
let stringSet = new Set(array);
console.log(stringSet); // Set(5) { 'string1', 'string2', 'string3', 'string4', 'string5' }

// create a map of countries and number of characters of a country
let length = countries.map((country) => country.length);
let combined = []; // [ [ 'Finland', 7 ], [ 'Sweden', 6 ], [ 'Norway', 6 ] ]
for (let i = 0; i < countries.length; i++) {
  combined.push([countries[i], length[i]]);
}
const countriesMap = new Map(combined);
console.log(countriesMap); // Map(3) { 'Finland' => 7, 'Sweden' => 6, 'Norway' => 6 }
