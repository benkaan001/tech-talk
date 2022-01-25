// import our Company constructor
const Company = require('./company');

// create a new instance of Company

const benInc = new Company('Ben Inc', 5000000, false);

// add a 3 new employees to the instance of this company
//by calling the addEmployee method on your new company object

benInc.addEmployee('Bilkem', 'HR Director', 100000, true);
benInc.addEmployee('Veda', 'CFO', 200000, true);
benInc.addEmployee('Mel', 'Accountant', 100000, true);

// console.log your new object
console.log(benInc);

// console.log the number of employees working your new company
console.log(benInc.getEmployees());
