const arr1 = ['w','x', 'y', 'z','a','b'];

// Copy to index 0 the element at index 3
console.log(arr1.copyWithin(0, 3, 5));//5 is up to which elements will be copied.

// Copy to index 1 all elements from index 3 to the end
console.log(arr1.copyWithin(1, 3));
