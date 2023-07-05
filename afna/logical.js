//and
function and(num){
    if (num>=50 && num>=25){
        return "yes";
    }
    return "no";
}
console.log(and(26))

//or
function or(num1){
    if (num1>=50 || num1>=25){
        return "yes";
    }
    return "no";
}
console.log(or(26))