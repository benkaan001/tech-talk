/*

Both increment(++) and decrement(--) operators have two versions:

PREFIX => (++counter)
POSTFIX => (counter++)
 
*/

//______________ PREFIX_____________ //

let age = 25;
++age; // under the hood ===> age = age + 1

console.log(age); // 26

let weight = 200;
--weight; // under the hood ====> weight = weight - 1

console.log(weight); // 199

let pto = 20;
pto = ++pto + 5;
console.log(pto); // 21

/*
In this pto example, JS engine first changes the value of pto BEFORE evaluating the statement


*** First, increase the pto on the right-hand side so ++pto is 21
*** Second, add five to the ++pto that returns 26
*** Lastly, assign the result to the pto on the left-hand side

*/

//_____________ POSTFIX_________________ //

let sickTime = 80;
let newSickTime = sickTime-- + 10;

console.log(newSickTime); // 90
console.log(sickTime); // 79

/*
The postfix operator changes the value AFTER the statement is evaluated. 

*** First, add 10 to the SickTime(80) and assign the result to the newSickTime(90)
*** Second, deduct one from o the sickTime variable after the second statement completes, the
sickTime becomes 79

*/
