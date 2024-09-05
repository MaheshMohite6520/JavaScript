// immediate invoke function
// immediate invoke function expression
// ; is compulsory here

(() => {
  console.log("iife");
})();

((a) => {
  console.log("iife arrow function", a);
})(95);

(function (b) {
  console.log("iife without expression", b);
})(85);

(function hello(c) {
  console.log("iife with function keyword and function name", c);
})(75);

(function hello(s) {
  console.log("iife with function keyword and function name", s);
})(22);

// hello(34); // error

// Error
//(
//   var myFunc = function(d){
//       console.log("iife as a expression",d);
//   }
// )(75);

(() => {
  let name = prompt("Enter Your Name");
  console.log(`Hello ${name} Good Afternoon`);
})();

// =========================================================================

// Higher Order Function and Callback Function

let myDetails = (myName, myAge) => {
  //Higher Order Function
  // console.log(myName); //print function as string
  myName("Mahesh");
  // console.log(myAge);
  myAge(23);
};

let naming = (nameVar) => {
  // callback function
  console.log(`My name is ${nameVar}`);
};

console.log(naming);

let age = (ageVar) => {
  // callback function
  console.log(`My age is ${ageVar}`);
};

myDetails(naming, age);
// console.log(myDetails);
