function larger(num){
    if (num>20){
        return "greater than 20";
    }
    else if(num<20){
        return "less than 20";
    }
    else{
        return "equals to 20";
    }
}
console.log(larger(20))