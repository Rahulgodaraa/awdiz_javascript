
// Flatten array 1
// const array = [1,[2,[3,[4]],5]];
// const flattenarray = (array) => {
//     return array.reduce((prevVal , currVal) => {
//         return prevVal = prevVal.concat( Array.isArray(currVal) ? flattenarray(currVal) : currVal)
//     },[]);
// }
// console.log(flattenarray(array));

//Question: Write a JavaScript function to find the first non-repeating character in a string.
//  Examples: ● Input: "aabbccddeef" ○ Output: "f" ● 
//  Input: "abcabcde" ○ Output: "d" ● 
//  Input: "aabbc" ○ Output: "c" ● 
//  Input: "xxyyzz" ○ Output: "None"

const str = 'aabbccddeef'
function Nonrepeating(str) {
    const obj = {}
    for (let i = 0; i<= str.length ; i++) {
       
        if (obj[str[i]]){
            obj[str[i]]++  
        }  else {
            obj[str[i]] = 1  
        }
    }
// console.log(obj);
// console.log(obj);
// return obj

    for (let j in obj){
        if (obj[j] === 1) {
            return j;
        }
    }
    return null;
}

// console.log(Nonrepeating(str));


const s = '{}'

var isValid = function (s) {

    let stack = [];
        const relation = {
            ')': '(',
            '}': '{',
            '>': '<',
            ']': '['
        }
    
    for (let i of s ) {
        if(i == ')' || i == '}' || i == ']' || i == '>' ) {
             if(stack.legnth > 0  && stack[stack.length === relation[i]]){
                 stack.pop();
             }
        } else {
            stack.push(i);
        }
       
        return stack
        
    }
    
    
    };

    console.log(isValid(s));
    