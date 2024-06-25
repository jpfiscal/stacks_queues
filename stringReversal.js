const stack = require('./stack.js');

function reverseString(str){
    let strStack = new stack;
    let reverseString = "";
    for(let i = 0; i < str.length; i++){
        strStack.push(str[i]);
    }
    let stringSize = strStack.size;
    for (let j = 1; j <= stringSize; j++){
        reverseString += strStack.pop();
    }
    return reverseString;
}

console.log(reverseString("hello"));