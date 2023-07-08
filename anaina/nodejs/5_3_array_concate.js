// used to merge two or more arrays
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arr3 = arr1.concat(arr2);//here arr2 merge after arr1

console.log(arr3);

arr4=['x','y','z'];
console.log(arr1.concat(arr4));


//IMPORTANT:  
// const num1 = [[1]];
// const num2 = [2, [3]];
// const numbers = num1.concat(num2);
// console.log(numbers);
// num1[0].push(4);
// console.log(num1)
// console.log(numbers);


//concat nested array
let no1 = [[1]];
let no2 = [2, [3]];
let nos = no1.concat(no2);
console.log(nos);
no1[0].push(4);//This modification will affect both no1 and nos
console.log(no1)
console.log(nos);


let a=[1,2]
let a1=[4,5]
a=a1
console.log(a)
a1=[5,6]
console.log(a)

console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5]))

