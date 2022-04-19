/*
Write a function named shuffle, it takes an array parameter and it returns a shuffled array.
*/

console.log(shuffle([1, 2, 3, 4, 5])); // [3,1,5,2,4]

// go through the array in reverse order
// generate a random num from 0 to i
// swap each item with a random one

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * i + 1);
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  return arr;
}
