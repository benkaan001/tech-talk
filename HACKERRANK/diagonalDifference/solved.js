function diagonalDifference(arr) {
  // Write your code here

  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    leftSum = leftSum + arr[i][i];
    rightSum = rightSum + arr[i][j];
  }
  return Math.abs(leftSum - rightSum);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
); // 2

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
); // 15
