/*

Write a function that, given an array A of N integers,
returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

*/

const solution = (A) => {
  let sorted = A.sort((a, b) => a - b);
  let result = sorted.reduce((acc, curr) => {
    if (acc === curr) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 1);
  return result;
};

console.log(solution([1, 3, 6, 4, 1, 2])); //5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); // 1
