function getMoneySpent(keyboards, drives, b) {
  // Write your code here.

  // default output in case no feasible combo exists
  let output = -1;
  // loop through keyboards and drives
  // if combined price (combo) is greater than the default output and
  // within budget, set output to combo
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let combo = keyboards[i] + drives[j];
      if (combo > output && combo <= b) {
        output = combo;
      }
    }
  }
  return output;
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60)); // 58
