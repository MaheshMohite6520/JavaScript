//! <---------------------- Destructuring ------------------------>

//!1]  Object Destructuring :

//! It doesn't follow indexes & it contains keys

// let backpack = {
//   item1: "Water Bottle",
//   item2: "Camera",
//   item3: "Tiffin",
//   item4: "Charger",
//   item5: "Pant",
//   item6: "Torch",
// };

// let { item2, item4 } = backpack;
// console.log(item2);
// console.log(item4);

// console.log(window);

//! 2] Array Destructuring :

//! It follows indexes & we have to create keys(variables)

// let arr = ["Water Bottle", "Camera", "Tiffin", "Charger", "Pant", "Torch"];

// let [a, b, c, d, e, f, g] = arr;
// console.log(a);
// console.log(f);
// console.log(g); // undefined

// let [m] = arr;
// console.log(m);

//! rest : (...)

//! It is a parameter.
//! It will return an array.
//! It is uesd to store the remaining elements in one variable.

// let arr = ["Water Bottle", "Camera", "Tiffin", "Charger", "Pant", "Torch"];
// let [a, b, c, ...d] = arr;
// console.log(d); // Remaining

//! spread :

//! It is an operator.
//! It will return an String.
//! It is uesd to spread out the values.

// let arr = ["Water Bottle", "Camera", "Tiffin", "Charger", "Pant", "Torch"];

// console.log(...arr);
// console.log(arr);

// let func = (val) => {
//   console.log(val);
// };
// func(arr);

// let func2 = (val1, val2, val3) => {
//   console.log(val3); // Water Bottle
// };
// func2(...arr);
// func(arr[0], arr[1], arr[2]);
// func("Water Bottle", "Camera", "Tiffin", "Charger", "Pant", "Torch");

// console.log({ ...arr });

//! String --->

// let name = "Mahesh";

// let [a, ...b] = name;
// console.log(b);

// console.log(...name);
// console.log({ ...name });
// console.log([...name]);

//! Deep Copy by using spread operator ------------->

// let backpack = {
//   item1: "Water Bottle",
//   item2: "Camera",
//   item3: "Tiffin",
//   item4: "Charger",
//   item5: "Pant",
//   item6: "Torch",
// };

// console.log(backpack);

// let deepCopy = { ...backpack };
// console.log(deepCopy);

// deepCopy.name = "Tinku";
// console.log(backpack);
// console.log(deepCopy);

// // console.log(...backpack); // Spread syntax requires ...iterable[Symbol.iterator] to be a function
// console.log({ ...backpack });
