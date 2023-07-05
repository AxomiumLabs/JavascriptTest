function caseInswitch(val){
    var answer=""
    switch(val){
    
        case 1:
            return "alpha";
            break;
        case 2:
            return "beta";
            break;
        case 3:
            return "gamma";
            break;
        case 4:
            return "delta";
            break;
        default:
            return "invalid"
    }
    

}
console.log(caseInswitch(1))
console.log(caseInswitch(2))
console.log(caseInswitch(3))
console.log(caseInswitch(4))
console.log(caseInswitch(5))