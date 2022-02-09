/*
write a function (i.e., algorithm) that, when given a particular number,
console-logs its index in the data array.

For example, calling findIndex(23) would print 1.

*/

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const findIndex = (num) => {
  return console.log(data.indexOf(num));
};

findIndex(23); // 1

// __________ loop_______//

const findIndexLoop = (num) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === num) {
      return console.log(`${num} is found at index ${i}`);
    }
  }
};

findIndexLoop(23); // 23 is found at index 1
