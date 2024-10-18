//! getElementsByTagName() -------------->

// let input = document.getElementsByTagName("input");
// console.log(input);

// input[0].title = "Input-1";
// input[1].title = "Input-2";
// input[2].title = "Input-3";

//! We cannot use higner order function on input.

// for (let i = 0; i < input.length; i++) {
//   input[i].style.backgroundColor = "red";
//   input[i].style.margin = "10px";
//   input[i].style.padding = "10px";
// }

//! getElementsByClassName() ------------------>

// let userInput = document.getElementsByClassName("userInput");
// console.log(userInput); //! HTMLCollection(3) [input.userInput, input.userInput, input.userInput]

//! ClassName = (.)
//! ID = (#)

// let input = document.querySelector(".userInput");
// console.log(input);

// let input1 = document.querySelectorAll(".userInput");
// console.log(input1);

//! setAttribute() -------------->

// let myDiv = document.querySelector("div");
// console.log(myDiv);

// myDiv.setAttribute("class", "myDivClass");
// console.log(myDiv);

//! removeAttribute() -------------->

// myDiv.removeAttribute("class");
// console.log(myDiv);

//! Q. Make input feild disable by using setAttribute()

// let input = document.querySelector(".userInput");
// console.log(input);
// input.setAttribute("disabled", "");

//! createElement() ----------------->

let myDiv = document.createElement("div");
console.log(myDiv);

myDiv.setAttribute("id", "newDiv");
console.log(myDiv);

//! Import body in JS ----------------->

//! Way-1

// let body = document.querySelector("body");
// console.log(body);

//! Way-2

// let body = document.body;
// console.log(body);

//! Way-3

// console.log(document.body);

//! Way-4 : Destructuring

let { body } = document;
console.log(body);

//! Insert text ----------->

myDiv.textContent = "Hello from JS";
console.log(myDiv);

//! Add div to body

body.append(myDiv);
