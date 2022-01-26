// Write a function that takes a string input: 'str'
// Return the number / count of vowels in the input string.
// For the purpose of this assignment, consider 'a', 'e', 'i', 'o' and 'u'
// as vowels
// the input string will consist of lower case letters

const countTheVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  const myString = str.split('').map((letter) => {
    return vowels.includes(letter) ? counter++ : 0;
  });
  return counter;
};

console.log(countTheVowels('hello world')); // 3

// ________________ PSEUDO CODE___________ //

// define the vowels array
// destructure the string into an array of letters
// filter through each letter
// RETURN true/potato/1 if the vowels array INCLUDES a letter
// RETURN the length of the filtered values

//____________________ INCLUDES?______________________//

let friends = ['Gavin', 'Richard', 'Erlich', 'Gilfoyle'];

console.log(friends.includes('Erlich')); // true

//_____________________ LOOP VERSION ____________ //

const countVowelsLoop = (str) => {
  // initialize a counter

  let counter = 0;

  // define the vowels array
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  // loop through the input string
  for (let i = 0; i < str.length; i++) {
    // for each item in the array (i), loop through the vowels array and see if it matches
    for (let j = 0; j < vowels.length; j++) {
      // if there is a match, increase the counter by 1
      if (str[i] === vowels[j]) {
        counter++;
      }
    }
  }
  // return the vowel counter
  return counter;
};

console.log(countTheVowels('this is a string')); // 4
