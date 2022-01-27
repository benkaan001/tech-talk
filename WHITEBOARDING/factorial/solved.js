// recursive method

const factorialize = (num) => {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
};

console.log(factorialize(5)); // 120

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
