// async function order(){
//     try{
//         await abc;
        
//     }catch(error){
//         console.log("abc doesnt exiist");
//     }finally{
//         console.log("completed..!")
//     }
// }

// order();

// function toppings_choice (){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
  
//         resolve( console.log("which topping ?") )
  
//       },3000)
//     })
//   }

//   async function kitchen(){

//     console.log("A")
//     console.log("B")
//     console.log("C")
    
//     await toppings_choice()
    
//     console.log("D")
//     console.log("E")
  
//   }
  
  
//   kitchen();

let is_shop_open = true;

function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject("Shop not opened")
      }
    });
}
async function kitchen(){
    try{
	await time(2000)
	console.log(`mango was selected`)

	await time(0)
	console.log("production has started")

	await time(2000)
	console.log("fruit has been chopped")

	await time(1000)
	console.log(`mango and kiwi added`)

	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on kiwi`)

	await time(3000)
	console.log(`mango as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")
    }

    catch(error){
	 console.log("customer left",error)
    }
}
 
kitchen();