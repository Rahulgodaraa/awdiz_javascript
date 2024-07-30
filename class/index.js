/*


// Datatypes ->

// Data -> information -> name email age etc  , awdiz awdiz@gmail.com 20

// function -> store ->  mulitple line code

// console.log(myname) // awdiz
// typeof("awdiz") // String
// typeof(20) // Number

// 1. String

console.log(typeof("awdiz"))

console.log(typeof('awdiz'))

console.log(typeof(`awdiz`))

// 2. Number

// 20, 2132, 232, 32.32, 131.121, 312, 32
console.log(typeof(2))

console.log(typeof("2"))

// 3. Boolean
// true false

console.log(typeof(true))
console.log(typeof(false))

// 4. undefined

// Varibles ( storage - cupboard ) - to store data, any type of data
// 1. var
// 2. let
// 3. const

// varibletype variblename = value ;







var username = "Rahul";
var userage = 10;
var useremail = "Rahul@username.in";
var userpassword = "username@123";
var user;

console.log(username, userage, useremail, userpassword);
console.log(user , typeof(user));







var number1 = 23456;
var number2 = 98765;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);









var number = 10; // declare and assign
console.log(number);
number = 12; // re-assign
console.log(number);
var number = 14 ; // re declare
console.log(number);










// let numbers = 10;
// console.log(numbers)
// number = 12;
// console.log(number)
// let numberss = 14;
// console.log(numberss)






// const numbersss = 10;
// console.log(numbersss);
// number = 12;
// console.log(number);
// const number = 14;
// console.log(number)











//       reassign   redeclare       scope           hoisting
// var     ✅          ✅       global scope
// let     ✅          ❌       block scope
// const   ❌          ❌       block scope
//

// {} -> block / box





{
  var number = 10;
  let number2 = 12;
  console.log(number2);
  const number3 = 14;
}

console.log(number);











{
//   var number = 10;
//   let number = 10;
  const number = 10;
  {
    console.log(number);
  }
}
console.log(number);


// Datatype
// String
// number
// boolean
// undefined
// varible
// var
// let
// const
// Hoisting




// number = 10;
// console.log(number);
// var number;
// let number;
// const number;









// Comparision operators
// <
// >
// <=
// >=
// ==
// ===

console.log(10 < 20);
console.log(10 > 20);
console.log(10 >= 20);
console.log(10 <= 20);
console.log(10 <= 10);

// = -> to assign value
// == -> to only compare data
// === -> to compare data and datatype

console.log(2 == "2");

console.log(2 === "2");






// Conditional Statement
// 1. if else
// 2. switch

// 1. if else

// if(condition){
//     statement 1
// } else {
//     statement 2
// }




if (false) {
  console.log("if block");
} else {
  console.log("else block");
}





if (10 > 20) {
  console.log("inside if");
} else {
  console.log("inside else");
}







var number1 = 345;
var number2 = 435;

if (number1 > number2) {
  console.log("number1 is greter than number2");
} else {
  console.log("number1 is lesser than number2");
}





  var userage = 21;

 if(userage >= 18) {
  console.log("You are eligible to vote");
 } else {
  console.log("You are  not eligible to vote");
 }

 console.log ('-------------')
 var day = 'sun';

 switch (day) {
  case 'Mon' : 
console.log( 'It is a weekday back to work')  ;
break;
case 'tue' : 
console.log( 'It is a weekday back to work')  ;
break;

case 'wed' : 
console.log( 'It is a weekday back to work')  ;
break;

case 'thur' : 
console.log( 'It is a weekday back to work')  ;
break;

case 'fri' : 
console.log( 'It is a weekday back to work')  ;
break;

case 'sat' : 
console.log( 'It is a weekend take rest!')  ;
break;

case 'sun' : 
console.log( 'It is a weekend take rest!')  ;
break;

default : 
  console.log('Error! , Select day properly');
break;


 }
// function licenceChecker(age) {
//   console.log(`User Input was :-  ${age}`);
//   if (age > 18 && age <= 60) {
//     console.log("User is elligible for Driving Liscense");
//   } else if (age <= 17 || age > 60) {
//     console.log("User is Not elligible for Driving Liscense");
//   } else {
//     console.log("User is elligible for Learning License");
//   }
// }
// licenceChecker(18);


function loops(n) {
    //  for ( i = 0 ; i <= n ; i++){
    //   console.log(i);
    //  }
    
    //  for ( i = 0 ; i <= n ; i++){
    //   if(i % 2 == 1) console.log(i);
    //  }
     for ( i = 50 ; i <= n ; i++){
        if (i % 10 == 0) console.log(i);
     }

}
// loops(10);
// loops(100);
loops(150);


 

function questionFourth(starting, ending, sequence) {
  for (var i = starting; i >= ending; i -= sequence) {
    console.log(i);
  }
}

questionFourth(40, 20, 3);

 

function reverseOdd(starting, ending) {
  for (var i = starting; i >= ending; i--) {
    // console.log(i)
    if (i % 2 == 1) {
      console.log(i);
    }
    // i--
  }
}

reverseOdd(40, 0);

 

"Even count : 10"
"Odd count : 14"

function countOddEven(starting, ending) {
  var evenCount = 0;
  var oddCount = 0;
  for (var i = starting; i >= ending; i--) {
    // console.log(i);
    if (i % 2 == 0) {
      // even
      evenCount++;
    } else {
      // odd
      oddCount++;
    }
  }
  console.log(`Even count : ${evenCount}`);
  console.log(`Odd count :  ${oddCount}`);
}

countOddEven(60, 20);

// Q.1 = sum of all numbers from range 10 - 40;

let sum = 0;
for ( let i = 10; i <= 40 ; i++){
    sum += i;
}

console.log(sum);


factorial = (n) => {
  var sum = 1;
     for(let i = 1 ; i <= n ;  i++) {
      sum *= i;
      console.log(sum);
     }
}

factorial(8);

var name = 'names';

console.log(name[name.length-1]);


function sumOfAllNumbers(starting, ending) {
  var count = 0; // 10 21 33
  for (var i = starting; i <= ending; i++) {
    // console.log(i)
    // console.log(count, "count", i, "i");
    count = count + i;
    // i++
  }
  console.log("count :" ,count)
}

sumOfAllNumbers(10, 40);








// Q Calculate factorial of a number
// 5 * 4 * 3 * 2 * 1 => 120

function findFactorial(number){
    var count = 1; // 2 6
    for(var i = 2; i <= number; i++){
        // console.log(i)
        count = count * i;
        // i++ 4
    }
    console.log(count)
}

findFactorial(1)






// Q Given a string find is string palindrome or not .

function isPalindrome(string) {
  for (var i = 0; i <= Math.floor((string.length - 1) / 2); i++) {
    console.log(string[i]);
  }
}

isPalindrome("roataor");

// var string = "roataor"
// console.log(string[Math.floor((string.length - 1) / 2)])

// 0 == 6 , r == r
// 1 == 5 , o == 0
// 2 == 4 , a == a

// left side incrementing
// right side decrementing






var name = "rotor";
console.log(name.length -1 ); // its calculates letter from 1 .
console.log(name[9]) // its calculates letter from 0.
console.log(name[name.length - 1]);
console.log(Math.floor(name.length / 2));








var number =  536.3242;
console.log(Math.floor(number))
console.log(Math.ceil(number))



// Q . Sum of all numbers from range 10 - 40;

sumnums = (s,e) => {
  let sum = 0;
  for(var i = s;  i <= e ; i++ ){
    sum = sum + i;
  }
  console.log('Sum of Numbers is :- ' + sum);
}

sumnums(10,40);


// Q Calculate factorial of a number
factnums = (s) => {
  let sum = 1;
  for(var i = 1;  i <= s ; i++ ){
    sum = sum * i;
  console.log('Factorial of Numbers ' + i + ' is :- ' + ' ' + sum);

  }
  console.log('Final Factorial  is :- ' + sum);
}

factnums(10);

// Q Given a string find is string palindrome or not .

function isPalindrome(string) {
  for (var i = 0; i <= Math.floor((string.length - 1) / 2); i++) {
    console.log(string[i]);
  }
}

isPalindrome("roataor");

// var string = "roataor"
// console.log(string[Math.floor((string.length - 1) / 2)])

// 0 == 6 , r == r
// 1 == 5 , o == 0
// 2 == 4 , a == a

// left side incrementing
// right side decrementing






var name = "rotor";
console.log(name.length -1 ); // its calculates letter from 1 .
console.log(name[9]) // its calculates letter from 0.
console.log(name[name.length - 1]);
console.log(Math.floor(name.length / 2));








var number =  536.3242;
console.log(Math.floor(number))
console.log(Math.ceil(number));




var array = [1,2,3,4,5,6,7,8,9];

let count=0;


function arrcount(array)  {
      for (let i = 0; i <= array.length-1; i++){
       
       if(array[i] == 1) {
        count =+ array[i];
       }
       else if( array[i] % 2 == 1) {
        count =+ array[i];
        }
        console.log(array[i] , ' In this index the count is ' + count);
      } 
      return 'final count ' +  count;

}

const output = arrcount(array);

console.log(output);



let names = ['name1','name2','name3','name4','name5'];

names.push('name6');
console.log(names);
names.pop('name1');
console.log(names);
names.shift();
console.log(names);
names.unshift('names0');
console.log(names);


var students = ["rahul", "nehal", "ali", "amod", "adep"];
console.log(students.slice());
console.log(students.slice(1));
console.log(students.slice(2, 3));

console.log(students.slice(-3));
console.log(students.slice(3, -1));

// 6. Splice

var students = ["rahul", "nehal", "ali", "amod", "adep"];

// .splice(index , 0/1 , new element) -> its return nothing i.e its update current array
// 0 -> update
// 1 -> replace

students.splice(3, 0, "Virat");

students.splice(1, 2, "virat");

students.splice(3, 1);

console.log(students);

// Q Given an array of names find out index of target . 
var students = ["rahul", "nehal", "ali", "amod", "adep"];
var target = "adep"
// output  : 4
indexreturn  = (students , target) => {
for (let i = 0 ; i < students.length; i++) {
  if ( students[i] === target) {
    return i;
  }
}
}

const output = indexreturn(students , target);
console.log(output);

*/


