/*
Given an array of integers, write a function that calculates the 
product of all integers other than the number at index.

For example, input:

  [7, 12, 8, 9]

your function would return:

  [ 864, 504, 756, 672]

by calculating:

  [12*8*9, 7*8*9, 7*12*9, 7*12*8]


The solution must execute in O(n^2) time. (HINT: you'll want a nested loop!)
Do not use division in your solution. 
*/

const calculateProduct = (arr) => {
  // initiate an empty array to push the calculated values
  let resultArray = [];

  // loop through the input array
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    // create a product variable to hold the product value with initial default value of 1
    // loop through the input array
    // check if the array index does not match the array index of the previous iteration
    // then calculate the product by multiplying the default product value of 1 with
    // the array index value.
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product = product * arr[j];
      }
    }
    // push the product to the resultArray before returning it
    resultArray.push(product);
  }
  return resultArray;
};

console.log(calculateProduct([7, 12, 8, 9])); //  [ 864, 504, 756, 672]
