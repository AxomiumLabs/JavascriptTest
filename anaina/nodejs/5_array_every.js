// tests whether all elements in the array are less than 40
function isBelowThreshold(currentValue) {
    return currentValue < 40;
  }
// let isBelowThreshold = (currentValue) => currentValue < 40;
let array1 = [1, 30, 59, 29, 10, 13];

console.log(array1.every(isBelowThreshold));//return false because here 59>40

console.log([12, 5, 8, 130, 44].every(isBelowThreshold)); // false
console.log([12, 4, 18, 13, 24].every(isBelowThreshold));



// const isSubset = (array1, array2) =>
//   array2.every((element) => array1.includes(element));

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false


console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true