// /*Hoisting
// Question 1: What will be the output of the following code and why?
// javascript
// console.log(a);
// var a = 10;
// ans = 10  wrong
// Explanation ->
// Hoisting: In JavaScript, variable declarations (var, let, const) and function declarations are hoisted to the top of their containing scope. However, only the declarations are hoisted, not the initializations.
// Question 2: Rewrite the following code to explain how hoisting works with functions and variables:
// javascript

// console.log(foo());
// var foo = function() {
//   return "Hello, World!";
// };
// ans = hello world  wrong
// Variable Hoisting: Only the declaration var foo; is hoisted, not the assignment foo = function() { ... }.

// Question 3: Predict the output of this code and explain:
// javascript

// var x = 1;
// function test() {
//   console.log(x);
//   var x = 2;
//   console.log(x);
// }
// test();

// ans = 2 2








// // */

// // Comparison Operators
// // Question 1: Write a function that takes two numbers and returns true if the first number is greater than the second, and false otherwise.

// /*
// code :-


// comparison = (n1,n2) => {
//      if(n1 > n2 ) return true; else return false;
// }
// const output = comparison(8,6);
// console.log(output);
// */
// // Question 2: Compare two strings "apple" and "Apple" using == and ===. Explain the difference in the results.

// /*
// Stringcomparison = (str1,str2) => {
//   // return str1 == str2; output : false
//   // return str1 === str2;  ouput : flase
// }

// const output = Stringcomparison("apple", "Apple");
// console.log(output);
// */
// // Question 3: Create a function that takes an array of numbers and returns a new array with all elements greater than or equal to 10.
// //  var arr = [5,6,11,10,2]
// // newarr = (arr) => {
// //   var newar = [];
// //   for(let i = 0; i<arr.length ; i++) {
// //     if(arr[i] >= 10 )
// //         newar.push(arr[i]);
// //   }
// // return newar;
// // }
// // const output = newarr(arr);
// // // console.log(output);
// // Conditional Statement (if-else)
// // Question 1: Write an if-else statement that checks if a number is positive, negative, or zero and logs the result.

// // let num1 = 10;

// // numchecker = (num1) => {
// // if (num1 < 0) return ('Number ' + num1 + ' is less then  0 and  negative');
// // else if (num1 == 0) return ('Number ' + num1 + ' is  zero');
// // else return ('Number ' + num1 + ' is greater then  0 and positive');
// // }

// // const ouput = numchecker(num1);
// // console.log(ouput);

// // Question 2: Create a function that accepts a score and returns a grade (A, B, C, D, F) based on the score using if-else statements.

// // let Score = 100;
// // gradesystem = (Score) => {
// //   if (Score >= 90) return 'A';
// //   else if (Score >= 70 && Score <= 80) return 'B';
// //   else if (Score >= 60 && Score <= 80) return 'C';
// //   else if (Score >= 35 && Score <= 60) return 'D';
// //   else return 'F';

// // }

// // const output = gradesystem(Score);
// // console.log(output);

// // Question 3: Write a function that checks if a given year is a leap year or not using if-else statements.
// //Can do it , will do it later

// // Conditional Statement (switch)
// // Question 1: Write a switch statement that logs the name of the day of the week based on a number input (1 for Monday, 2 for Tuesday, etc.).

// // const weeknum = 10;

// // switch (weeknum) {
// //   case 1:
// //     console.log("Monday");
// //     break;
// //   case 2:
// //     console.log("Tuesday");
// //     break;
// //   case 3:
// //     console.log("Wednesday");
// //     break;
// //   case 4:
// //     console.log("Thursday");
// //     break;
// //   case 5:
// //     console.log("Friday");
// //     break;
// //   case 6:
// //     console.log("Saturday");
// //     break;
// //   case 7:
// //     console.log("Sunday");
// //     break;
// //     default : console.log('Invalid weeknum')
// // }

