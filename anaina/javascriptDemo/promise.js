
// let order=()=>{
//     return new Promise( (resolve,reject)=>{
//         if(isShopOpen){
            
//                 resolve(console.log("shop open"))
          
            
//         }
//         else{
//             reject(console.log("shop closed"))
//         }
//     })
// }


// order().then(val ()=>).catch()


let work=true;
var promise1 = ()=>{
    return new Promise((resolve, reject) =>{
    if (work) {
      resolve("See, it worked!");
    }
    else {
      reject("It broke");
    }
  })};
 let promise2= (val)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(val)
      }, 5000);
    })};

//   promise.then((val)=>{
//     console.log(val)
//   }).catch((err)=>{
//     console.log(err)
//   })




promise1().then((catchedVal)=>{
    console.log("1st then",catchedVal)
    return promise2(catchedVal)
})
  .then((catVal) =>{
    console.log("then2....",catVal)
  })
  .catch((err)=>{
        console.log(err)
      })
  .finally(()=>console.log("completed"))    