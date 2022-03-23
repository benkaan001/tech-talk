function plusMinus(arr) {
  // Write your code here
  let length = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.filter((value) => {
    if (value > 0) {
      positive++;
    } else if (value < 0) {
      negative++;
    } else if (value == 0) {
      zero++;
    }
  });
  console.log((positive / length).toFixed(6));
  console.log((negative / length).toFixed(6));
  console.log((zero / length).toFixed(6));
}
plusMinus([1, 1, 0, -1, -1]);
