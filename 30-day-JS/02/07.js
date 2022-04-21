/*
The following shopping cart has four products.
Create an addProduct, removeProduct ,editProduct , removeAll functions to modify the shopping cart.

EXAMPLE

addProduct( "Meat");
["Milk", "Coffee", "Tea", "Honey", "Meat"]

editProduct(3, "Sugar" );
["Milk", "Coffee", "Tea", "Sugar", "Meat"]

removeProduct(0);
["Coffee", "Tea", "Sugar", "Meat"]
removeProduct(3);
["Coffee", "Tea", "Sugar"]

*/

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

const addProduct = (product) => {
  shoppingCart.push(product);
  return shoppingCart;
};
console.log(addProduct('Meat')); // [ 'Milk', 'Coffee', 'Tea', 'Honey', 'Meat' ]

// it will remove 1 item starting at the given itemIndex number and instert the newProduct in place

const editProduct = (itemIndex, newProduct) => {
  shoppingCart.splice(itemIndex, 1, newProduct);
  return shoppingCart;
};

console.log(editProduct(3, 'Sugar')); // [ 'Milk', 'Coffee', 'Tea', 'Sugar', 'Meat' ]

// it will remove the products starting from the given indexNumber
const removeProduct = (itemIndex) => {
  shoppingCart.splice(itemIndex);
  return shoppingCart;
};
console.log(removeProduct(4)); // ['Milk', 'Coffee'];

/*
Refer to USEFUL-STUFF/splice.js

Array.prototype.splice()

*/
