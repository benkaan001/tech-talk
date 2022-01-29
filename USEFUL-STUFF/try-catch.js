console.log('print this first');

// print(); // without trycatch it will only print the first console.log statement
//and give use the ReferenceError

try {
  print();
} catch (error) {
  console.log(error);
}

console.log('print this last');

// with try-catch though we are still getting our ReferenceError, both messages still get
// logged to the console.
