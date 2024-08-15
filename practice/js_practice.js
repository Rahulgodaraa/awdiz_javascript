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


/*---------------------------------------------------------------------forIN loop
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
*/

/*--------------------------------------------------------------------Strings


//--------------basic

//Q.1 Reverse Words in a String

// Problem: Write a function that takes a string as input and returns the string with each word reversed but the order of words preserved.

function reverseWords(str) {
    // Your code here
    let singword = [];
    let n = str.length-1;
    for (let word of str) {
        // let last = word[n];
        singword = word ; 
        // n--;
        // word;
    }
    // let newstr = singword.toLowerCase();
    console.log(singword);    

}
console.log(reverseWords("Hello World")); // Output: "olleH dlroW"
*/

//--------------------------------------------------js4 test 
/* 
// //----------------------------------Theaory-------------------------------------

// //Q.1 Data types in Javascript

// /*Q.1 Answer

// 1. There are seven primitve data types in Javascript . 
// 2. They are Number , String , BigInt , Boolean , Undefined , Null , 
// 3. There are non-primitive data type in Javascript known has Object , It includes array and functions
// 4. We can use Typeof keyword to know the Type of variables. for Example typeof 10 , typeof "10" , typeof true.

// */

// //Q.2 let const var

// /*Q.1 Answer 

// -LET
// 1. Let , const and var are the keywords used in javscript to declare and initialize variables in js
// 2. Variables declared using let can be re-declared at its respective scope .
// 3. let has functional scope and can be re-assigned in its scope . Resulting in unwanted variable Shadowing
// 4. Let is hoisted  at the top of its scope where only the declaration is hoisted not the initalizations.

// -var 
// 1. Var is block scope , where variables declared using its scope can be re-initialized in its scope.
// 2. var variable is hoisted at the top of its scope. var variables can not be re-declared.
// 3. Var is used for the variables that required to change the value with further uses.

// -const 
// 1. const variable is used for the varable those required to keep the initial value . 
// 2. const is block scope it means it can be accessed inits scope. 
// 3. const varable is ideal choice for maintaing the variable declaration . 
// 4. There is exception in Const used in Object and array .
// 5. Content in Object and array can be changed.
// */

// //Q.3 == and ===

// /*Q3 Answer

// 1. == and === are logical operator used to compare the the data. 
// 2. == is used when the two data or variable need to be compared. 
// 3. === is used when the data and the data type need to be comapred.
// 4. there is also a single equal = , which is used to assign value to varble. 

// */

// //Q.4 prototypal inheritance in js

// /*Q4 Answer
// 1. Prototypal inheritance in js used to use the Method available in object .
// 2. It let the objects present in same scope use there Methods. 
// 3. It is not like the ideal inheritance where childeren uses properties of their parents. 
// 4. Prototypal inheritance can be used in the client side also. 
// 5. Js provides Number of prototypal methods that can be used to manipulate the value.
// 6. Once value changed in client side browser changes from all its instance. 
// */

// //Q.5 Closures

// /*Q5 Answer 

// 1. Closures are the function which remembers the exsistance scope. 
// 2. once a variable is declared in its outer function it can be accessed in inner function. 
// 3. If the outer function is returned the inner function still access the varible 
// */

// //Q.6 Null and undefined

// /*Q.6 Answer

// 1. Null and undefined are two primitive data type in Javascript 
// 2. Undefined is occered when a variable is declared but not initialised
// 3. It does not throw any error but result in undefined.
// 4. When a function does not return any value it throw undefined vlaue.
// 5. Null is occured when a object or array is decalred but not assigned any value. 
// */

// //Q.7 This keyword

// /*Answer Q7

// 1. This keyword is used to access the variable or properties from current code.
// 2. In object this refer to the current objects properties.
// 3. In function this keyword refer to the global variable of that scope.
// 4. This keyword access values from its Surrounding and returns value.

//  */

// //Q.9 Promises

// /*Q9 Answer

// 1. Promises in javascript are used to comunicate with the database.
// 2. promises has two arguments resolve and reject.
// 3. When the promise is successfully executed then it returns resolve . or when it fails it returns reject.
// 4. promise used .then method to execute the message its successfull .
// 5. if the promise is rejected it executes the catch method if used.
// 6. Promises has 3 stages 
//                                 a. Initial : pending state which is not yet success or rejected
//                                 b. success : in this state the promise is successfull 
//                                 c. Reject : in this state the promise is rejected
// */

// //Q10 Synchronous and asynchronous

// /*
// synchronous : -
//                  1. javscript is a synchronous language
//                  2. it means it executes syncronously or line by line code execution
// asynchronous :-  
//                  1. Asynchronous code is where the line by line code is not excuted
//                  2. it includes the web apis like fetch() , time , file reading , etc
//                  3. It occuers when a code of line takes time to excute when the other lines or function is executed
//                  4. we use asynch and await keyword for this execution 
// */

// //Q11 Hoisting

// /*
// 1. Hoisting the property in javscript where a variable is moved to top of its lexial scope.
// 2. Hoisting lets the global variable to be declared at the top of the scope.
// 3. In var the declaration is hoisted at the top of the scope.
// 4. let is hoisted but can not be reassigned 
// 5. const cannot be hoisted.
// */

// //Q12 Arrow function

// /*Q12 Answer

// 1. Arrow function are introduced in ES2017 Version of javsacript.
// 2. Arrow function uses => symbol to start the function.
// 3. Arrow function cannot be used as argument for other functions.
// 4. Arrow function are not stored in any individual variable 
// 5. Syntax :- namefun = () => {};
// 6. Arrow function can be anonymous or named.
// */

// //Q13 Event Loop

