// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique

function sevenRandomNumbers() {
  let arr = [];
  for (let i = 0; i < 7; i++) {
    let random = Math.floor(Math.random() * 10);
    if (arr.indexOf(random) === -1) arr.push(random);
  }
  return arr; //  [ 7, 3, 6, 1, 0, 4, 5 ]
}

function sevenRandomNumbers2() {
  const set = new Set();
  while (set.size < 7) {
    let random = Math.floor(Math.random() * 10);
    set.add(random);
  }
  return [...set]; // [ 7, 3, 6, 1, 0, 4, 5 ]
}

sevenRandomNumbers();
sevenRandomNumbers2();