// // Question 2: Create a function that takes a grade (A, B, C, D, F) and returns a message (Excellent, Good, Average, Poor, Fail) using a switch statement.

// // const grade = 'E';
// // gradesystem = (grade) => {
// //   switch (grade) {
// //     case 'A' : return 'Excelent' ; break;
// //     case 'B' : return 'Good' ; break;
// //     case 'C' : return 'Average' ; break;
// //     case 'D' : return 'Poor' ; break;
// //     case 'E' : return 'Fail' ; break;

// //   }
// // }

// // const output = gradesystem(grade);
// // console.log(output);

// /*

// Question 3: Implement a switch statement that handles different types of user roles (admin, editor, viewer) and logs a different message for each role.
// Logical Operators (&&, ||)
// Question 1: Write a function that checks if a number is within a specified range (inclusive) using &&.
// Question 2: Create a function that returns true if a string is non-empty and its length is greater than 5, otherwise returns false using ||.
// Question 3: Write a function that checks if a person is eligible to vote based on age and citizenship using both && and ||.


// Traditional Function
// Question 1: Define a function named greet that takes a name as an argument and logs a greeting message.
// Question 2: Create a function sum that takes two numbers as arguments and returns their sum.
// Question 3: Write a function named factorial that calculates the factorial of a number using a traditional function.
// Arrow Function
// Question 1: Convert the following traditional function to an arrow function:
// javascript
// Copy code
// function multiply(a, b) {
//   return a * b;
// }
// Question 2: Write an arrow function that takes an array and returns a new array with each element squared.
// Question 3: Create an arrow function that filters out even numbers from an array.
// Template Literals
// Question 1: Use template literals to create a string that includes variables firstName and lastName.
// Question 2: Write a function that takes an array of items and returns a string listing them out using template literals.
// Question 3: Create a multi-line string using template literals that displays a formatted address with variables for street, city, and country.
// Array
// Question 1: Write a function that takes an array and returns the first and last elements of the array.
// Question 2: Create a function that reverses an array without using the built-in reverse method.
// Question 3: Write a function that sorts an array of numbers in ascending order.

// */

// //------------------------------Objects-------------------------------
// //--------------------------------------------------------------------

// // Given an object book with properties title, author, and year,
// //  write a function updateBook that updates the year property and adds a 
// // new property genre.
// /*

// const obj = {
//   name : "Rahul",
//   title : "Rahul",
//   author : "Rahul",
//   year : 2001
// }

// updateObj = (obj , newyear) =>{
//      obj.year = newyear;
//      obj.copies = 2;

//      console.log(obj);

// }
// updateObj(obj , 2024);

// */

// // Write a function listProperties that takes an object 
// // as an argument and logs all its properties and values to the console.


// /* const obj = {
//   name : "Rahul",
//   title : "Rahul",
//   author : "Rahul",
//   year : 2001
// }

// for (let key in obj) {
//   console.log(key, obj[key]);
// } */

//   // Write a function mergeObjects that takes two objects and returns a
//   //  new object that merges their properties. If both object s have a 
//   // property with the same name , the value from the second object
//   //   should overwrite the value from the first object.

//  const obj = {
//   name : "Rahul",
//   title : "Rahul",
//   author : "Rahul",
//   year : 2001
// }


// const obj2 = {
//   name2 : "Rahul",
//   title2 : "Rahul",
//   author3 : "Rahul",
//   year : 2024
// }



// const obj3 =  {...obj , ...obj2};
// console.log(obj3);

/**************************************************************************************************************************************/

