// console.log("Hello ");

// let value = 1000;

// let obj = {
//   key: value,
// };
// console.log(obj);
// console.log(obj.key);
// console.log(obj.value);

// // Accessing values inside object
// console.log(obj["key"]);

// obj.keyyy = 100;
// console.log(obj);

// obj.key = 10;
// console.log(obj);

// delete obj.keyyy;
// console.log(obj);

// delete obj.key;
// console.log(obj);

// console.log("----------------------------------------------");

// let obj = {
//   name: "Ram",
//   add: "Pune",
//   mob: 7837463798,
//   // inside arrow function wr cannot use this keyword cause it will point towards window object
//   func: () => {
//     console.log("func executed");
//     console.log(obj.name);
//   },
//   func2: function () {
//     console.log(
//       `My name is ${this.name}, I am from ${this.add} & my mobile no is ${this.mob}`
//     );
//   },
// };

// console.log(obj.name);
// console.log(obj.salary);

// console.log("add" in obj);
// console.log("salary" in obj);

// obj.func();
// obj.func2();

// console.log("----------------------------------------------");

let arr = [10, 20, 30, 40];
// console.log(arr);

// arr.push(50);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(100);
// console.log(arr);

// arr.shift();
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// let i = 0;
// do {
//   console.log(arr[i]);
//   i++;
// } while (i < arr.length);

// forEach() ------>

// // callback function
// let myFunc = (val) => {
//   console.log(val);
// };

// // Higher order function
// arr.forEach(myFunc);

// arr.forEach((val) => {
//   console.log(val);
// });

// It accepts 3 arguments (value, index, whole array)

arr.forEach((val, index, ref) => {
  console.log("Value: " + val);
  console.log("Index: " + index);
  console.log("Array: " + ref);
  console.log("--------------");
});

console.log("----------------------------------------------");

// Implicit return
// let a = (val) => "hello";
// console.log(a);
// console.log(a());
