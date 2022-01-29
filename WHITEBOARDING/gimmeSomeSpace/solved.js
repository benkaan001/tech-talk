/* Write a function that returns the input string with spaces between each letter. 
For the purpose of this  assignment, you can assume that only strings
 will be passed as an input parameter */

const gimmeSomeSpace = (str) => [...str].join(' ');

// Test Cases
console.log(gimmeSomeSpace('Hello, world')); // H e l l o ,   w o r l d
console.log(gimmeSomeSpace('Time to bake a cake')); // T i m e   t o   b a k e   a   c a k e

//____________________another way__________________________ //

// return (...splited) will throw a TypeError

const gimmeSomeSpace2 = (str) => {
  let splited = str.split('');
  return console.log(...splited);
};
gimmeSomeSpace2(
  'Remember to return the console.log; otherwise you will get a syntax error'
);

// R e m e m b e r   t o   r e t u r n   t h e   c o n s o l e . l o g ;
// o t h e r w i s e   y o u   w i l l   g e t   a   s y n t a x   e r r o r
