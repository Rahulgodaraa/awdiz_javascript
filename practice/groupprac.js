// // // Use driving license function here... use numbers as age
// // const students = ["virat","rahul","rohit","ali"]
// // students.forEach((student)=> console.log(student) )

// // const students = [17, 18, 20, 50, 65];
// // const eligible = [];

// // license = (students) => {
// //   students.forEach((student) => {
// //     if (student > 18 && student <= 60) {
// //       console.log(student);
// //     }
// //   });
// // };

// // const output = license(students);
// // console.log(output);

// // let arr = [23,56,4,79,4,65,3,56,4];
// // let tar = 56;

// // for (let i = 0; i <= arr.length-1; i++) {
// //   if (arr[i] == tar ) {
// //     arr.pop(arr[i]);
// //   }
// // }

// // // console.log(arr);

// // //-------------------------------------------------------------

// // const input = {'1': 2 , '2': 2 , '3': 1 };

// // for (const key in input) {
// //     if (input[key] > 1) {
// //         // console.log(key, input[key])
// //     }
// // }

// // const arr = [1,1,2,1,3,2];
// // const obj = {};
// // arr.forEach((ele) => {
// //  if(obj[ele]) {
// //     obj[ele]++;
// //  } else {
// //     obj[ele] = 1;
// //  }
// // })
// // console.log(obj)

// // You are given an object representing a library. The object contains an array of books, where
// //  each book has a title, author, and copies (an array of objects representing individual
// //  copies, each with a copyNumber and isAvailable property). Write a function called
// //  availableBooks that returns an array of book titles that have at least one available copy.
// const library = {
//   books: [
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       copies: [
//         { copyNumber: 1, isAvailable: false },
//         { copyNumber: 2, isAvailable: true },
//       ],
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       copies: [
//         { copyNumber: 1, isAvailable: false },
//         { copyNumber: 2, isAvailable: false },
//       ],
//     },
//     {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       copies: [{ copyNumber: 1, isAvailable: true }],
//     },
//   ],
// };
// function availableBooks(library) {
//   // Your code here
// }
// console.log(availableBooks(library));
// // Output should be ["The Great Gatsby", "To Kill a Mockingbird"

// const input = [
//   { name: "amit", age: 30, copy: [{ col: "red" }] },
//   { name: "anil", age: 10, copy: [{ col: "orange" }] },
//   { name: "anand", age: 40, copy: [{ col: "green" }] },
// ];

// for (const i in input) {
//   for (const j in input[i].copy) {
//     // console.log(input[i].copy[j].col);
    
//     value = Object.values(input[i].copy[j]);
//   }

//   console.log(value , typeof value);
// }

// (output) => "red";
// ("orange");
// ("green");
