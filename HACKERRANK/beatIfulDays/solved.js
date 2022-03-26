function beautifulDays(i, j, k) {
  // start a counter
  // create a days array and loop from i to j pushing the numbers in the range to the days array
  // map through the days array to reverse each number
  // convert the numbers into strings first befrore split.reverse.join
  // loop through the days array and the numbers array
  // if the difference is divisible by k increate the count by one
  // return the count
  let count = 0;
  let days = [];
  for (let x = i; x <= j; x++) {
    days.push(x);
  }
  let numbers = days.map((num) => {
    return parseInt(num.toString().split('').reverse().join(''));
  });

  for (let i = 0; i < numbers.length; i++) {
    if ((days[i] - numbers[i]) % k == 0) {
      count++;
    }
  }
  return count;
}

console.log(beautifulDays(20, 23, 6));
