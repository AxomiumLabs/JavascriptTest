// index of the first element in an array that satisfies the provided testing function
let array1 = [5,14,35,67,89];

let isLargeNumber = (element) => element > 20;

console.log(array1.findIndex(isLargeNumber));


const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 10 },
    { name: "cherries", quantity: 5 },
  ];

  function checkQuanti(fruit) {
    return fruit.quantity >3;
  }
  
  console.log(inventory.findIndex(checkQuanti));
