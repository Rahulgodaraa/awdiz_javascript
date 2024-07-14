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
 */
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