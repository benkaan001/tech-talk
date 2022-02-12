/*
Every running function, code block {...}, and the script as a whole have a hidden
internal object known as Lexical Envioronemnt.

LE object has two parts  Environment Record  and Reference to the Outer LE

A 'variable' is just a property of the Environment Record

When the code needs to access to a variable, it first searches that varible in the
INNER LE, then follows the scope chain searing outer ones until it reaches the global one.
*/
