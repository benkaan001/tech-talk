/*Calculate the total annual income of the person by extracting the following text.
'He earns 5000 euro from salary per month, 10000 euro annual bonus,
15000 euro online courses per month.'

*/

const calcInc = (text) => {
  let string = text.split(' '); // [  'He','earns','5000',...]
  let numbersArr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[(0-9)]/g)) {
      numbersArr.push(string[i]);
    }
  }

  // numbersArr = [ '5000', '10000', '15000' ]

  let values = numbersArr.map((item) => Number(item)); // [ 5000, 10000, 15000 ]

  let adjusted = values.map((value) => (value === 10000 ? value : value * 12)); // [ 60000, 10000, 180000 ]

  let result = adjusted.reduce((acc, curr) => (acc += curr));

  return result; //250000
};

calcInc(
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
);
