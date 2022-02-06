name = 'John Doe';
var obj = {
  name: 'Colin Ihrig',
  prop: {
    name: 'Aurelio De Rosa',
    getName: function () {
      return this.name;
    },
  },
};

obj.prop.getName(); // Aurelio De Rosa
console.log(obj.prop.getName());

/*
Here, getName function belongs to the obj.prop. That is why this is referencing
the name property of obj.prop.

++ If getName method was declared outside the prop, then it would reference the obj.name,
which would point to 'Colin Ihrig.'
*/

var test = obj.prop.getName;

test(); // John Doe

/*

When getName() is assigned to the test variable, the context refers to the global object (window).
This happens because test is implicitly set as a property of the global object.
For this reason, the function returns the value of a property called name of window,
which is 'John Doe.'

If we want test() to print Aurelio De Rosa then we need to chain our call method to test and
pass in the object, which would be obj.prop
*/

test.call(obj.prop); // Aurelio De Rosa

/*
If we want test() to print Aurelio De Rosa then we need to chain our call method to test and
pass in the object, which would be obj.prop
*/
