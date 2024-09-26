// console.log("Deep Copy");

// 2 Way of creating Deep copy --------------->

// let obj = {
//   name: "Tinku",
//   age: 22,
// };
// console.log("Obj before adding address: ", obj);

// let copy = Object.assign({}, obj); // Deep copy
// console.log("Copy before adding address: ", copy);

// copy.add = "Pune";
// console.log("Copy after adding address: ", copy);
// console.log("Obj after adding address: ", obj); // Original object will ba same as it is

// console.log("------------------------------------")

// this keyword ------------------------------->

// 1. Global : In Global scope this keyword will always points toward the window object.
// console.log(this);

// 2. Inside normal function : this keyword will always points towards the window object
// let func1 = function () {
//   console.log(this);
// };
// func1();

// 3. Inside Arrow function : this keyword will always points towards the window object
// let func2 = () => {
//   console.log(this);
// };
// func2();

// 4. Inside Object :
// a] Normal function : this keyword will points towards the current object
// b] arraow function : this keyword will always points towards the window object

// let obj = {
//   name: "Tinku",
//   age: 22,
//   add: "Pune",

//   func3: function () {
//     console.log(this);
//   },

//   func4: () => {
//     console.log(this);
//   },
// };
// obj.func3();
// obj.func4();

// 5. Nested arrow function : Arrow function is pointing towards the current object beacause of Lexical Scoping.

// let obj2 = {
//   name: "Tinku",
//   age: 22,
//   func3: function () {
//     console.log(this);
//     let a = 10;
//     console.log(a);

//     let nestedFunc = () => {
//       console.log(a);
//       console.log(this);
//     };
//     nestedFunc();
//   },
// };
// obj2.func3();

// Note : Closure will get a memory in Heap Area.
