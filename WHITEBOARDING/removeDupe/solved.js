/*......a Set is a collection of unique values. */
console.log(new Set('hello')); // Set(4) { 'h', 'e', 'l', 'o' }

//_______________________ using new Set_________________________________ //

let array = ['a', 'b', 'a', 'a'];

// console.log(new Set(array)); //  Set(5) { 'a', 'b' }

let newSetArray = [...new Set(array)]; // [ 'a', 'b' ]

//___________________ using forEach() and includes()______________________________//

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

//_____________________ something new________________ //

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4];

const removeDuplicates = (array) => {
  let outputArr = [];
  let sorted = array.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1]) {
      outputArr.push(sorted[i]);
    }
  }
  return outputArr;
};

console.log(removeDuplicates(arr));
