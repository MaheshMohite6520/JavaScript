//! console.log("---------------------------Arrays----------------------");

// 1. Declaring an array ---->

// let arr = [
//   "Mobile",
//   "Charger",
//   "Laptop",
//   "Headhone",
//   20000,
//   null,
//   undefined,
//   () => {
//     console.log("Function-1");
//   },
//   true,
//   100n,
//   { name: "Tinku" },
//   ["Item1", "Item2"],
//   (() => {
//     return "function 2";
//   })(),
// ];
// console.log(arr);
// console.log(arr.length);
// console.log("First element: " + arr[0]);
// console.log(`Last Element: ${arr[arr.length - 1]}`);

// CRUD Operations with arrays ------------------->

// 1. Create an array
// let arr = [10, 20, 30];

// 2. Read an array
// console.log(arr);

// 3. Add an element into an array (last index)
// arr.push(40);
// console.log(arr);

// 4. Delete an element from array (last index)
// arr.pop();
// console.log(arr);

// 5. Add an element into an array (first index)
// arr.unshift(50);
// console.log(arr);

// 6. Delete an element from array (first index)
// arr.shift();
// console.log(arr);

// Array Methods ------------>

let arr = [10, 20, 30, 40];

console.log(arr.indexOf(10));
console.log(arr.indexOf(100));
console.log(arr.at(0));
console.log(arr.at(10));
console.log(arr.reverse());
console.log(arr.splice(1, 3));
console.log(arr.slice(0, 3));
