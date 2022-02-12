const acronymBuilder = (str) => {
  let wordArr = [];

  str
    .toUpperCase()
    .split(' ')
    .map((word) => {
      wordArr.push(word[0]);
    });
  return wordArr.join('');
};

console.log(acronymBuilder('always be coding')); // ABC