// var array = [1,2,3,4,5,6,7];
// var target = 12;

// findnumadd = (array , target) => {
//        var num1 = 0;
//        var index = 0;
//        var arr2 = [];
//       for (let i = 0; i < array.length; i++) {
//         for (let j = 0 ; j < array.length; j++) {
//               if(array[i] + array[j] == target) {
//                 arr2.push([array[i],array[j]]);  
//              }
//         }
//       }
       
//        console.log(arr2);
// } 

// findnumadd(array , target);

// var string = "nayannayan";
// var count = 0;
// var strchar = '';

// function findDuplicates(string) {
//   var output = {};
//   console.log(string, "string");
//   for (var i = 0; i <= string.length - 1; i++) {
//     // console.log(string[i]);
//     // console.log(output[string[i]]);
//     if (output[string[i]] == undefined) {
//       output[string[i]] = 1;
//     } else {
//       output[string[i]]++;
//     }
//   }
//   for (char in output) {
//     if (output[char] > count ){
//       strchar = char;
//       count = output[char];
//     }
//   }
//   console.log(output , strchar , count);
// }

// findDuplicates(string);

// const students = [17, 18, 20, 50, 65];
// const eligible = [];

// license = (students) => {
//   students.forEach((student) => {
//     if (student > 18 && student <= 60) {
//       console.log(student);
//     }
//   });
// };

