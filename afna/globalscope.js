var myGlobal=5;//global scope because outside function
function f1(){
oopsGlobal=10;
//if not var used it will not be undefined otherwise undefined
}
function f2(){
    var output="";
    if(myGlobal !="undefined"){
        console.log("myglobal :" + myGlobal)   
    }
    if(oopsGlobal !="undefined"){
        console.log("oopsglobal :" + oopsGlobal)   
    }
    return output;
}
f1();
f2();

