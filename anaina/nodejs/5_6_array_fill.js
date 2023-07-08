const array1 = [1, 2, 3, 4];

// Fill with 0 from 2nd index to 4-1 index
console.log(array1.fill(0, 2, 4));


// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Fill with 6
console.log(array1.fill(6));

console.log([1, 2, 3,4,5].fill(0, 2, 4));
console.log([1, 2, 3,4,5].fill(5, 1, 2)); 
console.log([1, 2, 3,4,5].fill(1, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3,4,5].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3,4,5].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3,4,5].fill(4, 3, 5)); 


let arr = Array(5).fill("girl", 0);
console.log(arr);