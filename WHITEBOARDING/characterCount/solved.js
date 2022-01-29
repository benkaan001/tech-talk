// Write code to create a function that accepts a string and returns
//an object containing the number of times each character appears in the string

const characterCount = (str) => {
  let strArr = str.split('');

  return strArr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
};

console.log(characterCount('potato')); // { p: 1, o: 2, t: 2, a: 1 }
