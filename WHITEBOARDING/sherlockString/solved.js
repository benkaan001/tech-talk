// INCOMPLETE!!! still fails 6 out of 20 tests!!!

const sherlockString = (str) => {
  let strArr = str.split('');

  let strObj = strArr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }

    return acc;
  }, {});

  let sorted = Object.values(strObj).sort((a, b) => a - b);
  let unique = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1]) {
      if (sorted[i] === sorted[i + 1]) {
        return 'NO';
      }
    } else if (!unique.includes(sorted[i])) {
      unique.push(sorted[i]);
      if (unique.length >= 2) {
        return 'NO';
      }
    }
  }
  return 'YES';
};

console.log(sherlockString('abcdefghhgfedecba')); // Yes
console.log(sherlockString('aabbcd')); // No
