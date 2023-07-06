let api=[1,2,3,4,5]
// function testapi(){
//     try{
//     if (api.length>0){
//         console.log("output is coming....")
//     }
// }
//     catch(error){
//         console.log("error")
//     }
// }


//methode 1

// function errorhandling(){
//     try{
//         testapi1();
//         console.log("api working fine...");
//     }
//     catch(error){
//         console.log("error")
//     }
// }
// errorhandling();

//method2
let timelog=()=>new Promise(resolve =>setTimeout(resolve,1000));


timelog().then(()=>{
    console.log("api working....")
}).catch((error)=>{
    console.log("error")
})




