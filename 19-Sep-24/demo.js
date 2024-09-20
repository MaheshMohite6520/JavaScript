//! console.log("---------------------------Objects----------------------");

// Way-1 for creating an object (Object Literal Way) -------------->

// let car = {
//   color: "White",
//   price: 200000,
//   company: "TATA",
//   name: "Safari",
//   isPetrol: true,
//   owner: {
//     ownerName: "Tinku",
//     add: {
//       city: "Pune",
//       area: "Deccan",
//     },
//   },
// };

// console.log(car);

// Way-2 for creating an object (Using new keyword & Object class) -------------->

// let obj = new Object();
// console.log(obj);

// obj.name = "Rinku";
// obj.add = "Pune";
// console.log(obj);

// let obj1 = new Object({ name: "Mahesh" });
// console.log(obj1);

// Way-3 for creating an object (using classes in JS)------------------->

// class CreateObj {
//   constructor(name) {
//     console.log(name);
//     this.name = name;
//     console.log(name);
//   }
// }
// let obj1 = new CreateObj("Tinku");
// let obj2 = new CreateObj("Pinky");
// console.log(obj1);
// console.log(obj2);

class Obj2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(name + " " + age);
  }
}

let obj1 = new Obj2("Mahesh", 22);
let obj2 = new Obj2("Prasad", 27);
console.log(obj1);
console.log(obj2);

// Way-4 for creating an object (using factory function in JS)------------------->

// let createObj = (name, address) => {
//   let obj = {
//     name: name,
//     address: address,
//   };
//   return obj;
// };

// let student1 = createObj("Tinku", "Pune");
// let student2 = createObj("Rinku", "Mumbai");
// let student3 = createObj("Rishabh", "Delhi");
// console.log(student1, student2, student3);

// console.log(createObj("Rohit", "India"));

// <------------------------ CRUD Operation ------------------------>

// 1. Create object
// let obj = {
//   name: "Tinki",
// };
// console.log(obj);

// 2. Add properties to object
// obj.add = "Pune";
// console.log(obj);

// 3. Update object properties
// obj.name = "Tinku";
// obj.add = "Deccan, Pune";
// console.log(obj);

// 4. Delete properties of an Object by using "delete" operator
// delete obj.add;
// console.log(obj);

// delete obj;
// console.log(obj);
