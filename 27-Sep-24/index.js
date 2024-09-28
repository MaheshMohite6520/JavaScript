//! console.log("Arrays");

//! Characteristics -------->
//! 1] Dynamic type
//! 2] Accepts Heterogeneous data (all data-type)
//! 3] No need to provide size it will manage internally

//! Declaring an array using Array literal way -------->

// let arr = [10, 20, 30, 40];
// console.log(arr);

//! Declaring an array using Array class & new keyword -------->

// let arr2 = new Array(50, 60, 70);
// console.log(arr2);

// console.log("---------------------------");

// let last = "lastItem";

// let arr = [
//   10,
//   "hello",
//   true,
//   null,
//   undefined,
//   () => {
//     console.log("function inside the array");
//   },
//   { name: "Tinku" },
//   [20, 30, [40, [50, [60, [`${last}`]]]]],
// ];

// console.log(arr);
// console.log(arr[1]);

//! calling function inside the array ------------->

// console.log(arr[5]);
// console.log(arr[5]());
// arr[5]();
// let func = arr[5];
// func();

//! Accesing object property inside array ---------->

// console.log(arr[6]);
// console.log(arr[6].name);

//! Accessing array inside an array --------->

// console.log(arr[7]);
// console.log(arr[7][2]);
// console.log(arr[7][2][1]);
// console.log(arr[7][2][1][1]);
// console.log(arr[7][2][1][1][1]);
// console.log(arr[7][2][1][1][1][0]);
// console.log(arr[7][2][1][1][1][1]); //! undefined

//! Array methods ----------->

// let arr = [10, 20, 30, 40];
// console.log(arr);

//! 1] add element at last index

// arr.push(50);
// console.log(arr);

//! 2] Remove element from last index

// arr.pop();
// console.log(arr);

//! 3] Add element at first index

// arr.unshift(0);
// console.log(arr);

//! 4] Remove element from first index

// arr.shift();
// console.log(arr);

//! 5] Accessing index of an by using indexOf() method

// console.log(arr.indexOf(20));

// let index = arr.indexOf(20);
// console.log(index);

//! 6] Accessing element by using at() method

// console.log(arr.at(1));

// let element = arr.at(1);
// console.log(element);

//! 7] Check the array contains the element or not by using includes() method

// console.log(arr.includes(20));

// let bool = arr.includes(20);
// console.log(bool);

//! 8] slice() : It is used to copy the elements from an array & it returns an array
//! It will not affect original array
//! It accepts 2 arguments (start index, last index)
//! last index element is not included

// let arr = [10, 20, 30, 40];
// console.log(arr);

// let newArr = arr.slice(2, 3);
// console.log(newArr);

// console.log(arr);

//! 9] splice() : It is used to copy the elements from an array & it returns an array
//! It will affect original array
//! It accepts 3 arguments (start index, length of how many elements you want to delete, elements that you want to add)
//! last index element is not included

// let arr = [10, 20, 30, 40];
// console.log(arr);

// let newArr = arr.splice(0, 1);
// console.log(newArr);

// console.log(arr);

let arr = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(arr);

let newArr = arr.splice(0, 0, 100);
console.log(newArr);

console.log(arr);
