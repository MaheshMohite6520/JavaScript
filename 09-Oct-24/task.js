//! ### Destructuring Tasks:

//! 1.	**Basic Array Destructuring**:
//    You have an array `const colors = [“red”, “green”, “blue”]`. Destructure this array to assign the first, second, and third values to separate variables, `firstColor`, `secondColor`, and `thirdColor`. Ensure that each variable holds the corresponding color.

// let colors = ["red", "green", "blue"];

// let [firstColor, secondColor, thirdColor] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);

//! 2.	**Skipping Elements During Destructuring**:
//    Given the array `const numbers = [1, 2, 3, 4, 5]`, use destructuring to assign the first and third elements to separate variables. Skip the second element without creating a variable for it.

// let numbers = [1, 2, 3, 4, 5];

// let [first, , third, ...remaining] = numbers;
// console.log(first);
// console.log(third);
// console.log(remaining);

//! .	**Destructuring a Nested Array**:
//    You have a nested array `const matrix = [[1, 2], [3, 4], [5, 6]]`. Destructure it to get the individual numbers from each sub-array. Assign each value (1, 2, 3, etc.) to its respective variable.

// let matrix = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// let [[a, b], [c, d], [e, f]] = matrix;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

//! 4.	**Destructuring an Object**:
//    Given the object `const user = { name: “Alice”, age: 30, location: “Wonderland” }`, destructure it to extract the `name`, `age`, and `location` properties into separate variables. Ensure each variable contains the correct value.

// let user = { name: "Alice", age: 30, loc: "Wonderland" };

// let { name, age, loc } = user;
// console.log(name);
// console.log(age);
// console.log(loc);

// console.log(location); // location is reserved word in JS

//! 5.	**Renaming During Object Destructuring**:
//    You have an object `const point = { x: 10, y: 20 }`. Destructure the object to rename `x` as `horizontal` and `y` as `vertical`. Store the values in these renamed variables.

// let point = { x: 10, y: 20 };

// let { x: horizontal, y: vertical } = point;

// console.log(horizontal);
// console.log(vertical);

//! 6.	**Providing Default Values**:
//    Given the object `const book = { title: “JavaScript Basics”, year: 2021 }`, destructure it to extract `title`, `year`, and a non-existent `author` property. Assign a default value of “Unknown Author” to `author`.

// let book = { title: "JavaScript Basics", year: 2021 };

// let { title, year, author = "Unknown Author" } = book;
// console.log(title);
// console.log(year);
// console.log(author);

//! 7.	**Destructuring Function Parameters**:
//    Write a function `getProfile({ name, age, country })` that takes an object as an argument. Destructure the object to extract `name`, `age`, and `country` and use them inside the function.

// function getProfile({ name, age, country }) {
//   console.log(name);
//   console.log(age);
//   console.log(country);
// }

// let obj = {
//   name: "Mahesh",
//   age: 22,
//   country: "INDIA",
// };

// getProfile(obj);

//! 8.	**Destructuring Nested Objects**:
//    Given the object `const person = { name: “Bob”, details: { age: 25, address: { city: “New York”, country: “USA” } } }`, destructure it to get the `name`, `age`, `city`, and `country` into separate variables.

// let person = {
//   name: "Bob",
//   details: { age: 25, address: { city: "New York", country: "USA" } },
// };

// let {
//   name,
//   details: {
//     age,
//     address: { city, country },
//   },
// } = person;

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(country);

//! 9.	**Rest Operator in Array Destructuring**:
//    You have an array `const letters = [“a”, “b”, “c”, “d”, “e”]`. Use the rest operator in destructuring to extract the first letter into a variable, and the remaining letters into another array.

// let letters = ["a", "b", "c", "d", "e"];

// let [first, ...remaining] = letters;
// console.log(first);
// console.log(remaining);

//! 10.	**Rest Operator in Object Destructuring**:
//     Given the object `const settings = { theme: “dark”, notifications: true, layout: “grid”, language: “en” }`, destructure it to extract the `theme` property and group the rest of the properties into a separate object.

// let settings = {
//   theme: "dark",
//   notifications: true,
//   layout: "grid",
//   language: "en",
// };

// let { theme, ...remaining } = settings;

