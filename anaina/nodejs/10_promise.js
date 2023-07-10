//SYNTAX :
// let myPromise = new Promise(function(myResolve, myReject) {

//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );
// '................................................................."'

// function getArticle(id){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("Fetching Data.....");
//             resolve({id: id,name:"anai"});

//         },5000);
//     });
// }

// getArticle("1").then(res=>console.log(res))//.then() and .catch() to handle operations that gets completed or fails.




// Creating a Promise
// const myPromise = new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation
//     setTimeout(() => {
//       const randomNum = Math.random();
//       if (randomNum < 0.5) {
//         // Resolve the promise if the random number is less than 0.5
//         resolve(randomNum);
//       } else {
//         // Reject the promise if the random number is greater than or equal to 0.5
//         reject(new Error('Random number is too large!'));
//       }
//     }, 2000); // Wait for 2 seconds
//   });
  
//   // Using the Promise
//   myPromise
//     .then((result) => {
//       console.log('Promise resolved with result:', result);
//     })
//     .catch((error) => {
//       console.log('Promise rejected with error:', error.message);
//     });
  


    // ................................................................................................

    const checkEvenNumber = (num) => {
        return new Promise((resolve, reject) => {
          if (num % 2 === 0) {
            resolve(`${num} is an even number.`);
          } else {
            reject(`${num} is not an even number.`);
          }
        });
      };
      
      checkEvenNumber(4).then((result) => {
          console.log(result);
        }).catch((error) => {
          console.log(error);
        });
      


      checkEvenNumber(7) .then((result) => {
          console.log(result);
        }).catch((error) => {
          console.log(error);
        });
      