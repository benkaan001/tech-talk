function lonelyInteger(a) {
  // Write your code here

  // using reduce get key/value pairs of each element
  // if current element repeats only once, set it to 1
  let count = a.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  // iterate thtrough the object entries using Object.entries()
  // destructure it to key/value pairs and return the key if value = 1
  for (let [key, value] of Object.entries(count)) {
    if (value === 1) return key;
  }
}

console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1])); // 4
