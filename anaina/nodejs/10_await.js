// removing the usage of .catch() and .then() which again depends on callbacks.

// const getData = async() => {
//     let y =await "Hello World";//used to wait for the promise.
//     console.log(y);
// }
 
// console.log(1);
// getData();
// console.log(2);

// ...................example2..........
function asynchronous_operational_method() {
    let first_promise = new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(" world.....");
        }, 1000);
    });
    let combined_promise = Promise.all([first_promise, second_promise]);
    return combined_promise;
    }
     
    async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
    }
     
    display();