/*
Given two valid dates as string, return the absolute difference between the two in days.

Input: 
'10/15/2020' //date1
'12/1/2020' //date2

Output: 47
*/

const diffDates = (date1, date2) => {
  let newDate1 = new Date(date1);
  let newDate2 = new Date(date2);
  let diffMilSec = newDate2 - newDate1;
  let diffDays = diffMilSec / (1000 * 60 * 60 * 24);

  return console.log(`${diffMilSec} in miliseconds and ${diffDays} in days`);
};

diffDates('1/1/2022', '1/30/2022'); // 2505600000 in miliseconds and 29 in days

//____________ return only absolute value in days______________//

const diffDates2 = (date1, date2) => {
  let newDate1 = new Date(date1);
  let newDate2 = new Date(date2);
  let diffMilSec = Math.abs(newDate2 - newDate1);
  let diffDays = Math.ceil(diffMilSec / (1000 * 60 * 60 * 24));

  return diffDays;
};

console.log(diffDates2('1/1/2022', '1/30/2022')); // 29
