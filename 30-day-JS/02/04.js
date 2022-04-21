/*
Write a function which calculate the average age of the group.
*/
const ages = [35, 30, 17, 18, 15, 22, 16, 20];

const average = (arr) => {
  const total = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return total / arr.length;
};

console.log(average(ages)); // 21.625
