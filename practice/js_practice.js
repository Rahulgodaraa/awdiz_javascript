/*Hoisting
Question 1: What will be the output of the following code and why?
javascript
console.log(a);
var a = 10;
ans = 10  wrong 
Explanation -> 
Hoisting: In JavaScript, variable declarations (var, let, const) and function declarations are hoisted to the top of their containing scope. However, only the declarations are hoisted, not the initializations.
Question 2: Rewrite the following code to explain how hoisting works with functions and variables:
javascript

console.log(foo());
var foo = function() {
  return "Hello, World!";
};
ans = hello world  wrong
Variable Hoisting: Only the declaration var foo; is hoisted, not the assignment foo = function() { ... }.

Question 3: Predict the output of this code and explain:
javascript

var x = 1;
function test() {
  console.log(x);
  var x = 2;
  console.log(x);
}
test();

ans = 2 2 








// */


// Comparison Operators
// Question 1: Write a function that takes two numbers and returns true if the first number is greater than the second, and false otherwise.

/*
code :-


comparison = (n1,n2) => {
     if(n1 > n2 ) return true; else return false;
}
const output = comparison(8,6);
console.log(output);
*/
// Question 2: Compare two strings "apple" and "Apple" using == and ===. Explain the difference in the results.

/*
Stringcomparison = (str1,str2) => {
  // return str1 == str2; output : false 
  // return str1 === str2;  ouput : flase 
}

const output = Stringcomparison("apple", "Apple");
console.log(output);
*/
// Question 3: Create a function that takes an array of numbers and returns a new array with all elements greater than or equal to 10.
 var arr = [5,6,11,10,2]
newarr = (arr) => {
  var i = 0;
 var newar = [];
  while(i < arr.length) { 
if (arr[i] > 10) {
    newar.push(arr[i]);
} else i++;
return newar;
}
}

const output = newarr(arr);
console.log(output);








/*

Conditional Statement (if-else)
Question 1: Write an if-else statement that checks if a number is positive, negative, or zero and logs the result.
Question 2: Create a function that accepts a score and returns a grade (A, B, C, D, F) based on the score using if-else statements.
Question 3: Write a function that checks if a given year is a leap year or not using if-else statements.
Conditional Statement (switch)
Question 1: Write a switch statement that logs the name of the day of the week based on a number input (1 for Monday, 2 for Tuesday, etc.).
Question 2: Create a function that takes a grade (A, B, C, D, F) and returns a message (Excellent, Good, Average, Poor, Fail) using a switch statement.
Question 3: Implement a switch statement that handles different types of user roles (admin, editor, viewer) and logs a different message for each role.
Logical Operators (&&, ||)
Question 1: Write a function that checks if a number is within a specified range (inclusive) using &&.
Question 2: Create a function that returns true if a string is non-empty and its length is greater than 5, otherwise returns false using ||.
Question 3: Write a function that checks if a person is eligible to vote based on age and citizenship using both && and ||.
Traditional Function
Question 1: Define a function named greet that takes a name as an argument and logs a greeting message.
Question 2: Create a function sum that takes two numbers as arguments and returns their sum.
Question 3: Write a function named factorial that calculates the factorial of a number using a traditional function.
Arrow Function
Question 1: Convert the following traditional function to an arrow function:
javascript
Copy code
function multiply(a, b) {
  return a * b;
}
Question 2: Write an arrow function that takes an array and returns a new array with each element squared.
Question 3: Create an arrow function that filters out even numbers from an array.
Template Literals
Question 1: Use template literals to create a string that includes variables firstName and lastName.
Question 2: Write a function that takes an array of items and returns a string listing them out using template literals.
Question 3: Create a multi-line string using template literals that displays a formatted address with variables for street, city, and country.
Array
Question 1: Write a function that takes an array and returns the first and last elements of the array.
Question 2: Create a function that reverses an array without using the built-in reverse method.
Question 3: Write a function that sorts an array of numbers in ascending order.

*/
