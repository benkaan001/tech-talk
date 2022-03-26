function beautifulDays(i, j, k) {
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
