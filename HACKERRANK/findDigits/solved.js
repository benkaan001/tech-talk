function findDigits(n) {
  let str = n.toString().split('');
  let filtered = str.filter((num) => num !== '0');
  return filtered.filter((num) => n % Number(num) == 0).length;
}

console.log(findDigits(12)); // 2
console.log(findDigits(1012)); // 3
