function miniMaxSum(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let copy = [...sorted];
  sorted.pop();
  let min = sorted.reduce((acc, curr) => acc + curr);
  copy.shift();
  let max = copy.reduce((acc, curr) => acc + curr);

  return console.log(min + ' ' + max);
}

miniMaxSum([1, 3, 5, 7, 9]); // 16  24
