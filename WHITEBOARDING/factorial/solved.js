// recursive method

const factorialize = (num) => {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
};

console.log(factorialize(5)); // 120
/*
factorial(3) returns 3 * factorial(2)
factorial(2) returns 3 * 2 * factorial(1)
factorial(1) returns 3 * 2 * 1 * factorial(0)
factorial(0) returns 3 * 2 * 1 * 1



*/

//_______________________ LOOP VERSION __________________//

const factorialize2 = (num) => {
  let result = num;
  if (num === 0 || num === 1) {
    return 1;
  } else {
    while (num > 1) {
      num--;
      result *= num;
    }
    return result;
  }
};
console.log(factorialize2(6)); //720
