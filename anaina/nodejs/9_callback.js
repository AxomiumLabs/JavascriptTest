console.log(".................EXAMPLE 1.................")
function fetchData(callback) {
    setTimeout(() => {
      const data = 'Data fetched successfully';
      callback(data);
    }, 2000);
  }
  
  function processResult(result) {
    console.log(result);
  }
  
  fetchData(processResult);

  console.log(".................EXAMPLE 2.................")

  function processElement(element) {
    console.log('Processing element:', element);
  }
  
  function iterateArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }

arr=[1,2,3,4,5,6]
iterateArray(arr,processElement)

console.log(".................EXAMPLE 3.................")
  
function myDisplayer(something) {
    console.log(something);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

  console.log(".................EXAMPLE 4.................")

setTimeout(myFunction, 3000);

function myFunction() {
  console.log("output is here.....");
}

console.log(".................EXAMPLE 5.................")


function add(a,b){
    return a+b;
} 
function divide(a,b){
    return a/b;
}
function myCalculate(x,y,operation){
    return operation(x,y);
}
console.log(myCalculate(2,2,add));
console.log(myCalculate(2,2,divide))