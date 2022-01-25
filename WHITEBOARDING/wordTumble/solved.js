const wordTumble = (string) => {
  return string
    .split(' ')
    .map((x) => (x.length < 5 ? x : x.split('').reverse().join('')))
    .join(' ');
};

// Test cases
console.log(wordTumble('Hello this is a fantastic example')); //olleH this is a citsatnaf elpmaxe
console.log(wordTumble('This is another test')); // This is rehtona test
console.log(wordTumble('Give me one more shot')); // Give me one more shot
console.log(wordTumble('Elephants are extremely intelligent animals')); // stnahpelE are ylemertxe tnegilletni slamina

//*******************************************************************/

// ------------- USING LOOP -------------- //

const wordTumbleLoop = (string) => {
  // split the string into an array

  let words = string.split(' ');

  // loop through each of the word
  for (let i = 0; i < words.length; i++) {
    // select the words that are at least 5-characters long
    if (words[i].length > 4) {
      // set these words to new words through split, reverse, join

      words[i] = words[i].split('').reverse().join('');
    }
  }
  // return back the original array after joining it
  return words.join(' ');
};

console.log(wordTumbleLoop('Hello this is a fantastic example'));
