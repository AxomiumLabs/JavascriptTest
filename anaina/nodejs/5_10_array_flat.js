// creates a new array with all sub-array elements concatenated
let arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());


// const arr2 = [0, 1, 2, [[[3, 4]]]];
let arr2=[[1,2,3],[4,3,7],[2,3,[2,9]]];
console.log(arr2.flat());

let arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));
