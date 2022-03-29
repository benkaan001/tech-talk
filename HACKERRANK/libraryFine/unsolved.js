/*
Given the expected and actual return dates for a library book,
create a program that calculates the fine (if any).
The fee structure is as follows:

If the book is returned after the expected return day but
still within the same calendar month and year as the expected return date,
fine = 15 * number of days late.
fine = 500 * number of months late.
fine =10000 - just a fixed fine regardless of the number of years it may be late.

EXAMPLE
d1, m1, y1 = 14,7,2018
d2, m2, y2 = 5,7,2018
The first values are the return date and the second values are the due date.
The years are the same and the months are the same. The book is 14-5 = 9 days late.
Therefore return 9*15 = 135

*/

function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
}

console.log(libraryFine(14, 7, 2018, 5, 7, 2018)); // 135
