const languages = ['English', 'Swedish', 'German'];

const languageSet = new Set(languages);
console.log(languageSet); // Set(3) { 'English', 'Swedish', 'German' }

// Set is an iterable object

for (const language of languageSet) {
  console.log(language);
  // English
  // Swedish
  // German
}

// ADD a new language
languageSet.add('Turkish');
console.log(languageSet); // Set(4) { 'English', 'Swedish', 'German', 'Turkish' }

// DELETE a language
languageSet.delete('German');
console.log(languageSet); // Set(3) { 'English', 'Swedish', 'Turkish' }

// CHECKING if an element exists
console.log(languageSet.has('Turkish')); // true

// REMOVE ALL elements
languageSet.clear();
console.log(languageSet); // Set(0){}
