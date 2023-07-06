let api=[1,2,3,4,5];
// function testApi(){
//     try{

//     if(api.lenght>0){
//         console.log("output is diplayed");
//     }
//     catch(error){
//         console.log("output is not displayed")
//     }
// }
//method 1
// function errorHandling(){
//     try{
//         testApi();
//         console.log("api is working fine");
//     }
//     catch(error){
//         console.log("error");

//     }
// }
// errorHandling();


//method 2


let timelog=new Promise((resolve=>setTimeout(resolve,1000));
timelog().then(())
testApi().then(()=>{
    console.log("api is working fine");
}).catch((error)=>{
    console.log("error");
})