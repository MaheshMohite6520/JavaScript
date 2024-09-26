//! immediate invoke function
//! immediate invoke function expression
//! ; is compulsory here

// (() => {
//   console.log("IIFE");
// })();

// ((a) => {
//   console.log("IIFE arrow function", a);
// })(95);

// (function (b) {
//   console.log("IIFE without expression", b);
// })(85);

// (function hello(c) {
//   console.log("IIFE with function keyword and function name", c);
// })(75);

// (function hello(s) {
//   console.log("IIFE with function keyword and function name", s);
// })(22);

// hello(34); // error

// console.log("----------------------");

// (
//   let myFunc = function(d){
//       console.log("iife as a expression",d);
//   }
// )(75); //! Error

// (() => {
//   let name = prompt("Enter Your Name");
//   console.log(`Hello ${name} Good Afternoon`);
// })();

// =========================================================================

// Higher Order Function and Callback Function

// let myDetails = (myName, myAge) => {
//   Higher Order Function
//   console.log(myName); //! print function as string
//   myName("Mahesh");
//   console.log(myAge);
//   myAge(23);
// };

// let naming = (nameVar) => {
//   callback function
//   console.log(`My name is ${nameVar}`);
// };

// console.log(naming);

// let age = (ageVar) => {
//   callback function
//   console.log(`My age is ${ageVar}`);
// };

// myDetails(naming, age);
// console.log(myDetails);
