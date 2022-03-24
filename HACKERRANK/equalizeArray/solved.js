/*
reduce the array into key/value pairs
iterate through the object to retrieve the key values
sort these key values from max to min - max value stands for the number that repeated the most
return the difference between the array length and the number of times the most repeated item


*/

function equalizeArray(arr) {
  // Write your code here
  let objects = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let values = Object.values(objects).sort((a, b) => b - a);
  return arr.length - values[0];
}

console.log(equalizeArray([3, 3, 2, 1, 3])); // 2
console.log(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3])); // 4
