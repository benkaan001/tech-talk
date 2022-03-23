function repeatedString(s, n) {
  // create the infinite string
  // slice the string from 0 to nth point
  // split the string into an array and sort
  // filter through the sorted array to find values matching a
  // return the filtered array length;

  let string = s.repeat(n + 1);
  let sliced = string.slice(0, n).split('');
  let sorted = sliced.sort();
  let filtered = sorted.filter((letter) => letter === 'a');
  return filtered.length;
}

console.log(repeatedString('abcac', 10)); // 4
console.log(repeatedString('a', 10000)); // 10000
