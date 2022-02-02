/*

3 major approaches

Object.keys()
Object.values()
Object.entries()

*/

const mountain = {
  name: 'Mt Everest',
  height: 29000,
  location: 'Nepal',
};

let propertyKeys = Object.keys(mountain); // [ 'name', 'height', 'location' ]
let propertyValues = Object.values(mountain); // [ 'Mt Everest', 29000, 'Nepal']
let objectEntries = Object.entries(mountain); // [ ['name', 'Mt Everest'],['height', 29000],['location', 'Nepal'],['difficultyLevel', 'extreme']];

let myObjectMap = Object.keys(mountain).forEach((keyValue) => {
  return console.log(`${keyValue}`); // name,height,location
});
