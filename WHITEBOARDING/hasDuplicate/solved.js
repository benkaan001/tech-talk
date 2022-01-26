// if there are any duplicate elements in the array return false, else return true

const hasDuplicateBetter = (arr) => {
  // sort the array
  arr.sort((a, b) => a - b);

  // iterate through the sorted array to check if the adjacent elements are equal
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(hasDuplicateBetter([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
console.log(hasDuplicateBetter([1, 2, 3, 4])); // false

// _____________________________ NESTED LOOP ________________________ //
const hasDuplicate = (arr) => {
  // compare each element to every other element in the array
  // second iteration will start with i+1

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
      return false;
    }
  }
};

console.log(hasDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
console.log(hasDuplicate([1, 2, 3, 4])); // false
