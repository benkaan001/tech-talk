const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
// Print the product items as follows:

const printProducts = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price == '' || arr[i].price === ' ') arr[i].price = 'unknown';
    console.log(`The price of ${arr[i].product} is ${arr[i].price} euros.`);
  }
};

console.log(printProducts(products));

/*
The price of banana is 3 euros.
The price of mango is 6 euros.
The price of potato is unknown euros.
The price of avocado is 8 euros.
The price of coffee is 10 euros.
The price of tea is unknown euros.

*/

// Use method chaining to get the sum of the prices(map, filter, reduce)

let prices = products.map((item) => item.price); // [ 3, 6, NaN, 8, 10, NaN ]
let filtered = prices.filter((item) => item > 0); // [ 3, 6, 8, 10 ]
let total1 = filtered.reduce((acc, curr) => (acc += curr)); // 27

// Calculate the sum of all the prices using reduce only

let total = products.reduce((acc, curr) => {
  let { price } = curr;
  if (typeof price == 'number') {
    acc = acc + price;
  }
  return acc;
}, 0);
