function chain(num){
    if (num<5){
        return "tiny";
    }
    else if(num<10){
        return "small";
    }
    else if (num<15){
        return "medium";
    }
    else if(num<20){
        return "large";
    }
    else{
        return "huge";

    }
}
console.log(chain(2))
console.log(chain(8))
console.log(chain(12))
console.log(chain(19))
console.log(chain(21))