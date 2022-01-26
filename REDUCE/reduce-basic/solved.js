const users = [
  { firstName: 'Ben', lastName: 'Kaan', age: 36 },
  { firstName: 'Veda', lastName: 'Inan', age: 60 },
  { firstName: 'Bilkem', lastName: 'Ozcan', age: 39 },
  { firstName: 'Mel', lastName: 'Rivera', age: 36 },
];

// find the demographics of users by age // { 36:2, 60:1, 39:1 }

const output2 = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(output2);

/// return the firstName of all he users
//whose age is less than 40    ['Ben', 'Bilkem', 'Mel']

const output = users.reduce((acc, curr) => {
  if (curr.age < 40) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output);

//_____________solve it without reduce____________ //

//____REMEMBER filter returns back the entire object even if you specify ? person.firstName________//
// { firstName: 'Ben', lastName: 'Kaan', age: 36 },
// { firstName: 'Bilkem', lastName: 'Ozcan', age: 39 },
// { firstName: 'Mel', lastName: 'Rivera', age: 36 }

const withoutReduce = users
  .filter((person) => (person.age < 40 ? person : null))
  .map((x) => x.firstName);

console.log(withoutReduce);
