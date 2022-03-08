/*

JSON.stringify(<object>) take the object and converts it into a string.
The resulting JSON is called JSON-encoded object.

Notice single-quoted 'John' becomes double-quoted "John"
isAdmin becomes "isAdmin" and age becomes "age"

JSON supports => Objects, Arrays, Primitives (string, number, boolean, null)

*/

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null,
};

let myjson = JSON.stringify(student);

console.log(myjson); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}

/*

To decode a JSON-encoded object, we use JSON.parse method.


*/
let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

console.log(user); // { name: 'John', age: 35, isAdmin: false, friends: [ 0, 1, 2, 3 ] }
