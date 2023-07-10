// a new array iterator object that iterates the value of each item

const array1 = ['a', 'b', 'c'];

const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}


const arr = ["a", "b", "c", "d", "e"];
const iterator2 = arr.values();

for (const letter of iterator2) {
  console.log(letter);
}