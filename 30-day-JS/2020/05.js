// Destructure the following array into frontEnd and backEnd

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB'],
];

const frontEnd = fullStack[0];
const backEnd = fullStack[1];

console.log(frontEnd); // ['HTML', 'CSS', 'JS', 'React']
console.log(backEnd); // ['Node', 'Express', 'MongoDB']

// Destructure the following array name to name, skills array to
//each skills, scores array to each scores in one line.

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

let flat = student.flat(2);
let [name, html, css, js, react, htmlScore, cssScore, jsScore, reactScore] =
  flat;

// David HTM CSS JS React 98 85 90 95

// Write a function called convertArrayToObject which can convert the array to a structured object.

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
];

console.log(convertArrayToObject(students));
//  [
//    ({
//      name: 'David',
//      skills: ['HTM', 'CSS', 'JS', 'React'],
//      scores: [98, 85, 90, 95],
//    },
//    {
//      name: 'John',
//      skills: ['HTM', 'CSS', 'JS', 'React'],
//      scores: [85, 80, 85, 80],
//    })
//  ];
function convertArrayToObject(arr) {
  return arr.map(([name, skills, scores]) => {
    return { name, skills, scores };
  });
}
