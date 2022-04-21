/*
Create a function which filter ages greater than 18.
*/
function above18(arr) {
  return arr.filter((age) => age > 18);
}

const ages = [35, 30, 17, 18, 15, 22, 16, 20];
console.log(above18(ages)); // [35, 30, 22, 20];
