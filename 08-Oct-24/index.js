//! <---------------------- Prototype -------------------------->

// let arr = [10, 20];
// console.log(arr);

// let obj = {
//   name: "Mahesh",
//   age: 22,
// };
// console.log(obj);

// let num = 10;
// console.log(num.__proto__);

// let bool = true;
// console.log(bool.__proto__);

// let str = "Hello World";
// console.log(str.__proto__);

// let a = undefined;
// console.log(a);
// // console.log(a.__proto__);  // not applicable

// let b = null;
// console.log(b);
// // console.log(b.__proto__); // not applicable

// let num2 = 100n;
// console.log(num2.__proto__);

//! Inheritance in JavaScript ------------------------>

// Child
// let obj1 = {
//   name: "Tinku",
// };

// Parent
// let obj2 = {
//   surname: "Pandey",
// };

// console.log(obj1.__proto__);

// obj1.__proto__ = obj2; // We are assigning obj2 as prototype of obj1

// console.log(obj1.__proto__); // obj2

// console.log(obj1.surname); // We are able to access obj2 properties in obj1

//! <---------------------- Destructuring ----------------------->

//! It is the process of extracting out the values from an array or object.

// let backpack = {
//   item1: "Water Bottle",
//   item2: "Tiffin",
//   item3: "Camera",
//   item4: "Torch",
//   item5: "Pant",
//   item6: "Charger",
// };
// console.log(backpack.item2);
// console.log(backpack.item4);
// console.log(backpack.item6);

// console.log(item2); // index.js:68 Uncaught ReferenceError: Cannot access 'item2' before initialization

// console.log("------------------------");

// let { item4, item2, item6 } = backpack;
// console.log(item2);
// console.log(item4);
// console.log(item6);

//! Example ---------->

console.log(window);

console.log(window.document);
console.log(document);
