// you are given a sting composed of As and Bs. Find out the number of characters
// that need to be removed to make sure the string doesn't contain any matching
// adjacent characters

// i.e. string = aaaabbb => must remove a total of 5 characters ( 3 a's and 2 b's) to make it ab

const removeAd = (string) => {
  let stringArr = string.split('');

  let counter = 0;

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === stringArr[i + 1]) {
      counter++;
    }
  }
  return counter;
};

console.log(removeAd('aaaa')); // 3
console.log(removeAd('aaaabbb')); // 5
