/*
Create a function that takes two strings and returns true if the first argument
ends with the second argument; otherewise return false .
Take two strings as arguments.
Determine if second string matches ending of first string.
Return boolean value.

*/

const yourFunc = (str, substr) => {
  let sub = str.slice(str.length - substr.length);
  return console.log(sub === substr);
};

yourFunc('integrity', 'ity'); // true;
yourFunc('integration', 'tio'); // false;
yourFunc('connection', 'sion'); // false;
yourFunc('connection', 'tion'); // true;
