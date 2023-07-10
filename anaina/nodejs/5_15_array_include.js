const array1 = [1, 2, 3];

console.log(array1.includes(2));

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));

console.log(pets.includes('at'));



console.log([1, 2, 3].includes(2,0)); 
console.log([1, 2, 3].includes(4));
console.log([1, 2, 3].includes(3, 3)); 
console.log([1, 2, 3].includes(3, -1))
console.log([1, 2, 3].includes(2, -2))
console.log([1, 2, 3].includes(5, -4))