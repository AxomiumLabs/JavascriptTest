// a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
let arr = [1, 2, 3, 4];

console.log(arr.flatMap((x) => [x, x * 2]));
// is equivalent to
// const n = arr.length;
// let acc = new Array(n * 2);
// for (let i = 0; i < n; i++) {
//   const x = arr[i];
//   acc[i * 2] = x;
//   acc[i * 2 + 1] = x * 2;
// }