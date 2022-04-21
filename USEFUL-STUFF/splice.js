/*

splice(start, deleteCount, item1,item2,item3,...)

start = index at which the item will be removed

deleteCount (optional) = how many items should be removed

item1,item2,... (optional) = new items to be added to the array beginning from start

*/

// Splice returns the deleted elements

const array = ['a', 'b', 'c', 'd', 'z', 'y', 'x'];
const deleted = array.splice(4, 3);
console.log(array); // [ 'a', 'b', 'c', 'd' ]
console.log(deleted); //  [ 'z', 'y', 'x' ]

// fix the pancake recipe
// starting at indexNumber 2 remove the 3 items and add the missing ingredients

const pancake = [
  'flour',
  'sweetener',
  'potato',
  'onion',
  'garlic',
  'baking powder',
  'extact',
];
const removed = pancake.splice(2, 3, 'yogurt', 'egg whites');
console.log(pancake); // ['flour','sweetener','yogurt','egg whites','baking powder','extract']
console.log(removed); // [ 'potato', 'onion', 'garlic' ]

// ********************************************************* //

pancake.splice(2); //  removes everything following potato leaving us with only "flour" and "sweetener"
pancake.splice(-2); // removes only the last two items "baking powder" and "extract"
pancake.splice(-2, 1); // removes only 1 element from index number -2, in this case only removes "baking powder"
