// a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.

// const arr1 = [1, 2, 3];

// function isTwo(val){
//      return val === 2 ? [5, 2] : 1
// }

// const result = arr1.flatMap(isTwo)
    
// console.log(result);
// //map

// const result2 = arr1.map(isTwo)
    
// console.log(result2);



console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2]));
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2]));



console.log([1, 2, 4, 5].map((x) => [x, x * 2]));
console.log([1, 2, 3, 4].map((x) => [x * 2]));