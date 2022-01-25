let array = [-100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50];

// find max value in an array

const arrayMin = Math.min(...array);
console.log(arrayMin); // -100

// find min value in an array

const arrayMax = Math.max(...array);
console.log(arrayMax); // 50

// power

const mathPowered = array.map((x) => Math.pow(x, 2));
console.log(mathPowered); // [ 10000, 1, 4, 9, 16, 25,  36, 49, 64, 81, 100, 2500]
