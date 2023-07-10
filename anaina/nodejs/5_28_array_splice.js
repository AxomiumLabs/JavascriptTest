const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');

console.log(months);


months.splice(4, 1, 'May'); //splice(start, deleteCount, item0)

console.log(months);

months.splice(2, 2, 'DEC');

console.log(months);

months.splice(2, 0, 'march'); 
console.log(months);


