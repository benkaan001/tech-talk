let array = [-100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50];

// find max value in an array
Math.min(...array); // -100

// find min value in an array
Math.max(...array); // 50

// power
array.map((x) => Math.pow(x, 2));
// [ 10000, 1, 4, 9, 16, 25,  36, 49, 64, 81, 100, 2500]

// Math.pow(baseNumber, exponent)
Math.pow(5, 2); //25

Math.pow(5, 4); // 625
