/*
Problem 1 (PS1.P1.js)
Write a function that takes a string as its input and returns a new string that contains all of the
letters in the original string, but in reverse alphabetical order. Ignore punctuation and numbers.
Duplicates are fine, so 'exioi' -> 'xoiie'. Test your function using the string
‘supercalifragilisticexpialidocious’.
*/

//let's split the string into an array, sort the array by numerical order (ASCII code), reverse that, then join into string
const reverseAlphabeticalOrder = (string) => string.split('').sort().reverse().join('');

console.log(reverseAlphabeticalOrder('xoiie'));
console.log(reverseAlphabeticalOrder('supercalifragilisticexpialidocious'));