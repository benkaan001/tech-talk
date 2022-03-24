/*

Given two strings, determine if they share a common substring.
A substring may be as small as one character.

EXAMPLE

s1 = 'and'
s2 ='art'
These share a common substring 'a'j

s1 ='be'
s2 ='cat'
These do not share a substring.
*/

function twoStrings(s1, s2) {
  // Write your code here

  let string1 = s1.split('');
  let string2 = s2.split('');
  let longest;
  let shortest;
  if (s1.length > s2.length || s1.length === s2.length) {
    longest = string1;
    shortest = string2;
  } else if (s1.length < s2.length) {
    longest = string2;
    shortest = string1;
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