// console.log(theme);
// console.log(remaining);

//! ### Spread Operator Tasks:

//! 11.	**Copying an Array**:
//     Given the array `const originalArray = [1, 2, 3]`, create a new array by copying `originalArray` using the spread operator. Modify the new array without affecting the original array.

// let originalArray = [1, 2, 3];

// let deepCopy = [...originalArray];
// deepCopy.push(4);

// console.log(originalArray);
// console.log(deepCopy);

//! 12.	**Merging Two Arrays**:
//     You have two arrays `const arr1 = [10, 20]` and `const arr2 = [30, 40]`. Merge these two arrays into one using the spread operator and store the result in a new variable.

// let arr1 = [10, 20];
// let arr2 = [30, 40];

// let mergerdArr = [...arr1, ...arr2];
// console.log(mergerdArr);

//! 13.	**Concatenating Arrays with Spread**:
//     Given two arrays `const start = [1, 2]` and `const end = [9, 10]`, use the spread operator to concatenate the `start` array at the beginning of the `end` array.

// let start = [1, 2];
// let end = [...start, 9, 10];

// console.log(end);

//! 14.	**Copying an Object Using Spread**:
//     You have an object `const car = { make: “Toyota”, model: “Corolla” }`. Use the spread operator to create a copy of this object. Modify the copy without affecting the original object.

// let car = { make: "Toyota", model: "Corolla" };

// let deepCopy = { ...car };
// deepCopy.make = "TATA";

// console.log(car);
// console.log(deepCopy);

//! 15.	**Merging Objects with Spread**:
//     Given two objects `const defaults = { volume: 50, brightness: 80 }` and `const userSettings = { volume: 30 }`, merge them into a new object. Ensure the `volume` from `userSettings` overwrites the one in `defaults`, while keeping the other properties from `defaults`.

// let defaults = { volume: 50, brightness: 80 };
// let userSettings = { volume: 30 };

// let obj = { ...defaults, ...userSettings };
// console.log(obj);

//! 16.	**Using Spread in Function Arguments**:
//     Write a function `sum(a, b, c)` that takes three numbers as arguments. Call this function with an array `[5, 10, 15]` using the spread operator to pass the values as individual arguments.

// function sum(a, b, c) {
//   return a + b + c;
// }

// let arr = [5, 10, 15];

// console.log(sum(...arr));

//! 17.	**Rest Operator in Function Parameters**:
//     Write a function `calculateTotal(…prices)` that accepts any number of price values as arguments. Inside the function, sum all the price values and return the total.

// function calculateTotal(...prices) {
//   return prices.reduce((acc, current) => acc + current, 0);
// }

// let prices1 = [100, 200, 300, 400, 500];
// let prices2 = [100, 200, 300, 400];
// let prices3 = [100, 200, 300];

// console.log(calculateTotal(...prices2));

//! 18.	**Combining Rest and Spread**:
//     You have a function `combineArrays(arr1, arr2)` that merges two arrays. Modify the function so that it can accept any number of arrays using the rest operator. Use the spread operator inside the function to merge the arrays.

// function combineArrays(arr1, arr2) {
//   let mergerdArr = [...arr1, ...arr2];
//   return mergerdArr;
// }

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];

// console.log(combineArrays(arr1, arr2));

//! 19.	**Array Destructuring with Spread**:
//     Given the array `const nums = [1, 2, 3, 4, 5]`, destructure it to extract the first number into one variable and the rest of the numbers into another array using the spread operator.

// let nums = [1, 2, 3, 4, 5];

// let [a, ...remaining] = nums;
// console.log(a);
// console.log(remaining);

//! 20.	**Rest and Spread in Object Destructuring**:
//     You have an object `const config = { host: “localhost”, port: 3000, user: “admin”, password: “1234” }`. Destructure this object to extract `host` and `port` into separate variables, while using the rest operator to group the remaining properties into another object. Use the spread operator to modify this new object by changing the `user` property.

// let config = {
//   host: "localhost",
//   port: 3000,
//   user: "admin",
//   password: "1234",
// };

// let { host, port, ...remaining } = config;

// remaining.password = 888;

// console.log(host);
// console.log(port);
// console.log(remaining);
