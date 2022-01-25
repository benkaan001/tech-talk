// Write a function that takes in an array of numbers,
//and then returns a new array with each number doubled.

const returnDoubled = (array) => {
  return array.map((x) => x * 2);
};

// Test cases:
console.log(returnDoubled([1, 2, 3])); //[2, 4, 6]
console.log(returnDoubled([4, 3, 3, 3, 4])); //[8, 6, 6, 6, 8]
console.log(returnDoubled([6, 6, 6, 6, 6, 6])); // [12, 12, 12, 12, 12, 12]

// ------- LOOP VERSION --------- //

const returnDoubledLoop = (array) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
  }
  return newArray;
};

console.log(returnDoubledLoop([1, 2, 3])); //[2, 4, 6]
