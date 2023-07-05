function local(){
    var myvar=9;//inside function
    console.log(myvar)
}
local();
//console.log(myvar) //error because myvar is declared inside function



//local ang global with same name
var age=3;
function same(){
    var age=6;
    console.log("age in local:" + age)
}
same()
console.log("age in global:" + age);
