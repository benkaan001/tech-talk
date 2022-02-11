/*

Write code to create a function that accepts a number (`n`)
and returns a new number that satisfies the look-and-say-sequence
For example, if we were given the number `225332221`, we could break this number into the following groups:

1. 2 number 2s
2. 1 number 5
3. 2 number 3s
4. 3 number 2s
5. 1 number 1

We'd combine these to get the look-and-say-sequence: `2215233211`.

*/

const lookAndSay = (n) => {
  // turn the number to an iterable array of string

  let str = n.toString().split('');

  // reduce the array into an object with key/value pairs that give us a count of
  // how many times each number appears in the string.

  let obj = str.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  // destructure this object to get key/value entries in an array, which will be
  // nested.
  let entries = Object.entries(obj); // [ [ '2', 3 ], [ '4', 2 ], [ '5', 1 ] ]
  // then flatten the array to concetanate all the subarrays
  let flat = entries.flat(1); // [ '2', 3, '4', 2, '5', 1 ]
  // reverse the order before joining them into a string
  let result = flat.reverse().join(''); // 152432 => string
  // coerse the string into a number
  return Number(result); // 152432 => NUMBER
};

console.log(lookAndSay(544222)); // 152432
