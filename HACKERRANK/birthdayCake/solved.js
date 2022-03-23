function birthdayCakeCandles(candles) {
  // sort the array from max to min
  // remove the max value via arr.shift() and assign it to max
  // create a counter that is set to 1 since the max is shifted from the array
  // filter through the sorted filter and increase the counter by 1 if the
  // filtered num matches max
  // return the count
  let sorted = candles.sort((a, b) => b - a);
  let max = sorted.shift();
  let count = 1;
  sorted.filter((num) => {
    if (num === max) {
      count++;
    }
  });
  return count;
}
console.log(birthdayCakeCandles([4, 4, 1, 3])); // 2