// const output = license(students);
// console.log(output);




// var number = 3;
//  var i = 1;
// var sum = 0; 
// while(i <= number)
//   {
//     sum = sum + i;
//     i++;
//     console.log(i,sum);

    
//   }
//   console.log(sum);


// Q Give an aray, do addition of numbers by using while loop .

console.log('Q.1-----------')

var array = [2, 4, 5, 6, 7, 8, 3, 2];
// ouput : 120

var sum = 0;
var i = 0;
while (i <= array.length-1) {
  sum = sum + array[i];
  // console.log(i,sum)
  i++;
} 
console.log(sum);


// Q Give an aray, find only odd numbers by using while loop .

var array = [2, 4, 5, 6, 7, 8, 3, 2];
// ouput
// 5
// 7
// 3

console.log('Q.2-----------')


var newarr = [];
var i = 0;
while (i <= array.length-1) {
  if (array[i] % 2 == 1) {
    newarr.push(array[i]);
  }
  i++;
} 
console.log(newarr);


// Q Give an aray, find count of even numbers by using while loop .

var array = [2, 4, 5, 6, 7, 8, 3, 2];

// ouput : 5
console.log('Q.3-----------')


var count = 0;
var i = 0;
while (i <= array.length-1) {
  if (array[i] % 2 == 0) {
    count++;
  }
  i++;
} 
console.log(count);