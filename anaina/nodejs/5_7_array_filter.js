function isBigEnough(value) {
    return value >= 10;
  }
  
  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  console.log(filtered);


let array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(n) {
  for (let i = 2; n > i; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}
console.log(array.filter(isPrime));


