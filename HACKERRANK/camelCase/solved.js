function camelCase(s) {
  // split the string into an array of individual letters
  // set the output value to 1 since the first string is lowercase
  // filter through the string array to filter the letters that are
  // equal to their capitalized values
  // increase the output number by one for each match
  // return the output
  let string = s.split('');
  let output = 1;
  string.filter((letter) =>
    letter === letter.toUpperCase(letter) ? output++ : null
  );
  return output;
}

console.log(camelCase('saveChangesInTheEditor')); // 5
