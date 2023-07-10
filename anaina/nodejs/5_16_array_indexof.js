const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));

console.log(beasts.indexOf('bison', 2)); //indexOf(searchElement, fromIndex)

console.log(beasts.indexOf('giraffe'));


const array = [2, 9, 9];
console.log(array.indexOf(2)); 
console.log(array.indexOf(7)); // returns -1 when searchElement is NaN.
console.log(array.indexOf(9, 2)); 
console.log(array.indexOf(2, -1)); 
console.log(array.indexOf(2, -3)); 