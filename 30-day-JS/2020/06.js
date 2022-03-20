/* An array is written as follows. Find the following:
Find x
Find y
Find y(x)
*/

const [x, y] = [2, (a) => a ** 2 - 4 * a + 3];

let resultX = x; // 2
let resultY = y; // [Function (anonymous)]
let result = y(x); // -1

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 },
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js'],
  },
};

// Copy the student object to newStudent without mutating the original object.
let newStudent = { ...student };
newStudent.name = 'New Student';
newStudent.age = 30;

// Add Bootstrap with level 8 to the front end skill sets

newStudent.skills = {
  ...student.skills,
  frontEnd: [...student.skills.frontEnd, { skill: 'BootStrap', level: 8 }],
};

console.log(newStudent);
// Add Express with level 9 to the back end skill sets
newStudent.skills = {
  ...newStudent.skills,
  backEnd: [...newStudent.skills.backEnd, { skill: 'Express', level: 9 }],
};

// Add SQL with level 8 to the data base skill sets

newStudent.skills = {
  ...newStudent.skills,
  dataBase: [...newStudent.skills.dataBase, { skill: 'SQL', level: 8 }],
};

// Add SQL without level to the data science skill sets
newStudent.skills = {
  ...newStudent.skills,
  dataScience: [...newStudent.skills.dataScience, 'SQL'],
};

// Add devOps a new skill set and add AWS with level 7, Jenkin with level 8, Git with level 8

newStudent.skills = {
  ...newStudent.skills,
  devOps: [
    { skill: 'AWS', level: 7 },
    { skill: 'Jenkin', level: 8 },
    { skill: 'Git', level: 8 },
  ],
};

console.log(student, newStudent);
/*

{
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [ [Object], [Object], [Object], [Object] ],
    backEnd: [ [Object], [Object] ],
    dataBase: [ [Object] ],
    dataScience: [ 'Python', 'R', 'D3.js' ]
  }
}
{
  name: 'New Student',
  age: 30,
  skills: {
    frontEnd: [ [Object], [Object], [Object], [Object], [Object] ],
    backEnd: [ [Object], [Object], [Object] ],
    dataBase: [ [Object], [Object] ],
    dataScience: [ 'Python', 'R', 'D3.js', 'SQL' ],
    devOps: [ [Object], [Object], [Object] ]
  }
}

*/
