//! Q 1.	Function Basics with Callback:Create a function called greetWithCallback that accepts a callback function as an argument. Inside this function, the callback should print “Hello World” to the console. Test it by passing a callback that does this job.

// let greetWithCallback = (cb) => {
//   cb();
// };
// let cb = () => {
//   console.log("Hello World!");
// };
// greetWithCallback(cb);

//! Q 2. Function with Parameters and Callback:Write a function named addTwoNumbersWithCallback that accepts two numbers and a callback function. Inside addTwoNumbersWithCallback, call the callback with the sum of the two numbers as its argument. The callback should log this sum to the console.

// let addTwoNumbersWithCallback = (num1, num2, cb) => {
//   cb(num1, num2);
// };
// let cb = (num1, num2) => {
//   console.log(`Sum of ${num1} & ${num2} = ${num1 + num2}`);
// };
// addTwoNumbersWithCallback(10, 20, cb);

//! Q 3. Function with Conditional Statement and Callback:Create a function called checkEvenOddWithCallback that accepts a number and a callback function. Use an if-else statement to check if the number is even or odd. Then, call the callback function with a message (“Even” or “Odd”) depending on the result.

// let checkEvenOddWithCallback = (num, cb) => {
//   if (num % 2 == 0) {
//     cb("Even");
//   } else {
//     cb("Odd");
//   }
// };
// let cb = (message) => {
//   console.log(message);
// };
// checkEvenOddWithCallback(11, cb);

//! Q 4. Loop Basics with Higher-Order Function:Write a higher-order function called loopAndExecute that accepts a loop limit and a callback function. Inside the function, use a for loop to iterate from 1 to the loop limit, and for each iteration, call the callback function with the current loop index.

// let loopAndExecute = (limit, cb) => {
//   for (let i = 1; i <= limit; i++) {
//     cb(i);
//   }
// };
// let cb = (i) => {
//   console.log(i);
// };
// loopAndExecute(10, cb);

//! Q 5. While Loop with Callback:Create a function named whileLoopWithCallback that accepts a callback and a limit. Use a while loop that runs as long as a counter is less than the limit, and for each iteration, call the callback with the current counter value.

// let whileLoopWithCallback = (cb, limit) => {
//   let i = 1;
//   while (i < limit) {
//     cb(i);
//     i++;
//   }
// };
// let cb = (i) => {
//   console.log(i);
//   console.log("cb called");
// };
// whileLoopWithCallback(cb, 20);

//! Q 6. Do-While Loop with Callback:Write a function called doWhileLoopWithCallback that accepts a callback and a limit. Use a do-while loop to print numbers from 1 to the limit. In each iteration, call the callback function with the current loop value.

// let doWhileLoopWithCallback = (cb, limit) => {
//   let i = 1;
//   do {
//     cb(i);
//     i++;
//   } while (i <= limit);
// };
// let cb = (i) => {
//   console.log(i);
//   console.log("cb called");
// };
// doWhileLoopWithCallback(cb, 10);

//! Q 7. Nested Loops with Callback:Create a higher-order function called nestedLoopCallback that accepts two limits and a callback. Inside this function, use two nested for loops to iterate over the numbers from 1 to each limit. For each pair of numbers from the loops, call the callback with both numbers.

// let nestedLoopCallback = (limit1, limit2, cb) => {
//   for (let i = 1; i <= limit1; i++) {
//     for (let j = 1; j <= limit2; j++) {
//       cb(i, j);
//     }
//   }
// };
// let cb = (num1, num2) => {
//   console.log(num1 + " " + num2);
// };
// nestedLoopCallback(10, 20, cb);

//! Q 8. Conditional Statement with Higher-Order Function:Write a higher-order function called checkNumberWithCallback that accepts a number and two callback functions. One callback should handle positive numbers, the other should handle negative numbers. Inside the function, use an if-else statement to check if the number is positive or negative, and call the appropriate callback.

