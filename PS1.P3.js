/*
Problem 3 (PS1.P3.js)
Write a function that accepts two input parameters: a string, and a decorator function. The
function should execute the passed decorator function on the passed string and return the
result.
Next, write two expressions that call this function. For the first, pass the string
‘supercalifragilisticexpialidocious’ and a lambda (unnamed) function that returns an array
containing fragments of the input string broken on the character ‘c’. For the input string
‘supercalifragilisticexpialidocious’, you should get
[‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]
This is actually a little tougher than it sounds…a hint would be to take a look at how bit/
character stuffing is done in networking.
For the second expression, pass the string ‘supercalifragilisticexpialidocious’ and a lambda
function that replaces all of the ‘a’ characters with ‘A’ characters. Return an object that
contains the original string, the modified string, the total number of As in the modified string,
and the overall length of the modified string:
{
	 	 originalString: xxx,
	 	 modifiedString: xxx,
	 	 numberReplaced: xxx,
	 	 length:		 	 xxx,
}
Print the data from the returned object on the console (console.table would be good for this).
 */

const decorate = (string, decorator) => decorator(string); //first step; create decorate function

// we can use a regex zero-width assertions to not capture the c, as .split('c') removes delimiter
// /g ensures we match all parts of the string, not just the first occurance
const expression1 = decorate("supercalifragilisticexpialidocious",
    (string) => string.split(/(?=c)/g));
const expression2 = decorate("supercalifragilisticexpialidocious",
    (string) => {
    let modifiedString = string.replaceAll('a','A');
        return {
            originalString: string,
            modifiedString: modifiedString,
            numberReplaced: (string.match(/a/g) || []).length,
            length: modifiedString.length
        }
    });
console.log(expression1);
console.table(expression2);