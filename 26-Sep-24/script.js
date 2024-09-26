// console.log("this keyword", this);

//! Way-5 : Creating object by using Constructor functions (this keyword)
//! Below function is converted to a class, So follow the conventions properly (Pascal case)

// function CreateObj(name, add, contact) {
//   this.name = name;
//   this.add = add;
//   this.contact = contact;
// }

// let obj = new CreateObj("Mahesh", "Kolhapur", 7030116520);
// console.log(obj);

//! Create function by using this keyword

let superhero = {
  name: "Spiderman",
  gf: "Merry",
  aunt: "May",
  uncle: "Ben",
};

// function myFunc() {
//   console.log(this);
// }
// myFunc(); // Window object

//! 1] call() method ---------->
//! It is used to points towards the specific object which will act as a current object
//! It will take arguments seperated by comma

// function myFunc1() {
//   console.log(this);
// }
// myFunc1.call(superhero); // superhero object (current object)

// function myFunc2(realName) {
//   console.log(this.name);
//   console.log(realName);
//   console.log(this.realName); // undefined
//   console.log(this);
//   this.realName = realName;
//   console.log(this);
// }
// myFunc2.call(superhero, "Peter Parker");
// console.log(superhero);

//! 2] apply() method ------->
//! It is used to points towards the specific object which will act as a current object
//! It will take arguments in a array format

// function myFunc(realName, add) {
//   console.log(realName);
//   console.log(add);
// }
// myFunc.apply(superhero, ["Peter Parker", "NewYork"]);

//! 3] bind() method ------->
//! It is used to points towards the specific object which will act as a current object
//! It will bind a function to specific object & return the reference. We need to store it in a variable & call it
//! It will take argument seperated by comma

function myFunc(realName, add) {
  console.log(realName);
  console.log(add);
}
let bindedFunc = myFunc.bind(superhero, "Peter Parker", "NewYork");
bindedFunc();