// let checkNumberWithCallback = (num, cb1, cb2) => {
//   if (num > 0) {
//     cb1("Positive Number");
//   } else {
//     cb2("Negative Number");
//   }
// };
// let positiveCallback = (message) => {
//   console.log(message);
// };
// let negativeCallback = (message) => {
//   console.log(message);
// };
// checkNumberWithCallback(-12, positiveCallback, negativeCallback);

//! Q 9. Switch Case with Callback:Implement a function named getDayOfWeekWithCallback that accepts a number from 1 to 7 and a callback function. Use a switch statement to determine the day of the week, and call the callback with the corresponding day (e.g., “Monday”, “Tuesday”).

// let getDayOfWeekWithCallback = (num, cb) => {
//   switch (num) {
//     case 1:
//       cb("Monday");
//       break;
//     case 2:
//       cb("Tuesday");
//       break;
//     case 3:
//       cb("Wednesday");
//       break;
//     case 4:
//       cb("Thursday");
//       break;
//     case 5:
//       cb("Friday");
//       break;
//     case 6:
//       cb("Saturday");
//       break;
//     case 7:
//       cb("Sunday");
//       break;
//     default:
//       cb("Enter number from 1 to 7");
//   }
// };
// let cb = (message) => {
//   console.log(message);
// };
// getDayOfWeekWithCallback(3, cb);

//! Q. 10. Function with Return and Callback:Create a higher-order function called `multiplyWithCallback` that accepts two numbers and a callback. Multiply the two numbers inside the function, then call the callback with the result. The callback should print the result to the console.

// let multiplyWithCallback = (num1, num2, cb) => {
//   let result = num1 * num2;
//   cb(result);
// };
// let cb = (result) => {
//   console.log(result);
// };
// multiplyWithCallback(5, 5, cb);

//! Q. 11. Ternary Operator with Callback:Write a function named `checkEligibilityWithCallback` that accepts a person’s age and a callback function. Use a ternary operator to check if the person is eligible to vote (age ≥ 18). Call the callback with the message “Eligible” or “Not Eligible” based on the result.

// let checkEligibilityWithCallback = (age, cb) => {
//   let result = age >= 18 ? "Eligible" : "Not Eligble";
//   cb(result);
// };
// let cb = (result) => {
//   console.log(result);
// };
// checkEligibilityWithCallback(22, cb);

//! Q 12. Nested If-Else with Higher-Order Function:Create a function named `checkDivisibilityWithCallback` that accepts a number and two callback functions. Use `if-else` blocks to check if the number is divisible by both 3 and 5, only by 3, or only by 5. Call the appropriate callback based on the outcome.

// let checkDivisibilityWithCallback = (num, cb1, cb2, cb3) => {
//   if (num % 3 == 0 && num % 5 == 0) {
//     cb1(`${num} is divisible by both 3 & 5`);
//   } else if (num % 3 == 0) {
//     cb2(`${num} is only divisible by 3`);
//   } else if (num % 5 == 0) {
//     cb3(`${num} is only divisible by 5`);
//   } else {
//     console.log(`${num} is not divisible 3 & 5`);
//   }
// };
// let divisibleByBoth = (message) => {
//   console.log(message);
// };
// let divisibleByThree = (message) => {
//   console.log(message);
// };
// let divisibleByFive = (message) => {
//   console.log(message);
// };
// checkDivisibilityWithCallback(
//   18,
//   divisibleByBoth,
//   divisibleByThree,
//   divisibleByFive
// );

//! 13. Loop with Break and Callback:Write a higher-order function called `forLoopWithBreakCallback` that accepts a loop limit and two callback functions. Use a `for` loop to iterate from 1 to the limit. If the loop reaches the number 5, call the second callback to break the loop, otherwise call the first callback for each iteration.

// let forLoopWithBreakCallback = (limit, cb1, cb2) => {
//   for (let i = 1; i < limit; i++) {
//     if (i == 5) {
//       cb2(i);
//       break;
//     } else {
//       cb1(i);
//     }
//   }
// };
// let cb1 = (i) => {
//   console.log(i);
//   console.log("cb1 called");
// };
// let cb2 = (i) => {
//   console.log(i);
//   console.log("cb2 called");
// };
// forLoopWithBreakCallback(20, cb1, cb2);

