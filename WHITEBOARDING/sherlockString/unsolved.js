/*

Sherlock considers a string to be valid if all characters of the string appear the same number of times.
It is also valid if he can remove just  character at  index in the string,
 and the remaining characters will occur the same number of times. Given a string ,
 determine if it is valid. If so, return YES, otherwise return NO.

Example s = abc;

This is a valid string because frequencies are {a:1, b:1,c:1}.

s= abcc

This is a valid string because we can remove one  and have  of each character in the remaining string.

s = abccc
This string is not valid as we can only remove  occurrence of . That leaves character frequencies of
{a: 1, b:1, c:2}.

*/
