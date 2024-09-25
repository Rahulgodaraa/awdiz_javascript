 /* const orders = [

// //     { orderid: 1, tableNumber: 2, amount: 30 }, // {2:30}
// //     { orderid: 2, tableNumber: 1, amount: 20 },     {1:20 , 2:30}
// //     { orderid: 3, tableNumber: 2, amount: 50 },     {1:20 , 2:80}
// //     { orderid: 4, tableNumber: 3, amount: 40 },
// //     { orderid: 5, tableNumber: 1, amount: 10 },
// //   ];
 
// //   //output :- { 1: 30 , 2: 80 , 3: 40};

// //   function sumByTable(orders) {
// //     const obj = {};
// //      for (let i in orders) {
// //         const {tableNumber , amount} = orders[i]; // destructure of array
// //          if (obj[tableNumber]) { 
// //             // console.log(obj , i);
// //             obj[tableNumber] += amount; 
// //          } else {
// //             obj[tableNumber] = amount; //i1 =  2 : 30 , 
// //             // console.log(obj);
// //          }
// //      }
// //      return obj;
// //   }

// //   console.log(sumByTable(orders));
// */  
 /*const students = [
//     {name: "Alice" , subject: ["Math" , "Science"] }, // i
//     {name: "Bob" , subject: ["English" , "Science"]}, //i2
//     {name: "Charlie" , subject: ["Math" , "History"]},
//     {name: "David" , subject: ["Science" , "History"]}
// ]

// // output math: 3 , sci : 2 , English : 1 , history: 2 }

// function countSubjects(students) {
//      const obj = {};
//      for (let i of students) {
//         // console.log(i , 1);
//         for (let j of  i.subject) {
//              if (obj[j]) {
//                 obj[j] ++
//              } else {
//                 obj[j] = 1; // math : 1 , sci : 3
//              }   
//         }
//      }
//      return obj;
// }

// console.log(countSubjects(students));
// */
 /*const inventory = [
//         {name : "Laptop" , quantity: 5, price: 1000},
//         {name : "shirt" , quantity: 0, price: 50},
//         {name : "phone" , quantity:10, price: 500},
//         {name : "shoes" , quantity: 3, price: 80}
//     ]
//     function inventoryValue(inventory) {
//         var total = 0;
//           inventory.forEach((e)=> {
//             if(e.quantity > 0) {
//                 total+= e.quantity * e.price
//             }
//           })
//           return total;
//     }

//     console.log(inventoryValue(inventory));
//     */
 /*const transactions = [
//             {userId: 1, amount: 50, data:"2023-01-01"},
//             {userId: 2, amount: 50, data:"2023-01-01"},
//             {userId: 1, amount: 50, data:"2023-01-01"},
//             {userId: 3, amount: 50, data:"2023-01-01"},
//             {userId: 2, amount: 50, data:"2023-01-01"},
//             // {userId: 3, amount: 50, data:"2023-01-01"},

//         ];
        
//         function topSenders(transactions) {
//              const obj = {}
//              const values = [];
//              for (let i of transactions) {
//                 // console.log(i);
//                 // const {userId} = transactions;
//                 if (obj[i.userId]) {
//                     obj[i.userId]++;
//                 } else {
//                     obj[i.userId] = 1;
//                     // console.log(obj);
//                 }
//              }
//              for (let i in obj) {
//                 // console.log(obj[i]);
//                  if (obj[i] > 1) {
//                     values.push(Number(i))
//                     // values.push(i)
//                  }  
//              }
//              return values;
//         }
//         console.log(topSenders(transactions));
        
// */
 /*const employees = [
//         {name : "john" , department : "Engineering" , salary : 1000} ,
//         {name : "jane" , department : "marketing" , salary : 1500} ,
//         {name : "jim" , department : "Engineering" , salary : 500} ,
//         {name : "jack" , department : "HR" , salary : 800} ,
    
//     ]
//     function getHighEarning(employees , minSalary) {
//         const newarr = employees.filter(e => e.salary > minSalary) // iska question 
//         .map(e => e.name) // iska question
//          return newarr
//     // console.log(newarr);
    
// }
// console.log(getHighEarning(employees , 800));
// */
 /* const books = [{title: "Book A",author: "Author 1",genres:["Fiction","Mystery"]},
// // //               {title: "Book B",author: "Author 2",genres:["Nonfiction","History"]},
// // //               {title: "Book C",author: "Author 3",genres:["Fiction","History"]},
// // //               {title: "Book D",author: "Author 4",genres:["Mystery","Thriller"]}];
// // // function countGenres(books) {}

// // // // console.log(countGenres(books));
// */
 /*const sale1 = [
//         {productId : 1 , productName : "Product A" , amount : 100} ,
//         {productId : 2 , productName : "Product B" , amount : 150} , //i
//     ];
//     const sale2 = [
//         {productId : 1 , productName : "Product C" , amount : 200} ,
//         {productId : 3 , productName : "Product D" , amount : 300} ,
//     ]
//     function mergeAndSum(sale1,sale2){
//         var mergeSale = [];
//         mergeSale = [...sale1 , ...sale2];
//         var finalArray = []
//             // item[1] // {productId : 1 , productName : "Product A" , amount : 100} 
//             // {productId : 2 , productName : "Product B" , amount : 150}

//         // console.log(mergeSale);
//         for(let i of mergeSale ){
//         const existingProduct = finalArray.find((item) => item.productId === i.productId) // true  
// //undef falsy value
//             if(existingProduct) {
//               existingProduct.amount += i.amount;
//             //   console.log(finalArray);
//             } else {
//               finalArray.push({...i});
//             }
            
//         }
//      return finalArray   
//     }
// console.log(mergeAndSum(sale1,sale2));
// */
 //acc = 1 , curr = 2  => return acc = acc + 5
