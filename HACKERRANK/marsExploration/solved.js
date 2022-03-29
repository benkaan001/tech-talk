function marsExploration(s) {
  // Write your code here
  let sosCount = s.length / 3;
  let correctS = 'SOS'.repeat(sosCount);
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== correctS[i]) {
      count++;
    }
  }
  return count;
}

console.log(marsExploration('SOSSOSSOS')); // 0
console.log(marsExploration('SOSSOT')); // 1
console.log(marsExploration('SOSSPSSQSSOR')); // 3
