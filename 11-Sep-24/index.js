//! Linkdin ------------->

// let x = 1;
// if (function f() {}) {
//   x += typeof f;
// }
// console.log(x);

//! JS Currying ------------------------>

// let first = () => {
//   return () => {
//     console.log("JS Currying");
//   };
// };

// first()();
// console.log(first()());

//! Assignments ------------------------->

//! **1. Repeated Call**
// Write a function `repeatCall` that accepts a callback and a message string. The callback should call the provided message twice, returning the result as a single string.

//! **Example:**
// `repeatCall(callback, ‘Let’s go!’)`
// `callback` should return: `”Let’s go! Let’s go!”`

// let repeatCall = (callback, message) => {
//   return callback(message);
// };

// let callback = (message) => {
//   return message + " " + message;
// };

// console.log(repeatCall(callback, "Let’s go!"));

//! **2. Simple Decision Maker**
// Write a function `decideAction` that accepts a callback function and a string (action). The callback should return `”Approved”` if the action is `”proceed”`, and `”Denied”` otherwise.

//! **Example:**
// `decideAction(callback, ‘proceed’)`
// `callback` should return: `”Approved”`

// let decideAction = (callback, message) => {
//   return callback(message);
// };

// let callback = (message) => {
//   if (message == "proceed") {
//     return "Approved";
//   } else {
//     return "denied";
//   }
// };

// console.log(decideAction(callback, "procee"));

//! **3. Repeated Message**
// Write a function `repeatMessage` that accepts a callback and a message string. The callback should return the message repeated twice.

//! **Example:**
// `repeatMessage(callback, ‘Goodbye’)`
// `callback` should return: `”Goodbye Goodbye”`

// let repeatMessage = (cb, message) => {
//   return cb(message);
// };

// let cb = (message) => {
//   return message + " " + message;
// };

// console.log(repeatMessage(cb, "GoodBye"));

//! **4. Toggle Switch**
// Write a function `toggleSwitch` that accepts a callback and a string (either `”on”` or `”off”`). The callback should return `”Switched on”` if the string is `”off”` and `”Switched off”` if the string is `”on”`.

//! **Example:**
// `toggleSwitch(callback, ‘off’)`
// `callback` should return: `”Switched on”`

// let toggleSwitch = (callback, message) => {
//   return callback(message);
// };

// let callback = (message) => {
//   if (message == "on") {
//     return "Switched on";
//   } else {
//     return "Switched off";
//   }
// };

// console.log(toggleSwitch(callback, "off"));

//! **5. Yes or No Decision**
// Write a function `askYesOrNo` that accepts a callback function and a response string (`”yes”` or `”no”`). The callback should return `”Confirmed”` for `”yes”` and `”Rejected”` for `”no”`.

//! **Example:**
// `askYesOrNo(callback, ‘yes’)`
// `callback` should return: `”Confirmed”`

// let askYesOrNo = (callback, message) => {
//   return callback(message);
// };

// let callback = (message) => {
//   if (message == "yes") {
//     return "confirmed";
//   } else {
//     return "Rejected";
//   }
// };

// console.log(askYesOrNo(callback, "yes"));

//! **6. Reverse the Text**
// Write a function `reverseText` that accepts a callback and a string. The callback should return the string reversed.

//! **Example:**
// `reverseText(callback, ‘world’)`
// `callback` should return: `”dlrow”`

// let reverseText = (callback, message) => {
//   return callback(message);
// };

// let callback = (message) => {
//   return message.split("").reverse().join("");
// };

// console.log(reverseText(callback, "world"));

//! **7. Personalized Farewell**
// Write a function `createFarewell` that accepts a callback and a name string. The callback should return `”Goodbye, [name]!”` where `[name]` is replaced with the provided name.

//! **Example:**
// `createFarewell(callback, ‘Bob’)`
// `callback` should return: `”Goodbye, Bob!”`

// let createFarewell = (callback, name) => {
//   return callback(name);
// };

// let callback = (name) => {
//   return `GoodBye, ${name}`;
// };

// console.log(createFarewell(callback, "Tejas"));

//! **8. Decision Logic**
// Write a function `decisionMaker` that accepts a callback and a string (`”start”` or `”stop”`). The callback should return `”Starting…”` if the string is `”start”` and `”Stopping…”` if the string is `”stop”`.

//! **Example:**
// `decisionMaker(callback, ‘start’)`
// `callback` should return: `”Starting…”`

// let decisionMaker = (callback, message) => {
//   return callback(message);
// };

// let callback = (message) => {
//   if (message == "start") {
//     return "Starting";
//   } else {
//     return "Stopping";
//   }
// };

// console.log(decisionMaker(callback, "stop"));

//! Hoisting ---------------------------->

//! Function Declarations ---->

// console.log(sum(2, 3)); // 5

// function sum(a, b) {
//   return a + b;
// }

//! Function Expressions --->

// console.log(multiply); // undefined

// var multiply = function (a, b) {
//   return a * b;
// };

// console.log("-----------------------")

// console.log(divide); //! ReferenceError: Cannot access 'divide' before initialization

// let divide = function (a, b) {
//   return a / b;
// };

// console.log("-----------------------")

// console.log(divide2); //! ReferenceError: Cannot access 'divide' before initialization
// const divide2 = function (a, b) {
//   return a / b;
// };
