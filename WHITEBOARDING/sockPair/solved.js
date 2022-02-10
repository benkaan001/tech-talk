/*
Given an array of integers representing the color of each sock,
determine how many pairs of socks with matching colors there are.

*/

function sockPair(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      count++;
      // don't forget to increment i by one!
      i += 1;
    }
  }
  return count;
}

console.log(sockPair([10, 20, 20, 10, 10, 30, 50, 10, 20]));
