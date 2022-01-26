const cart = [
  {
    title: 'Samsung Galaxy S7',
    price: 599.99,
    quantity: 1,
  },
  {
    title: 'google pixel ',
    price: 499.99,
    quantity: 2,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    quantity: 4,
  },
  {
    title: 'Xiaomi Redmi Note 5',
    price: 399.99,
    quantity: 3,
  },
];

// the goal is to create a single object wtih two key/value pairs {cartTotalQty:X ; cartTotalPrice: Y}

// this will be our initial value that we will pass, therefore we need to destructure it at the
// very beginning as well

// we need to capture the quantity value in the current and add it to the accumulator

// the same goes for cartToalPrice, which is the accumulation of (curr.q * curr.p);

// DON'T FORGET TO RETURN  the acc!

let { cartTotalQty, cartTotalPrice } = cart.reduce(
  (acc, curr) => {
    const { quantity, price } = curr;

    // count total quantity of items in the cart
    acc.cartTotalQty += quantity;

    // count total price of the items in the cart
    acc.cartTotalPrice += quantity * price;

    return acc;
  },
  { cartTotalQty: 0, cartTotalPrice: 0 }
);

// since we are getting a funky number for the totalPrice due to the way items are priced;
// lets reduce the decimal to 2 units only
console.log(cartTotalPrice); // 5599.900000000001;

cartTotalPrice = parseFloat(cartTotalPrice.toFixed(2)); //5599.9

console.log(cartTotalQty, cartTotalPrice); // 10 5599.9
