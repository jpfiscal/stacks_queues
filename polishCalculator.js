const stack = require('./stack.js');

function calc(str){
    calcStack = new stack;
    //remove all spaces from str
    trimStr = str.split(" ").join("");

    //read in string and populate stack
    for (i=0; i < trimStr.length; i++){
        calcStack.push(trimStr[i]);
    }
    //read in two operands and one operator at a time
    let operand1;
    let operand2;
    let operator;
    while (calcStack.size > 0){
        
        let temp = calcStack.pop()
        if (isOp(temp)){
            operator = temp;
        }else if (operand1 == null){
            operand1 = temp;
        }else{
            operand2 = temp;
        }
        if (operand1 != null && operand2 != null && operator != null){
            temp = calcValue(operand1, operand2, operator);
            operand1 = temp;
            operand2 = null;
            operator = null;
        }
    }
    return operand1;
}

function calcValue(op1, op2, operator){
    console.log(`op1 = ${op1}`)
    console.log(`op2 = ${op2}`)
    console.log(`operator = ${operator}`)
    if (operator == "+"){
        console.log(`result: ${Number(op2) + Number(op1)}`)
        return Number(op2) + Number(op1);
    } else if (operator == "-"){
        console.log(`result: ${Number(op2) - Number(op1)}`)
        return Number(op2) - Number(op1);
    } else if (operator == "*"){
        console.log(`result: ${Number(op2) * Number(op1)}`)
        return Number(op2) * Number(op1);
    } else if (operator == "/"){
        console.log(`result: ${Number(op2) / Number(op1)}`)
        return Number(op2) / Number(op1);
    } else {
        throw new Error("invalid operator");
    }
}

function isOp(val){
    if (val == '+' || val == '-' || val == '*' || val == '/'){
        return true;
    } else {
        return false;
    }
}

console.log(calc("+ 1 2"));
console.log(calc("* 2 + 1 2"));
console.log(calc("+ 9 * 2 3"));
console.log(calc("- 1 2"));
console.log(calc("- 9 * 2 3"));
console.log(calc("/ 6 - 4 2"));
