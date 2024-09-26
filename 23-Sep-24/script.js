// console.log("Object");

//! Combine 2 objects without affecting original objects --------------->

// let personal = {
//   name: "Tinku",
//   age: 22,
//   add: "Pune",
//   mob: 786384973,
// };

// let office = {
//   contact: 97329873,
// };

// let obj3 = Object.assign({}, personal, office);
// console.log(personal);
// console.log(office);
// console.log(obj3);

//! console.log("--------------------------------");

//! Shallow Copy : The changes made in child object will affect the parent object

// let person = {
//   name: "Tinku",
//   age: 25,
//   personalContact: 993487233,
// };
// console.log(person);

// let copy = person;
// console.log(copy);

// copy.add = "Pune";
// console.log(copy);
// console.log(person);

//! Way-1 : Creating Deep copy by using JSON Object ------------>

//! Deep object : The changes made in child(copy) object will not affect the parent object

// let person = {
//   name: "Tinku",
//   age: 25,
//   personalContact: 993487233,
// };
// console.log(person);

// let jsonCopy = JSON.stringify(person); //! Convert to JSON object
// console.log(jsonCopy);

// let newJsObj = JSON.parse(jsonCopy); //! Convert to normal object from JSON object & Deep Copy created (new object created)
// console.log(newJsObj);

// newJsObj.add = "Pune";
// console.log(newJsObj);
// console.log(person);