// //15
// //  0,   cr
// // [ 1,2,3,4,5]

// // output 15
// /*reduce     function{
// reduce(acc , curr) => {
    
//     } , array[0];   
// }
// */
/* const employees = [
// 	{
// 		name: "John",
// 		department: "Engineering",
// 		salary: 1000,
// 		projects: ["Project A", "Project B"],
// 	},
// 	{
// 		name: "Jane",
// 		department: "Marketing",
// 		salary: 1500,
// 		projects: ["Project B", "Project C"],
// 	},
// 	{
// 		name: "Jim",
// 		department: "Engineering",
// 		salary: 500,
// 		projects: ["Project A"],
// 	},
// 	{
// 		name: "Jack",
// 		department: "HR",
// 		salary: 800,
// 		projects: ["ProjectC", "Project A"],
// 	},
// ];

// {
//     pa : {totalsal : 2300 , names: []},
//      pb , pc , pd
}*/ 



//-------------------------------------------Test - 7 ----------------------------------practice 


/* Q - 1
Implement a Function to Flatten a Nested Array:
 Question: Write a JavaScript function to flatten a deeply nested array.
 Examples:
 ● Input: [1, [2, [3, [4]], 5]]
 ○ Output: [1, 2, 3, 4, 5]
 ● Input: [[1, 2], [3, 4], [5]]
 ○ Output: [1, 2, 3, 4, 5]
 ● Input: [1, [2, 3], 4, [5, 6]]
 ○ Output: [1, 2, 3, 4, 5, 6]
 ● Input: [1, [[2, 3], [4, [5]]], 6]
 ○ Output: [1, 2, 3, 4, 5, 6]
 */

 var arr = [1, [2, [3, [4]], 5]]

function FlattenedArray(arr){
    return arr.reduce((accumulator, currentvalue) => {
        if (Array.isArray(currentvalue)){
            return  accumulator.concat(FlattenedArray(currentvalue));
        } else {
            return accumulator.concat(currentvalue);
        }
    },[])
}
 
const result = FlattenedArray(arr);
// console.log(result);

/**
 Find the First Non-Repeating Character:
 Question: Write a JavaScript function to find the first non-repeating character in a string.
 Examples:
 ● Input: "aabbccddeef"
 ○ Output: "f"
 ● Input: "abcabcde"
 ○ Output: "d"
 ● Input: "aabbc"
 ○ Output: "c"
 ● Input: "xxyyzz"
 ○ Output: "None"
 */


 const str = "faagbbccddee"

 const obj = {}
 for (let x of str){
    if (obj[x]) {
        obj[x]++ ;
    } else {
        obj[x] = 1;
    } 
 }

 for(let x in obj){
    if(obj[x] === 1) {
        // console.log(x); 
        break ;
    } 
 }
 

