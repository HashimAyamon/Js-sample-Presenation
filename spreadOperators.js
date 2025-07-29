
// Copy an Array
const numbers = [1, 2, 3];
const copyNumbers = [...numbers];

console.log(copyNumbers); // [1, 2, 3]


// Merge Arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4]


// copy object 
const person = { name: "Alice", age: 25 };
const copiedPerson = { ...person };


console.log(copiedPerson); // { name: "Alice", age: 25 }
