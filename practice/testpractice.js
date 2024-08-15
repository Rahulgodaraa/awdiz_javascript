/* const orders = [

//     { orderid: 1, tableNumber: 2, amount: 30 }, // 1
//     { orderid: 2, tableNumber: 1, amount: 20 }, 
//     { orderid: 3, tableNumber: 2, amount: 50 },
//     { orderid: 4, tableNumber: 3, amount: 40 },
//     { orderid: 5, tableNumber: 1, amount: 10 },
//   ];
 
//   //output :- { 1: 30 , 2: 80 , 3: 40};

//   function sumByTable(orders) {
//     const obj = {};
//      for (let i in orders) {
//         const {tableNumber , amount} = orders[i]; // destructure of array
//          if (obj[tableNumber]) { 
//             // console.log(obj , i);
//             obj[tableNumber] += amount; 
//          } else {
//             obj[tableNumber] = amount; //i1 =  2 : 30 , 
//             // console.log(obj);
//          }
//      }
//      return obj;
//   }

//   console.log(sumByTable(orders));
*/  
/*const students = [
    {name: "Alice" , subject: ["Math" , "Science"] }, // i
    {name: "Bob" , subject: ["English" , "Science"]}, //i2
    {name: "Charlie" , subject: ["Math" , "History"]},
    {name: "David" , subject: ["Science" , "History"]}
]

// output math: 3 , sci : 2 , English : 1 , history: 2 }

function countSubjects(students) {
     const obj = {};
     for (let i of students) {
        // console.log(i , 1);
        for (let j of  i.subject) {
             if (obj[j]) {
                obj[j] ++
             } else {
                obj[j] = 1; // math : 1 , sci : 3
             }   
        }
     }
     return obj;
}

console.log(countSubjects(students));
*/
/*const inventory = [
        {name : "Laptop" , quantity: 5, price: 1000},
        {name : "shirt" , quantity: 0, price: 50},
        {name : "phone" , quantity:10, price: 500},
        {name : "shoes" , quantity: 3, price: 80}
    ]
    function inventoryValue(inventory) {}

    console.log(inventoryValue(inventory));
    */
/*const transactions = [
            {userId: 1, amount: 50, data:"2023-01-01"},
            {userId: 2, amount: 50, data:"2023-01-01"},
            {userId: 1, amount: 50, data:"2023-01-01"},
            {userId: 3, amount: 50, data:"2023-01-01"},
            {userId: 2, amount: 50, data:"2023-01-01"},
            // {userId: 3, amount: 50, data:"2023-01-01"},

        ];
        
        function topSenders(transactions) {
             const obj = {}
             const values = [];
             for (let i of transactions) {
                // console.log(i);
                // const {userId} = transactions;
                if (obj[i.userId]) {
                    obj[i.userId]++;
                } else {
                    obj[i.userId] = 1;
                    // console.log(obj);
                }
             }
             for (let i in obj) {
                // console.log(obj[i]);
                 if (obj[i] > 1) {
                    values.push(Number(i))
                    // values.push(i)
                 }  
             }
             return values;
        }
        console.log(topSenders(transactions));
        
*/
/*const employees = [
//         {name : "john" , department : "Engineering" , salary : 1000} ,
//         {name : "jane" , department : "marketing" , salary : 1500} ,
//         {name : "jim" , department : "Engineering" , salary : 500} ,
//         {name : "jack" , department : "HR" , salary : 800} ,
    
//     ]
//     function getHighEarning(employees , minSalary) {}
// console.log(getHighEarning(employees , "Engineering"));
*/
/* const books = [{title: "Book A",author: "Author 1",genres:["Fiction","Mystery"]},
// //               {title: "Book B",author: "Author 2",genres:["Nonfiction","History"]},
// //               {title: "Book C",author: "Author 3",genres:["Fiction","History"]},
// //               {title: "Book D",author: "Author 4",genres:["Mystery","Thriller"]}];
// // function countGenres(books) {}

// // // console.log(countGenres(books));
*/


const sale1 = [
        {productId : 1 , productName : "Product A" , amount : 100} ,
        {productId : 2 , productName : "Product B" , amount : 150} , //i
    ];
    const sale2 = [
        {productId : 1 , productName : "Product C" , amount : 200} ,
        {productId : 3 , productName : "Product D" , amount : 300} ,
    ]
    function mergeAndSum(sale1,sale2){
        var mergeSale = [];
        mergeSale = [...sale1 , ...sale2];
        var finalArray = [
            item[1] // {productId : 1 , productName : "Product A" , amount : 100} 
            // {productId : 2 , productName : "Product B" , amount : 150}
        ];

        // console.log(mergeSale);
        for(let i of mergeSale ){
        const existingProduct = finalArray.find((item) => item.productId === i.productId)
//undef
            if(existingProduct) {
              existingProduct.amount += i.amount;
            //   console.log(finalArray);
            } else {
              finalArray.push({...i});
            }
            
        }
     return finalArray   
    }
console.log(mergeAndSum(sale1,sale2));



//acc = 1 , curr = 2  => return acc = acc + 5
//15
//  0,   cr
// [ 1,2,3,4,5]

// output 15
/*reduce     function{
reduce(acc , curr) => {
    
    } , array[0];   
}
*/