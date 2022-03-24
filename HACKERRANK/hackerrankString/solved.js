function hackerrankInString(s) {
  // Write your code here

  let stringArr = s.split('');
  let position = 0;

  stringArr.forEach((letter) => {
    if (letter === 'hackerrank'[position]) {
      position++;
    }
  });
  if (position === 'hackerrank'.length) {
    return 'YES';
  } else {
    return 'NO';
  }

  // return position === 'hackerrank'.length ? 'YES' : 'NO';
}
console.log(hackerrankInString('hereiamstackerrank')); // YES
