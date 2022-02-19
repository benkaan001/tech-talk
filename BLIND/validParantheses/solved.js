/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example:

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

s consists of parentheses only '()[]{}'.
*/

const isValid = (s) => {
  let hashMap = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  let array = [];
  for (let char of s) {
    if (hashMap[char]) {
      array.push(hashMap[char]);
    } else {
      if (array.pop() !== char) return false;
    }
  }
  return !array.length;
};

console.log(isValid('{}[]()')); // true

console.log(isValid('({[]})')); // true

// alternative

var isValid2 = function (s) {
  const hashMap = { '(': ')', '{': '}', '[': ']' };
  const stack = [];
  for (let ch of s) {
    if (hashMap[ch]) {
      // ch is an opening bracket
      stack.push(hashMap[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      // ch is a closing bracket and top of stack matches
      stack.pop();
    } else {
      // ch is a closing bracket and top of the stack doesn't match
      return false;
    }
  }
  return stack.length === 0;
};