//! Q 14. Loop with Continue and Callback:Write a function named `forLoopWithContinueCallback` that accepts a loop limit and two callbacks. Use a `for` loop to print numbers from 1 to the limit, but skip the number 5 using the `continue` statement. Call the first callback for each number except 5, and the second callback when the number is 5.

// let forLoopWithContinueCallback = (limit, cb1, cb2) => {
//   for (let i = 1; i <= limit; i++) {
//     if (i == 5) {
//       cb2(i);
//       continue;
//     }
//     cb1(i);
//   }
// };
// let cb1 = (i) => {
//   console.log(`${i} cb1 called`);
// };
// let cb2 = (i) => {
//   console.log(`${i} cb2 called`);
// };
// forLoopWithContinueCallback(10, cb1, cb2);

//! Q 15. Function without Return but with Callback:Create a function called `printUpperCaseWithCallback` that accepts a string and a callback function. Inside the function, manually convert the string to uppercase (without string methods), and pass the result to the callback to print it.

// let printUpperCaseWithCallback = (str, cb) => {
//   let temp = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
//       temp += String.fromCharCode(str.charCodeAt(i) - 32);
//     } else {
//       temp += str[i];
//     }
//   }
//   cb(temp);
// };
// let cb = (str) => {
//   console.log(str);
// };
// printUpperCaseWithCallback("Hello", cb);

//! Q 16. Recursive Function with Callback:Write a recursive function called `recursivePrintWithCallback` that prints numbers from 1 to 5, and for each number, it calls a callback function. Make sure to stop the recursion when you reach 5 by adding a base case.

// let recursivePrintWithCallback = (num, cb) => {
//   if (num > 5) {
//     return;
//   }
//   cb(num);
//   recursivePrintWithCallback(num + 1, cb);
// };
// let cb = (num) => {
//   console.log(num);
// };
// recursivePrintWithCallback(1, cb);

//! Q 17. Conditional with Loops and Callback:Create a function called `fizzPrintWithCallback` that accepts a number and a callback. Print numbers from 1 up to the given number, but for multiples of 3, pass the string “Fizz” to the callback instead of the number.

// let fizzPrintWithCallback = (num, cb) => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 == 0) {
//       cb("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// let cb = (message) => {
//   console.log(message);
// };
// fizzPrintWithCallback(30, cb);

//! Q 18. While with Break and Callback:Write a function called `whileLoopWithBreakCallback` that accepts a limit and two callback functions. Use a `while` loop to print numbers from 1 to the limit, but stop the loop at number 7 by calling the second callback. Call the first callback for each other number.

// let whileLoopWithBreakCallback = (limit, cb1, cb2) => {
//   let i = 1;
//   while (i <= limit) {
//     if (i == 7) {
//       cb2(i);
//       break;
//     }
//     cb1(i);
//     i++;
//   }
// };
// let cb1 = (i) => {
//   console.log(`${i} cb1 called`);
// };
// let cb2 = (i) => {
//   console.log(`${i} cb2 called`);
// };
// whileLoopWithBreakCallback(20, cb1, cb2);

//! Q 19. Function with Default Parameters and Callback:Create a higher-order function called `multiplyWithDefaultAndCallback` that accepts two numbers and a callback. If the second number is not provided, use a default value of 2. Multiply the numbers and call the callback with the result.

// let num1;
// let num2 = 2;
// let multiplyWithDefaultAndCallback = (num1, num2, cb) => {
//   let result = num1 * num2;
//   cb(result);
// };
// let cb = (result) => {
//   console.log(result);
// };
// multiplyWithDefaultAndCallback(10, num2, cb);

//! Q 20. Loop with Function Call and Callback:Write a function named `forLoopWithCallback` that takes a limit and a callback. Inside the function, use a `for` loop to iterate from 1 to the limit. For each iteration, call the callback function to print “Hello” or any other message.

let forLoopWithCallback = (limit, cb) => {
  for (let i = 1; i <= limit; i++) {
    cb("Hello");
  }
};
let cb = (message) => {
  console.log(message);
};
forLoopWithCallback(10, cb);
