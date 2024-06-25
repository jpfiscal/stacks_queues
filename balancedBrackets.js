const stack = require('./stack.js');

function strBalance(str){
    let balanceStack = new stack;
    for (let i=0; i<str.length; i++){
        if (str[i] == '[' || str[i] == '{' || str[i] == '('){
            balanceStack.push(str[i]);
        }
        if (str[i] == ']' || str[i] == '}' || str[i] == ')'){
            if (str[i] != revSign(balanceStack.pop())){
                return false;
            }
        }
    }
    if (balanceStack.size>0){
        return false;
    }else{
        return true;
    }
}

function revSign(str){
    if(str == '['){
        return ']';
    }else if(str == '{'){
        return '}';
    }else if(str == '('){
        return ')';
    }else{
        throw new Error("invalid input string passed to revSign function");
    }
}

console.log(`hello: ${strBalance("hello")}`);
console.log(`(hi) [there]: ${strBalance("(hi) [there]")}`);
console.log(`(hi [there]): ${strBalance("(hi [there])")}`);
console.log(`(((hi))): ${strBalance("(((hi)))")}`);
console.log(`(hello: ${strBalance("(hello")}`);
console.log(`(nope]: ${strBalance("(nope]")}`);
console.log(`((ok) [nope)]: ${strBalance("((ok) [nope)]")}`);