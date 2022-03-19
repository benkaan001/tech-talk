// Write a funch which takes any number of arguments and return the sum of the arguments

function sum() {
  let args = [];
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  let result = args.reduce((acc, curr) => (acc += curr));
  return console.log(result);
}

sum(1, 2, 3); // 6;
sum(1, 2, 3, 4); // 10;
