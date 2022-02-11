function sayHi() {
  return (() => 0)();
}
console.log(typeof sayHi()); // number
console.log(typeof sayHi); // function
