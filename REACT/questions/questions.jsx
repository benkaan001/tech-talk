/*
_______________

What is JSX?
____________

It stands for JavaScript and XML. It provides XML like syntax to write JavaScript
and render it to the DOM.
Essentially, it is a syntactic sugar over React.createElement. At each point, React
is creating elements under the hood.
JSX is complied down to JS under the hood.

________________________________________________

Why is 'class' a 'className' in React?
_______________________________________________

Class is a reserved keyword in JS. Under the hood the Babel is doing transplatation
ultimately turning the code into JS.

_______________________________________________

Describe data flow in React.
____________________________________

The data flow is unidirectional. All the components in react have a parent-child
relationship. We pass the data from parent to its child(eren).
We manage the data within a component through STATE.
The most basic way we are passing data down is through PROPS.
To avoid prop drilling, we use Context API and/or Redux.


________________________________________________________________

How would you delay an API call until a component has mounted?
________________________________________________________________

We would place the API call inside a useEffect function body.
We would use the useEffect hook and pass in an empty dependency array.
Worth to mention that if we pass in an item into the dependency array,
the useEffect will take place only when that item changes.

_________________________________________________________________________________

Should you use ternaries or && operator to conditionally render React components?
_________________________________________________________________________________

Ternaries because if we use the && operator, you end up encountering an issue when you are
checking for the length of an array. If the length of an array is 0, in JS any additional of two
values 0 and whatever else is falsey. Therefore, the right side does not get evaluated and 0 is
rendered.

*/
