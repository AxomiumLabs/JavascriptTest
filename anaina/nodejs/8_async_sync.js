//SYNCHRONOUS 
// every statement of the code gets executed one by one
console.log("hello world...!")
console.log(1+2+3)

let a=2;
let b=4;
console.log(a)
console.log(b)

// ASYNCHRONOUS
// 'happens in the future, not right now'
// allows to execution next instructions immediately and doesn't block the flow because of previous instructions.
// console.log("time before...")

console.log(".................EXAMPLE 1.................")
setInterval(() => {
    console.log("time running...")
}, 8000);
console.log("time after...")


console.log(".................EXAMPLE 2.................")
console.log("time before...")
setTimeout(() => {
    console.log("time expired...")
    }, 8000);


console.log(".................EXAMPLE 3.................")
setTimeout(function() { myFunction("Welcome!!!"); }, 3000);

function myFunction(value) {
  console.log(value);
}



console.log(".................EXAMPLE 4.................")


setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
 console.log(
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds());
}