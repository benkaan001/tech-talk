// recursive method

const factorialize = (num) => {
  if (num < 0) {
    return 'we only accept positive numbers';
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
};

console.log(factorialize(5)); // 120

//_______________________ LOOP VERSION __________________//

const factorilizeLoop = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = num; i > 1; i--) {
      num = num * i;
    }
  }
  return num;
};

console.log(factorialize(7)); //5040
