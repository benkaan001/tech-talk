/*
Write a function which filter users who has scoresGreaterThan85,
Write a function which addUser to the user array only if the user does not exist.
Write a function which addUserSkill which can add skill to a user only if the user exist.
Write a function which editUser if the user exist in the users array.

*/

let users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16,
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22,
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTM'],
    age: 25,
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26,
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20,
  },
];

// just return the userName

const usersAbove85 = (users) => {
  let finalists = users.filter((user) => user.scores > 85);
  return finalists.map((finalist) => finalist.name);
};

console.log(usersAbove85(users));
console.log(users);

/*

destructure name out of newUser
map out the names from the users array
check if the name exists
if yes, return an error message
if no, add the newUser to the users array


*/

const addNewUser = (newUser) => {
  const { name } = newUser;
  let userNames = users.map((user) => user.name);
  return userNames.includes(name)
    ? console.log('This user already exists. Try a different user!')
    : users.push(newUser);
};

console.log(
  addNewUser({
    name: 'Dan',
    scores: 100,
    skills: ['HTML', 'CSS', 'JS'],
    age: 37,
  })
);
// console.log(users);

const addUserSkills = (userName, skill) => {
  return users.filter((user) => {
    if (user.name === userName) {
      user.skills.push(skill);
    } else {
      return console.log('This user does not exist!');
    }
  });
};
console.log(addUserSkills('Dan', 'React'));

// console.log(users);

/*

destructure the updatedUser attirbutes
filter through existing user list
if matches, update the attribute with the new attributes
for skill, use the spread operator

*/

const editUser = (updatedUser) => {
  let { name, scores, skills, age } = updatedUser;

  return users.filter((user) => {
    if (user.name === name) {
      user.scores = scores;
      //   user.skills.push(skills);
      user.skills = [...user.skills, skills];
      user.age = age;
    }
  });
};
console.log(
  editUser({
    name: 'Dan',
    scores: 99.9,
    skills: 'JAVA',
    age: 37,
  })
);

console.log(users); //   {  name: 'Dan', scores: 99.9, skills: [ 'HTML', 'CSS', 'JS', 'React', 'JAVA' ],age: 37}
