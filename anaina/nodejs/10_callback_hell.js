// // Callback hell, also known as the "pyramid of doom," 
// // refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used, 
// // leading to code that is difficult to read, understand, and maintain.


// function multiply(a, b, callback) {
//     const result = a * b;
//     callback(result);
//   }
  
//   function add(a, b, callback) {
//     const result = a + b;
//     callback(result);
//   }
  
//   function divide(a, b, callback) {
//     const result = a / b;
//     callback(result);
//   }
  
//   function subtract(a, b, callback) {
//     const result = a - b;
//     callback(result);
//   }
  
//   multiply(2, 3, function(result1) {
//     console.log('Multiplication result:', result1);
//     add(result1, 4, function(result2) {
//       console.log('Addition result:', result2);
//       divide(result2, 2, function(result3) {
//         console.log('Division result:', result3);
//         subtract(result3, 1, function(finalResult) {
//           console.log('Final result:', finalResult);
//           // ... more nested callbacks
//         });
//       });
//     });
//   });
  