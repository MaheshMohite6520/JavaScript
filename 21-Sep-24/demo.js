// console.log("Object");

// let obj = {
//   "user name": "Tinku",
//   add: "Pune",
//   age: 22,
//   gender: "Male",
//   alarm: () => {
//     console.log("Snooooooozzzzzzzzzzz........!");
//     return "Tap";
//   },
// };

// console.log(obj.add);
// console.log(obj.alarm);
// console.log(obj.alarm());

// obj.salary = 20000000;
// console.log(obj);

// delete obj.gender;
// console.log(obj);

// console.log(obj["user name"]);

//! console.log("---------------");

// let obj = new Object({ name: "Tinku" });
// console.log(obj);

// obj.sal = 50000;
// console.log(obj);

//! console.log("---------------");

// class CreateObj {
//   constructor(name) {
//     console.log(name);
//     this.name = name;
//   }
// }
// let obj1 = new CreateObj("Tinku");
// console.log(obj1);

//! console.log("---------------");

// let createObj = (name) => {
//   let a = 10;
//   console.log(name);
//   let userName = name;
//   console.log(userName);
//   let obj = {
//     userName: name,
//   };
//   return obj;
// };

// let student1 = createObj("Tinku");
// console.log(student1);

//! console.log("---------------");

// let createObj = (name, qual, yop, marks, email, contact) => {
//   let obj = {
//     name: name,
//     qual: qual,
//     yop: yop,
//     marks: marks,
//     email: email,
//     contact: contact,
//   };
//   return obj;
// };

//! ES-6 feature (when key and value are same we can only pass one)

// let createObj = (name, qual, yop, marks, email, contact) => {
//   let obj = {
//     name,
//     qual,
//     yop,
//     marks,
//     email,
//     contact,
//   };
//   return obj;
// };

// let student1 = createObj(
//   "Gaurav",
//   "B.Tech",
//   2024,
//   9.2,
//   "gauravkhalase@gmail.com",
//   76838472398
// );
// console.log(student1);

// let student2 = createObj(
//   "Ayush",
//   "B.Tech",
//   2024,
//   9.4,
//   "ayushmore@gmail.com",
//   76838474578
// );
// console.log(student2);

// let student3 = createObj(
//   "Tejas",
//   "B.Tech",
//   2024,
//   9.9,
//   "tejaskhairnar@gmail.com",
//   98038472398
// );
// console.log(student3);

// let student4 = createObj(
//   "Vishwajit",
//   "B.Tech",
//   2024,
//   9.5,
//   "vishwajitdhavan@gmail.com",
//   99888472398
// );
// console.log(student4);

//! console.log("------------------");

// let obj = {
//   hobbies: ["Gaming", "Chess", "Cricket"],
//   "user name": "Tinku",
//   add: {
//     area: "Karvenager",
//     houseNo: 52,
//     pincode: 411052,
//   },
//   age: 22,
//   gender: "Male",
//   alarm: () => {
//     console.log("Snooooooozzzzzzzzzzz........!");
//     return "Tap";
//   },
// };

//! Convert the object into an array

// let arr = Object.entries(obj);
// console.log(arr);

//! Convert the array into an object

// let obj1 = Object.fromEntries(arr);
// console.log(obj1);

// let arr = [10, 20, 30, 40]; //! Iterator value 10 is not an entry object at function

// let arr = [[10, 30], [20, "B"], [30, "num3"], [40]];

// let obj = Object.fromEntries(arr);
// console.log(obj);

//! console.log("-----------------------------");

// let parent = {
//   name: "Tinku",
// };

// let child1 = {
//   age: 22,
// };

// let child2 = {
//   gender: "Male",
// };

// let child3 = {
//   add: {
//     area: "Deccan",
//     pincode: 411052,
//   },
// };

// let child4 = {
//   hobbies: ["Cricket", "Chess"],
// };

// console.log(parent);

// Object.assign(parent, child1);
// console.log(parent);

// Object.assign(parent, child1, child2, child3, child4);
// console.log(parent);
