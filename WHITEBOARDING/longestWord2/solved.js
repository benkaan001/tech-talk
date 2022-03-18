/*
Write a JavaScript function that accepts a string as a parameter
and find the longest word within the string

Example string : 'Web Development Tutorial'
Expected Output : 'Development'

*/

const findLongest = (s) => {
  // split the sentece into words
  // using reduce, initialize acc with an emptry array
  // compare the current word with the accumulator
  // if the length of current word is longer than the word in the the acc array, replace the word in the acc with the current word
  // return the acc
  // return the result of the reduce

  let string = s.split(' ');
  let output = string.reduce((acc, curr) => {
    if (curr.length > acc.length) {
      acc.push(curr);
      acc = curr;
    }
    return acc;
  }, []);

  return output;
};

console.log(findLongest('Web Development Tutorial')); // Development
