/*
Develop a small program which print different time formats.

console.log(showDateTime())                      // 4/4/2020
console.log(showDateTime('dd/mm/yyyy'))          // 4/4/2020
console.log(showDateTime('dd-mm-yyyy'))          // 4-4-2020
console.log(showDateTime('dd-mm-yyyy hh:mn'))    // 4-4-2020 16:21
console.log(showDateTime('dd/mm/yyyy hh:mn'))    // 4/4/2020 16:21
console.log(showDateTime('MMMM DD, YYYY'))       // April 4, 2020
console.log(showDateTime('MMMM DD, YYYY hh:mn')) // April 4, 2020 16:21
console.log(showDateTime('MMM DD, YYYY hh:mn'))  // Apr 4, 2020 16:21
*/

const showDateTime = (entry) => {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let now = new Date();
  let year = now.getFullYear(); // 2022
  let month = months[now.getMonth()]; // March
  let mm = now.getMonth() + 1; // 3
  let day = now.getDate(); // 20
  let dd = day;
  let hour = now.getHours(); // 14
  let hh = hour;
  let minute = now.getMinutes(); // 21
  let mn = minute;

  //   let seconds = now.getSeconds();
  //   console.log(seconds);

  if (!entry) {
    return `${mm}/${dd}/${year}`; // 3/20/2022
  } else {
    switch (entry) {
      case `dd/mm/yyyy`:
        return `${dd}/${mm}/${year}`;
      case `dd-mm-yyyy`:
        return `${dd}-${mm}-${year}`;
      case 'MMMM DD, YYYY':
        return `${month} ${dd}, ${year}`;
      case 'MMMM DD, YYYY hh:mn':
        return `${month} ${dd}, ${year} ${hh}:${mn}`;
      default:
        return `${mm}/${dd}/${year}`;
    }
  }
};

console.log(showDateTime()); //  3/20/2022
console.log(showDateTime('MMMM DD, YYYY hh:mn')); // March 20, 2022 15:53
console.log(showDateTime('void')); // 3/20/2022
console.log(showDateTime('dd-mm-yyyy')); // 20-3-2022