/*-------------------------------------------------------------------map

//1. Double Numbers:

const numbers = [1, 2, 3, 4];

doubleNumbers = (numbers) => {
    const double = numbers.map(num => num+num)
    // console.log(double)
    return double;
}
const doubled = doubleNumbers(numbers);
// console.log(doubled);


//2.Add Exclamation:

const words = ["hello", "world"];


addExclamation = (words) => {
     return words.map(word => word + '!');
    //  words.map((word) => {
    //      return words
    //     // var newword = word[word.length-1];
    //     // newword = '!';
    //     // const newswords = word + newword;

    //     // console.log(newswords)
    //     // // const Excl = words[word.length].push('!');
    // })
}


const exclaimed = addExclamation(words);
// console.log(exclaimed);

//Q3 Convert to Length:

const strings = ["apple", "banana", "cherry"];

function convertToLength(strings){
   return strings.map(str => str.length )

} 

const lengths = convertToLength(strings);
console.log(lengths);

*/


/*-------------------------------------------------------------------Filter

//Q1 Filter Odd Numbers:


const numbers = [1, 2, 3, 4, 5];

function filterOddNumbers(numbers) {
    return numbers.filter(num => num % 2 === 1);
}

const oddNumbers = filterOddNumbers(numbers);
console.log(oddNumbers);


//Q2 Filter Strings Longer Than 4 Characters:

const words = ["one", "three", "four", "five"];

function filterLongWords(words)  {
    return words.filter(str => str.length > 4);
}

const longWords = filterLongWords(words);
console.log(longWords)

//Q3 Filter Negative Numbers:

const number = [-1, 2, -3, 4, -5];

function filterPositiveNumbers(number) {
    return number.filter(num => num > 0);
}

const positiveNumbers = filterPositiveNumbers(number);
console.log(positiveNumbers);


*/


/*----------------------------------------------------------------------reducer

//Q1 Product of Numbers:

// const numbers = [1, 2, 3, 4];

// function multiplyNumbers(numbers) {
//     return numbers.reduce((acc , num) => acc * num, numbers[0]);
// }
// const product = multiplyNumbers(numbers);
// console.log(product);

// //Q2 Longest String:

// const strings = ["one", "three", "four"];

// function findLongestString(strings) {
//     return strings.reduce((longstr, currentstr) => {
//     if (currentstr > longstr ) {
//         longstr = currentstr;
//     } strings[1];
//     return longstr;
//     // console.log(longstr);

// }
// )
// }

// const longest = findLongestString(strings);
// console.log(longest);

// //Q3 Count Words:

// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// // var count = 0;
// // const obj = {};
// // var i = 0;
// countWords = (words) => {

//     return words.reduce((acc , cur) => {
//            if (acc[cur] === undefined) {
//             acc[cur] = 1;
//            } else {
//             acc[cur]+=1;
//            }
//        return acc;
//     //    if (acc === cur) {
//     //     obj.words[i] = count++;
//     //     console.log(acc , cur , obj);
//     //    } else cur++ ;
//     } ,  {} )

//     // return acc;

// }

// const wordCount = countWords(words);

// console.log(wordCount);
*/

/*---------------------------------------------------------------------forEach

// //Q1 Print Square

// const number = [1,2,3,4]
 
// // number.forEach(num => console.log(num*num));
 

// //Q2 log Greetings
// const names = ["Alice", "Bob", "Charlie"];

// names.forEach(name => (console.log(`Hello, ${name}!`)))

*/


//---------------------------------------------------------------------forIN loop
//Q1 list key value

const object = {name: "Alice", age: 25, city: "Wonderland"};

listKeysAndValues = (object) => {
      for (const key in object) {
        console.log(key , ':', object[key]);
      }
}

// listKeysAndValues(object);

//Q2 Calculate Object Property Sum
const scores = {math: 90, science: 85, history: 88};

sumObjectProperties = (scores) => {
    var finalscore = 0;
     for(const key in scores) {
        console.log(finalscore+= scores[key])
     }
}

// const total = sumObjectProperties(scores);

//Q3 Convert Object to array

const Objects = {a: 1, b: 2, c: 3};

convertObjectToArray = (objects) => {
    const arr = []
        for (const key in objects) {
            arr.push([key ,  objects[key]]);
        }
        return arr;
}

const array = convertObjectToArray(Objects);
// console.log(array);