/**
 *  Find the Majority Element:
 Question: Write a JavaScript function to find the majority element in
 an array. The majority element is the element that appears more than
 n/2 times in an array of size n.
 Examples:
 ● Input: [3, 2, 3]
 ○ Output: 3
 ● Input: [2, 2, 1, 1, 1, 2, 2]
 ○ Output: 2
 ● Input: [1, 1, 2, 1, 3, 4, 1]
 ○ Output: 1
 ● Input: [5, 5, 5, 5, 1, 2, 3]
 ○ Output: 
 */

 const arr2 = [2, 2, 1, 1, 1, 2, 2]
const n = arr2.length/2;
 const obj1 = {}
 var maxNum = 0;
 for (let x of arr2){
    if (obj1[x]) {
        obj1[x]++ ;
        
    } else {
        obj1[x] = 1;
    } 
 }


 for(let i in obj1){
    // console.log(i);
    
    if (obj1[i] >= n ){
        console.log(i);   
    }   
 }


 
/*
1. Two Sum
 ● Problem: Given an array of integers and a target sum, return the indices of the two
 numbers that add up to the target.
 ● Input 1: [2, 7, 11, 15],9
 ● Output1: [0, 1]
 ● Input 2: [3, 2, 4],6
 ● Output2: [1, 2]
 */
 
 /// i = 11 , 7 , 2 , 15
 //  j = 11 , 7, 2, 15


 const arra = [11, 7, 2, 15]
 const tar = 9
 const arrr = [];
 for (let i in arra){
    for(let j in arra){
        if ((arra[i] + arra[j]) === tar){
            if (arrr.includes(i,j)){
                continue;
            } else {
            arrr.push(i,j);
            }
        }
    }
    
 }

//  console.log(arrr);
 
 /*)
 2. Valid Parentheses
 ● Problem: Given a string containing just the characters (, ), {, }, [ and ], determine if
 the input string is valid.
 ● Input 1: "()[]{}"
 ● Output1: true
 ● Input 2: "(]"
 ● Output2: false*/
 

 const input = "(}[]{}{]]]]"

 function CorrectParanthese(input){
 const stack = [];

 const relation = {
    ')' : '(',
    '{' : '}',
    ']' : '['
 }

for (let i of input ) {
    if (i === '(' || i === '{' || i === '[' ) {
        stack.push(i);
    } else if (i === ')' || i === '}' || i === ']' ) {
        if ( stack[stack.length-1] !== relation[i] || stack.length === 0){
            return false 
        } 
            stack.pop();
        
    }

}
return stack.length === 0;
 }


const res = CorrectParanthese(input);
// console.log(res);





 /*
 3. Merge Two Sorted Arrays
 ● Problem: Given two sorted arrays, merge them into one sorted array.
 ● Input 1: [1, 3, 5],[2, 4, 6]
 ● Output1: [1, 2, 3, 4, 5, 6]
 ● Input 2: [1, 2, 3],[2, 5, 6]
 ● Output2: [1, 2, 2, 3, 5, 6]
 */

/*
 4. Longest Substring Without Repeating Characters
 ● Problem: Given a string, find the length of the longest substring without repeating
 characters.
 ● Input 1: "abcabcbb"
 ● Output1: 3(substring "abc")
 ● Input 2: "bbbbb"
 ● Output2: 1(substring "b")
 */








 
/*
 5. Product of Array Except Self
 ● Problem: Given an array nums of n integers, return an array output such that
 output[i] is equal to the product of all the elements of nums except nums[i].
 ● Input 1: [1, 2, 3, 4]
● Output1: [24, 12, 8, 6]
 ● Input 2: [2, 3, 4, 5]
 ● Output2: [60, 40, 30, 24]
*/


const input1 = [1, 2, 3, 4];
const newa = [];
for (let i of input1) {
    var multi = 1;
    for (let j of input1) {
        if(i === j) {
            continue;
        } else {
         multi *= j}
    newa[i] = newa.push(multi);

    }
}

console.log(newa);