// /*
// 1. Event loop is the execution of a function.
// 2. Event loop excecutes syncronous . 
// 3. when a web api is countered it send it to web api space where is exceute and sent to call back queue.
// */

// //Q14 Error Handling
// /*
// 1. Try and catch is used for error handling js 
// 2. Try is excueted all the lengthy codes .
// 3. If any error is countered it does not show on client side and only showed in dev or terminal .
// 4. From there we can handle the code without any interuption to the client.
// */*/
// //-----------------------------------------------------------Code

const products = [
  { name: "Laptop", Category: "Electronics", price: 1000 },
  { name: "shirt", Category: "Clothing", price: 50 },
  { name: "Phone", Category: "Electronics", price: 500 },
  { name: "Shoe", Category: "Clothing", price: 80 },
];
const arr = [];
// e = arr[i]
filterAndTransform = (products, Category) => {
  products.forEach((e) => {
    if (e.Category === Category) {
      arr.push([e.name, e.price]);
    }
  });
//   console.log(arr);
return arr;
};

// filterAndTransform(products , "Electronics")

// const output = filterAndTransform(products , "Electronics");
// console.log(output);

//

// var n = 5;
// console.log(typeof 54545465465);
// console.log(typeof "5");


//     console.log( 5 === "5" );
    

const orders = [
  { orderid: 1, tableNumber: 2, amount: 30 }, // orders[i]
  { orderid: 2, tableNumber: 1, amount: 20 }, // 1
  { orderid: 3, tableNumber: 2, amount: 50 },
  { orderid: 4, tableNumber: 3, amount: 40 },
  { orderid: 5, tableNumber: 1, amount: 10 },
];

//obj =  { 1: 30  , 2: 80 }
function sumByTable(orders) {
const obj = {};

   for(let i in orders) {
    const {tableNumber , amount } = orders[i]
     if(obj[tableNumber]) {
      obj[tableNumber] += amount;
     } else {
        obj[tableNumber] = amount
     }
    }
    // return obj;
    console.log(obj);
    
}

const output = sumByTable(orders);
console.log(output);



// const students = [
//     {name: "Alice" , subject: ["Math" , "Science"]},
//     {name: "Bob" , subject: ["English" , "Science"]},
//     {name: "Charlie" , subject: ["Math" , "History"]},
//     {name: "David" , subject: ["Science" , "History"]}

// ]


// count = (students) => {
//     const objs = {}
//           students.forEach((e) => {
//             e.subject.forEach((el) => {
//                   if (objs[el] === el) {
//                     objs[el]++
//                   } else {
//                     objs[el] = 1;
//                   }
                  
//             })
//           })
//           return objs
// }

// // console.log(
// //     count(students)
// // );

// const inventory = [
//     {name : "Laptop" , quantity: 5, price: 1000},
//     {name : "shirt" , quantity: 0, price: 50},
//     {name : "phone" , quantity:10, price: 500},
//     {name : "shoes" , quantity: 3, price: 80}
// ]
// function inventoryValue(inventory) {
//     var total = 0;

//       inventory.forEach((e) => {
//         total = total + (e.quantity * e.price);
//         // console.log(total);
//       })
//       return total;
// }

// // console.log(inventoryValue(inventory));


// //Q 6 

// const transactions = [
//     {userId: 1, amount: 50, data:"2023-01-01"},
//     {userId: 2, amount: 50, data:"2023-01-01"},
//     {userId: 1, amount: 50, data:"2023-01-01"},
//     {userId: 2, amount: 50, data:"2023-01-01"},
//     {userId: 2, amount: 50, data:"2023-01-01"},
// ];

// // function topSenders(transactions) {
// //     const userMap = new Map();
// //     transactions.forEach(({}))
// // }

// const employees = [
//     {name : "john" , department : "Engineering" , salary : 1000} ,
//     {name : "jane" , department : "marketing" , salary : 1500} ,
//     {name : "jim" , department : "Engineering" , salary : 500} ,
//     {name : "jack" , department : "HR" , salary : 800} ,

// ]
// function getHighEarning(employees , minSalary) {
//     const arr = [];
//     employees.forEach((e) => {
//             if (e.salary > minSalary) {
//                 arr.push(e.name);
//                 // console.log(arr);
//             }
//     })
//     return arr;
// }

// // console.log( getHighEarning(employees , 800) );


// const books = [{title: "Book A",author: "Author 1",genres:["Fiction","Mystery"]},
//               {title: "Book B",author: "Author 2",genres:["Nonfiction","History"]},
//               {title: "Book C",author: "Author 3",genres:["Fiction","History"]},
//               {title: "Book D",author: "Author 4",genres:["Mystery","Thriller"]}];
// function countGenres(books) {
//     const objss = {}
//     books.forEach((e) => {
//         e.genres.forEach((el)=> {
//             if (objss[el]) {
//              objss[el]++
//             } else {
//                 objss[el] = 1;
//             }
//         })
//     })
//     return objss;
// }

// // console.log(countGenres(books));

// const sale1 = [
//     {productId : 1 , productName : "Product A" , amount : 100} ,
//     {productId : 2 , productName : "Product A" , amount : 150} ,
// ];

// const sale2 = [
//     {productId : 1 , productName : "Product A" , amount : 200} ,
//     {productId : 3 , productName : "Product A" , amount : 300} ,
// ]

// function mergeAndSum(sale1,sale2){
//     var output = []; 
//     const objsss = {};

//     output = [...sale1 , sale2];
//     // console.log(output);
//     output.forEach((e) => {
//         if (objsss[e]) {
//             objsss[e.amount] +=  objsss[e.amount]
//         } else {
//             objsss[e] = e;
//         }
//     })
//     return objsss
// }
 
// console.log(mergeAndSum(sale1,sale2));