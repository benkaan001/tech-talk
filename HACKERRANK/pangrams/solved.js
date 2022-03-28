function pangrams(s) {
  // Write your code here
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let string = s.toLowerCase().split('');
  let unique = [...new Set(string)];
  console.log(unique.length);

  return unique.length > alphabet.length ? 'pangram' : 'not pangram';
}

console.log(pangrams('The quick borwn fox jumps over the lazy dog')); // pangram
console.log(pangrams('hello there')); // not pangram
console.log(pangrams('We promptly judged antique ivory buckles for the prize')); // not pangram
