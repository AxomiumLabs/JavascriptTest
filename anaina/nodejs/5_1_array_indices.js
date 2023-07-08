// Array objects cannot use arbitrary strings as element indexes 
let shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);
console.log(shopping[0]);
console.log(shopping[2]);
console.log(shopping["2"] !== shopping["02"]);




let arr = [[2,3],[5,8],[1,1],[0,9],[5,7]];
console.log(arr[2][1])
console.log(arr[1][0]===arr[4][0]);