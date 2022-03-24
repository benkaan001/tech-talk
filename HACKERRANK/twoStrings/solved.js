function twoStrings(s1, s2) {
  // Write your code here

  let longest;
  let shortest;
  if (s1.length > s2.length || s1.length === s2.length) {
    longest = s1;
    shortest = s2;
  } else if (s1.length < s2.length) {
    longest = s2;
    shortest = s1;
  }
  for (let i = 0; i < longest.length; i++) {
    if (shortest.includes(longest[i])) {
      return 'YES';
    } else if (longest.includes(shortest[i])) {
      return 'YES';
    }
  }
  return 'NO';
}
console.log(twoStrings('and', 'art')); // YES
console.log(twoStrings('cat', 'monk')); // NO
console.log(twoStrings('hello', 'world')); // YES
console.log(twoStrings('hi', 'world')); // NO

/*******************************************************/

function twoStrings2(s1, s2) {
  for (let letter of s1) {
    if (s2.includes(letter)) {
      return 'YES';
    }
  }
  return 'NO';
}

console.log(twoStrings2('and', 'art')); // YES
console.log(twoStrings2('cat', 'monk')); // NO
console.log(twoStrings2('hello', 'world')); // YES
console.log(twoStrings2('hi', 'world')); // NO
