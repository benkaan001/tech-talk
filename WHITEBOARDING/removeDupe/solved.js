/*......a Set is a collection of unique values.
 */
console.log(new Set('hello')); // Set(4) { 'h', 'e', 'l', 'o' }

/*********************************************************/
let array = ['a', 'b', 'a', 'a'];

// console.log(new Set(array)); //  Set(5) { 'a', 'b' }

let newSetArray = [...new Set(array)]; // [ 'a', 'b' ]

// using forEach() and includes()

const removeDupe = (arr) => {
  let unqieArr = [];

  arr.forEach((item) => {
    if (!unqieArr.includes(item)) {
      unqieArr.push(item);
    }
  });

  return unqieArr;
};

console.log(removeDupe(array)); // [ 'a', 'b' ]
