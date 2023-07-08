// returns the first element in the provided array

let array1 = [5, 12, 8, 130, 44];
let found = array1.find(element => element > 10);
console.log(found);

function check(val){
    return val>40;
}
console.log(array1.find(check))

	
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 10 },
    { name: "cherries", quantity: 5 },
  ];

  function checkQuanti(fruit) {
    return fruit.quantity >3;
  }
  
  console.log(inventory.find(checkQuanti));