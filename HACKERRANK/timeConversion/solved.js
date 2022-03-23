function timeConversion(s) {
  // s = '07:05:45PM';
  let hh = s.slice(0, 2);
  let mm = s.slice(3, 5);
  let ss = s.slice(6, 8);
  let ampm = s.slice(8, 10);
  if (ampm === 'AM' && hh === '00') {
    return `00:${mm}:${ss}`;
  } else if (ampm === 'PM') {
    return `${Number(hh) + 12}:${mm}:${ss}`;
  }
}
console.log(timeConversion('07:05:45PM')); // 19:05:45
