//visibility,if else,comparison
var myglobal=10;

function fun1(y){
            var x=5;
            z=x+myglobal;
            console.log(z)
            if(y>x){
                return true
            }
            else{
                return false
}
}

function fun2(y){
            if(3==="3"){
                console.log("same 3===\"3\"")
            }
            if (3=="3"){
                console.log("same 3==\"3\"")
            }

}


function fun3(y){
            if(y<10 || y>20){
                console.log("outside")
            }
    
    }
    function fun4(num){
        if (num<5){
            return "too small";
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

 

console.log(fun1(15))
fun2()
fun3(25)
console.log(fun4(1))


