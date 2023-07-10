const numbers = [125, 50, 25];

numReduce = numbers.reduce(myFunc);

console.log(numReduce)
function myFunc(total, num) {
    
// console.log(total)
  return total - num;
}


const getMax = (a, b) => Math.max(a, b);
console.log([1, 75,128,100].reduce(getMax, 50));

// reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) 

console.log([0, 1, 2, 3, 4].reduceRight(
    (accumulator, currentValue, index, array) => accumulator + currentValue,
  ));