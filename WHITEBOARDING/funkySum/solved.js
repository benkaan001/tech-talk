// create a function that sums the values passed in as argument when arguments
// are seperated with ();

// i.e.  sum(2)(4) should return the same result as sum(2,4);

//_______________________currying______________ //

function curry(x, y) {
  if (typeof y === 'undefined') {
    return function (y) {
      return x + y;
    };
  }
  return x + y;
}

console.log(curry(4, 5)); // 9
console.log(curry(4)(5)); // 9

//_______________ this approach only works for sum(a)(b)_______________//

const sum = (a) => (b) => a + b;

console.log(sum(2)(4)); // 6
console.log(sum(2, 4)); // [Function (anonymous)]

// const sumDeclarative = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

// console.log(sumDeclarative(3)(5));
