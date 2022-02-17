/*

for...in allows us to iterate through all the keys of an object

for (let key in object){
    ...
}

using key word is the common convention, alternatively we can use
"for (let prop in object)" etc

*/

let user = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: '45',
  isAdmin: true,
};

for (let key in user) {
  console.log(key); // firstName, lastName, age, isAdmin
  console.log(user[key]); // Jane, Doe, 45, true
}

// sum object properties

let salaries = {
  Veda: 100,
  Mel: 200,
  Bilkem: 300,
  Marek: 400,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key]; //1000
}

// multiply numeric values by 2

let groceries = {
  bread: 100,
  cheese: 500,
  includesTax: true,
};

function findAndMultiply(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
      sum += obj[key];
    }
  }
  return sum;
}

console.log(findAndMultiply(groceries)); // 1200
console.log(groceries); // { bread: 200, cheese: 1000, includesTax: true }
