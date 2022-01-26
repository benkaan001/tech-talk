const staff = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', salary: 400 },
  { name: 'anna', age: 35, position: 'intern', salary: 10 },
];

//___________ notice how readily available name,age,position,salary are!____________ //
const staffingCost = staff.reduce((acc, curr) => {
  const { name, age, position, salary } = curr;
  return (acc += salary);
}, 0);

console.log(staffingCost); // 810

//________________________________ calculate the salary for GenZ group_______________ //

const genZs = staff.reduce((acc, curr) => {
  const { age, salary } = curr;

  if (age < 30) {
    acc = acc + salary;
  }

  return acc;
}, 0);

console.log(genZs); // 400

//_____________ Return the positions occupied by these GenZ group of employees________//

const mapFilterPositions = staff
  .filter((employee) => (employee.age < 30 ? employee : null))
  .map((x) => x.position);

console.log(mapFilterPositions); // [ 'developer', 'designer' ]
