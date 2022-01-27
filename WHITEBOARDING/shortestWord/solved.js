// Write a function that takes in a string of words and returns
//the length of the shortest word(s). Make the assumption that
//the string will never be empty, and you do not need to account for differing datatypes.

//_______________STEPS_____________ //

// ---> turn the string into an array of words
// ---> map through the words to extract the lenght of each word
// ---> spread the values of mapped length values in Math.min

const findShortest1 = (str) => {
  const lengthArray = str.split(' ').map((word) => word.length);
  return Math.min(...lengthArray);
};

//____________ alternative_______________ //

// instead of using Math.min, sort the lengthArray from a-b and return the first value

const findShortest2 = (str) => {
  const lengthArray = str.split(' ').map((word) => word.length);
  const sortedArray = lengthArray.sort((a, b) => a - b);

  return sortedArray[0];
};

// TEST CASES
console.log(
  findShortest1(
    'For writers, a random sentence can help them get their creative juices flowing.'
  )
); // 1
console.log(findShortest1('Joe made the sugar cookies; Susan decorated them.')); // 3
console.log(
  findShortest1('We have never been to Asia, nor have we visited Africa.')
); // 2

//_______________ loop version ____________________________ //
const findShortest = (str) => {
  // split the string into seperate words in an array
  let words = str.split(' ');
  // initialize a variable to hold the shortest word, set it to the first item in the array
  let shortest = words[0];
  // loop through the array

  for (let i = 0; i < words.length; i++) {
    // check if the current iterable is shorter than what is already sorted in the result variable
    if (words[i].length <= shortest.length) {
      // if it is replace the variable
      shortest = words[i];
    }
  }
  // return the length of whatever is sorted in the result variable
  return shortest.length;
};

// TEST CASES
console.log(
  findShortest(
    'For writers, a random sentence can help them get their creative juices flowing.'
  )
); // 1
console.log(findShortest('Joe made the sugar cookies; Susan decorated them.')); // 3
console.log(
  findShortest('We have never been to Asia, nor have we visited Africa.')
); // 2
