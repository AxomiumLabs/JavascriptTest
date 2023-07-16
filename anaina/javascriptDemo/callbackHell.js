let stocks={
    fruits:["apple","mango","kiwi"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};


let order=(fruits_name,call_production) =>{
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruits_name]} was selected`)
        call_production();
    },2000)
    
};

let production=() =>{
    setTimeout(()=>{
        console.log("production has started");


        setTimeout(()=>{
            console.log("the fruit has been chopped");

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(()=>{
                    console.log(`${stocks.holder[0]} was selected`);

                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} was used`);

                        setTimeout(()=>{
                            console.log("icecream is served");
                        },2000);
                    },3000);
                },2000);

            },1000);

        },2000);
    },0);

};
order(0,production);