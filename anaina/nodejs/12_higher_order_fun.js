// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
// function callbackFunction(){
//     console.log('I am  a callback function');
// }

// // higher order function
// function higherOrderFunction(func){
//     console.log('I am higher order function')
//     func()
// }

// higherOrderFunction(callbackFunction);


// ..............................................................................

function executeACallback(callback, arg) { 
    return callback(arg)
   }
   
   const add2 = (num) => num + 2   ;
  
   console.log(executeACallback(add2,3))


   function isGreaterThan (num1) {
    return num2 => num2 > num1
   }
   
   let isGreaterThan10 = isGreaterThan(10)
   console.log(isGreaterThan10(11))
