/*

write a multiplication function that will return the following

console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48

*/

function funkyMul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

console.log(funkyMul(2)(3)(4)); // 24
console.log(funkyMul(3)(4)(5)); // 60

// __________ try to print the sum despite the referenceError________ //

function funkySum(x) {
  var a = 2;
  return function (y) {
    let b = 4;
    return function (z) {
      let c = 6;
      return x * a + y * b + z * c;
    };
  };
}
try {
  console.log(a); // closure in action
} catch (error) {
  console.log(error);
}
console.log(funkySum(10)(11)(12)); //136
