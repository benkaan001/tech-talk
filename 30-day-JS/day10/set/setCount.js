const companies = [
  'google',
  'facebook',
  'amazon',
  'netflix',
  'netflix',
  'google',
  'google',
  'apple',
  'facebook',
  'facebook',
  'facebook',
];

const companySet = new Set(companies);
console.log(companySet); // Set(5) { 'google', 'facebook', 'amazon', 'netflix', 'apple' }

const counts = [];
const countObj = {};

for (const company of companySet) {
  const filteredCompany = companies.filter((comp) => comp === company);
  //   console.log(filteredCompany);
  counts.push({ companyName: company, toalCount: filteredCompany.length });
}

console.log(counts);
/*
[
{ companyName: 'google', toalCount: 3 },
  { companyName: 'facebook', toalCount: 4 },
  { companyName: 'amazon', toalCount: 1 },
  { companyName: 'netflix', toalCount: 2 },
  { companyName: 'apple', toalCount: 1 }
]

*/

// REDUCE way

const companies2 = [
  'google',
  'facebook',
  'amazon',
  'netflix',
  'netflix',
  'google',
  'google',
  'apple',
  'facebook',
  'facebook',
  'facebook',
];
let reduced = companies2.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(reduced); // { google: 3, facebook: 4, amazon: 1, netflix: 2, apple: 1 }
