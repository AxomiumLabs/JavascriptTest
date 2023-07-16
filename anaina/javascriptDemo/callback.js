// console.log("One")
// console.log("Two")
// console.log("Thee")
// console.log("Four")
// console.log("Five")
// //js is a single threaded oops language-interpreter language
// //callback function -passing a function as 

// const greet=(callback)=>{
//     console.log('callback 1')
//     callback()
// }

// const MycallBack=()=>{
//     console.log("called 1")
// };

// const MycallBack2=()=>{
//     console.log("called 2")
// };
// greet(MycallBack)


// setTimeout(()=>{
//     console.log("executed...")
// },5000)//after 5 sec callback executed



// //fruit shop

// const fruiShop=()=>{
//     setTimeout(()=>{

//     },)
    
// }

// console.log("order place for apple juice")
//     console.log("order receive")
//     console.log("fruits cutting")
//     console.log("grinding")
//     console.log("Serving")



    const test=(callback)=>{
        callback()
        console.log('callback 1')
        
    }
    const Mycallback=()=>{
        
        console.log('Mycallback 1')
        
    }
    test(Mycallback)

    