// ### Task 1: Print Each Element
// Create an array of your favorite foods and use the `forEach` method to print each food item to the console.

// ```javascript
// const foods = ["Pizza", "Burger", "Sushi", "Pasta", "Tacos"];
// ```
// **Expected Output:**
// ```
// Pizza
// Burger
// Sushi
// Pasta
// Tacos
// ```

// let favFoods = ["Pizza", "Burger", "Muttter Paneer", "Pasta", "Vadapav"];

// favFoods.forEach((food) => {
//   console.log(food);
// });

// ### Task 2: Square Each Number
// Create an array of numbers. Use the `forEach` method to square each number and print the result to the console.

// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// ```
// **Expected Output:**
// ```
// 1
// 4
// 9
// 16
// 25
// ```

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((n) => {
//   console.log(n * n);
// });

// ### Task 3: Concatenate Strings
// Create an array of strings. Use the `forEach` method to concatenate the string " is awesome!" to each element and print the result.

// ```javascript
// const hobbies = ["Reading", "Coding", "Hiking", "Gaming"];
// ```
// **Expected Output:**
// ```
// Reading is awesome!
// Coding is awesome!
// Hiking is awesome!
// Gaming is awesome!
// ```

// let hobbies = ["Reading", "Coding", "Hiking", "Gaming", "Playing Cricket"];

// hobbies.forEach((hobby) => {
//   console.log(`${hobby} is awesome!`);
// });

// ### Task 4: Sum of Array Elements
// Create an array of numbers. Use the `forEach` method to find the sum of all elements in the array and print the total.

// ```javascript
// const numbers = [10, 20, 30, 40, 50];
// ```
// **Expected Output:**
// ```
// Total Sum: 150
// ```

// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;

// numbers.forEach((num) => {
//   sum += num;
// });
// console.log(`Total Sum = ${sum}`);

// ### Task 5: Capitalize Each String
// Create an array of lowercase words. Use the `forEach` method to capitalize the first letter of each word and print the result.

// ```javascript
// const words = ["apple", "banana", "cherry", "date"];
// ```
// **Expected Output:**
// ```
// Apple
// Banana
// Cherry
// Date
// ```

// let words = ["apple", "banana", "cherry", "date"];

// words.forEach((word) => {
//   console.log(word.charAt(0).toUpperCase() + word.slice(1));
// });

// ### Task 6: Add Index to Each Element
// Create an array of random items. Use the `forEach` method to add the index position to each element (e.g., "Item0", "Item1", etc.) and print the result.

// ```javascript
// const items = ["Book", "Pen", "Laptop", "Phone"];
// ```
// **Expected Output:**
// ```
// Book0
// Pen1
// Laptop2
// Phone3
// ```

let items = ["Book", "Pen", "Laptop", "Phone"];

// items.forEach((item, index) => {
//   console.log(item.concat(index));
// });

// items.forEach((item, index) => {
//   console.log(item + index);
// });

// ### Task 7: Check Even or Odd
// Create an array of numbers. Use the `forEach` method to print whether each number is even or odd.

// ```javascript
// const numbers = [13, 22, 35, 40, 51];
// ```
// **Expected Output:**
// ```
// 13 is Odd
// 22 is Even
// 35 is Odd
// 40 is Even
// 51 is Odd
// ```

// let numbers = [13, 22, 35, 40, 51];

// numbers.forEach((num) => {
//   if (num % 2 == 0) {
//     console.log(`${num} is Even`);
//   } else {
//     console.log(`${num} is Odd`);
//   }
// });

// ### Task 8: Filter Out Short Names
// Create an array of names with varying lengths. Use the `forEach` method to print only the names that have more than 4 characters.

// ```javascript
// const names = ["John", "Amy", "Alexander", "Zoe", "Chris"];
// ```
// **Expected Output:**
// ```
// Alexander
// Chris
// ```

// let names = ["John", "Amy", "Alexander", "Zoe", "Chris"];

// names.forEach((name) => {
//   if (name.length > 4) {
//     console.log(name);
//   }
// });

// ### Task 9: Count Vowels
// Create an array of single letters. Use the `forEach` method to count the number of vowels and print the total.

// ```javascript
// const letters = ["a", "b", "e", "i", "o", "p", "u"];
// ```
// **Expected Output:**
// ```
// Number of vowels: 5
// ```

let letters = ["a", "b", "e", "i", "o", "p", "u"];
let ct = 0;

letters.forEach((val) => {
  if (
    (val == "a") |
    (val == "e") |
    (val == "i") |
    (val == "o") |
    (val == "u")
  ) {
    ct++;
  }
});

console.log(`Number of vowels = ${ct}`);
