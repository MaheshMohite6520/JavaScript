//! console.log("Hello from $ file");

//! Symbol ------------>

// let a = Symbol("Hello");
// let b = Symbol("Hello");

// let c = "Hiiii";
// let d = "Hiiii";

// console.log(a == b);
// console.log(c == d);

//! console.log("Hello       jkf");

//! 1. Function without expression

// first();
// function first() {
//   console.log("first function");
// }
// first();

//! 2. function with expression

// second(); //! error
// var second = function () {
//   console.log("function second");
// };
// second();

//! 3. Immediate invoke function (IIFE)

// (function iife() {
//   console.log("Immediate invoke function");
// })();

//! 4. Arrow function

// arr() // error
// let arr = () => {
//   console.log("from arrow function");
// };
// arr();

//! 5 & 6. Higher order function & callback function

// function cb() {
//   console.log("callback function");
// }

// function hof(cb) {
//   console.log("higher order function");
//   cb();
// }
// hof(cb);

//! 7. nested functions

// function outer() {
//   function inner() {
// console.log("inner function");
//     return "inner";
//   }
// console.log("outer function");
//   return inner;
// }
// outer()(); // JS currying
// console.log(outer()());
// outer()();

//! Hoisting --------------->

// console.log(a);
// var a = 10;
// console.log(a);

// console.log(b); //! error
// let b = 20;
// console.log(b);

// console.log(c);  //! error
// const c = 30;
// console.log(c);

// fun();
// function fun() {
//   console.log("from function");
// }
// fun();

//! Lexical scoping & closure ------------>

// function father() {
//   let bike = "Bullet"; // closure

//   function inner() {
//     console.log(bike);
//   }
//   return inner;
// }

// father()();
