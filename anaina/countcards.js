function fun4(val){
    var count=0;
    switch(val){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
        case 10:
        case "j":
        case "q":
        case "k":           
        count--;
        break;
    
        

    }
    var holdbet="hold";
    if (count>0){
        holdbet="bet"
    }
    return count+" "+holdbet

}    
console.log(fun4(10))
console.log(fun4(3))