const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((x) => {
      return x.replace(x[0], x[0].toUpperCase());
    })
    .join(' ');
};

console.log(titleCase('tHIs wHOlE THiNG wILL bE TRANSforMed!!!'));

// This Whole Thing Will Be Transformed!!!

//______________ PSEUDO LOGIC_____________ //

// transform each letter toLowerCase before splitting each word
// split each word so you can map through
// target the first letter in each world and REPLACE it with the same letter that is upperCased
// don't forget to JOIN (' ') them before RETURNING

//________________ LOOP VERSION _____________ //

const titleCaseLoop = (str) => {
  let words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);

    // console.log(words[i].slice(1)); // his ole hing ill e ransformed!!!
  }
  return words.join(' ');
};

console.log(titleCaseLoop('tHIs wHOlE THiNG wILL bE TRANSforMed!!!'));
