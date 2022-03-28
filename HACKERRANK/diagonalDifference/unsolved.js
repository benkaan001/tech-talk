/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

EXAMPLE

1 2 3
4 5 6
9 8 9

leftToRightDiagonal = 1 + 5 + 9 = 15
rightToLeftDiagonal = 3 + 5 + 9 = 17
Their absolute difference is 2


*/

function diagonalDifference(arr) {
  // Write your code here
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
