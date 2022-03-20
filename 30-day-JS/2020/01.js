// Print the following pattern using loop and console.log()

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100

*/

/*
Using the countries array create the following array of arrays.
The country name, the first three letters of the country name and
the length of the country name
*/

const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA',
];

const createArrayofArrays = (arr) => {
  let output = [];
  for (let i = 0; i < countries.length; i++) {
    let length = arr[i].length;
    let lower = arr[i].toLowerCase();
    let name = lower.replace(lower[0], lower[0].toUpperCase());
    let accronym = arr[i].slice(0, 3);
    output.push(name, accronym, length);
  }
  return console.log(output);
};
createArrayofArrays(countries);
/*
[
  'Albania',  'ALB', 7,
  'Bolivia',  'BOL', 7,
  'Canada',   'CAN', 6,
  'Denmark',  'DEN', 7,
  'Ethiopia', 'ETH', 8,
  'Finland',  'FIN', 7,
  'Germany',  'GER', 7,
  'Hungary',  'HUN', 7,
  'Ireland',  'IRE', 7,
  'Japan',    'JAP', 5,
  'Kenya',    'KEN', 5
]

*/
