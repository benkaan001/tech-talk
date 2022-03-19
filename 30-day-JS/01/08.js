//Write a function which removes items from the middle of an array
//and replace with three items.

const removeMiddleItem = (arr1, arr2) => {
  let itemsFromArray = [];
  itemsFromArray.push(arr1[0], ...arr2, arr1[arr1.length - 1]);
  console.log(itemsFromArray);
};

removeMiddleItem([1, 2, 3], [4, 5, 6]); // [1, 4, 5, 6, 3];
removeMiddleItem([1, 2, 3, 4], [4, 5, 6]); // [1, 4, 5, 6, 4];
