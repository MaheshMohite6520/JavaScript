//! 1. **Task**: Write a function that accepts a full name (first and last name) as input and returns the total number of characters in the name, excluding spaces. The function should also return a message like: "Your name has X characters."

// function strLength(fullName) {
//   let count = 0;

//   for (let i = 0; i < fullName.length; i++) {
//     if (fullName[i] != " ") {
//       count++;
//     }
//   }

//   return count;
// }

// let value = strLength("Mahesh Mohite");
// console.log(value);

//! 2. **Task**: Write a function that accepts a string and returns the third character in that string. If the string is too short (less than three characters), return a message like: "The string is too short."

// function str(name) {
//   if (name.length < 3) {
//     return "The string is too short.";
//   } else {
//     for (let i = 0; i < name.length; i++) {
//       return name[2];
//     }
//   }
// }

// let value = str("Ma");
// console.log(value);

//! 3. **Task**: Write a function that takes a string and returns the Unicode value of the character in the middle of the string. If the string has an even number of characters, return the Unicode value of the character just before the middle.

// function unicode(str) {
//   let evenStr = "";
//   let oddStr = "";
//   let len = str.length;
//   let mid = Math.floor(str.length / 2);

//   if (len % 2 == 0) {
//     for (let i = 0; i < str.length; i++) {
//       if (mid == i) {
//         evenStr += str[mid - 1].charCodeAt(0);
//       }
//       evenStr += str[i];
//     }

//     return evenStr;
//   } else {
//     for (let i = 0; i < str.length; i++) {
//       if (mid == i) {
//         oddStr += str[mid].charCodeAt(0);
//       }
//       oddStr += str[i];
//     }
//     return oddStr;
//   }
// }

// console.log(unicode("Anish"));

//! 4. **Task**: Create a function that checks if a given file name starts with "Report" (case-sensitive). If it does, return a message like: "This is a report file." If not, return: "This is not a report file."

// function checks(file) {
//   if (file.startsWith("Report")) {
//     return "This is a report file.";
//   } else {
//     return "This is not a report file.";
//   }
// }

// console.log(checks("reportNames"));

// function checks(file) {
//   if (file.localeCompare("Report")) {
//     return "This is a report file.";
//   } else {
//     return "This is not a report file.";
//   }
// }

// console.log(checks("reportNames"));

//! 5. **Task**: Write a function that accepts a string and checks if it ends with ".jpg". If it does, return: "This is an image file." Otherwise, return: "This is not an image file."

// function imageChecker(fileName) {
//   if (fileName.endsWith(".jpg")) {
//     return "This is an image file.";
//   } else {
//     return "This is not an image file";
//   }
// }

// console.log(imageChecker("hello.jpg"));

//! 6. **Task**: Write a function that checks if the word "password" is included in a user's input string. If it is found, return: "Your input contains a forbidden word." Otherwise, return: "Input accepted."

// function passChecker(input) {
//   if (input.includes("password")) {
//     return "Your input contains a forbidden word.";
//   } else {
//     return "Input accepted.";
//   }
// }

// console.log(passChecker("userpassword"));

//! 7. **Task**: Write a function that searches a paragraph for the first appearance of the word "important" and returns the position (index) of that word. If the word isn't found, return a message like: "The word 'important' is not in the paragraph."

// function search(str) {
//   let strArr = str.split(" ");
//   let index = strArr.indexOf("important");

//   if (index >= 0) {
//     return index;
//   } else {
//     return "The word 'important' is not in the paragraph.";
//   }
// }

// console.log(search("It is very important task."));

//! 8. **Task**: Create a function that takes a sentence and replaces all instances of the word "sad" with "happy." Return the updated sentence.

// function replaceWord(sentence) {
//   let newSentence = sentence.replaceAll("sad", "happy");

//   return newSentence;
// }

// console.log(
//   replaceWord(
//     "Anish is very sad right now. He is sad beacause he got bad rating in the mock."
//   )
// );

//! 9. **Task**: Write a function that takes a long string of text and replaces all occurrences of the word "mistake" with "correction." It should replace every instance found and return the updated text.

// function replaceText(sentence) {
//   let newSentence = sentence.replaceAll("mistake", "correction");
//   return newSentence;
// }

// console.log(replaceText("mistake is mistake."));

//! 10. **Task**: Write a function that extracts the first 10 characters from a given string and returns them. If the string has fewer than 10 characters, return the entire string.

// function extractChar(str) {
//   if (str.length <= 10) {
//     return str;
//   } else {
//     let newStr = "";
//     for (let i = 0; i < 10; i++) {
//       newStr += str[i];
//     }
//     return newStr;
//   }
// }

// console.log(extractChar("Hello"));

//! 11. **Task**: Write a function that takes a sentence and splits it into an array of individual words. Then, return the array and display each word on a new line.

// function display(sentence) {
//   let arr = sentence.split(" ");
//   console.log(arr);

//   arr.forEach((element) => {
//     console.log(element);
//   });
// }

// display("Hiii, My name is Mahesh Mohite.");

//! 12. **Task**: Create a function that converts a sentence into lowercase letters and returns the new version. For example, the input "HELLO WORLD" should be converted to "hello world."

// function convertLower(str) {
//   console.log(str.toLowerCase());
// }

// convertLower("HELLO WORLD");

//! 13. **Task**: Write a function that converts all the characters in a string to uppercase and returns the updated string. If the input is "good morning", the output should be "GOOD MORNING."

// function convertUpper(str) {
//   console.log(str.toUpperCase());
// }

// convertUpper("good morning");

//! 14. **Task**: Write a function that accepts a number and converts it into a string. For example, if the number is 123, the output should be the string "123". The function should return the string with a message like: "The number has been converted to a string."

// function numToStr(num) {
//   console.log(num);
//   console.log(typeof num);

//   // let str = num.toString();
//   // let str = String(num);
//   // let str = `${num}`;
//   let str = num + "";

//   console.log(str);
//   console.log(typeof str);
// }
// numToStr(123);

//! 15. **Task**: Write a function that removes extra spaces from the start and end of a string. For example, if the input is "  hello world  ", the output should be "hello world". The function should return a message like: "Extra spaces have been removed."

// function removeSpace(str) {
//   console.log(str.trim());
// }

// removeSpace("        hello world         ");

//! 16. **Task**: Create a function that accepts a string with extra spaces at the start and trims only the leading spaces. For example, the input "  learn JavaScript" should return "learn JavaScript", with a message: "Leading spaces have been removed."

// function removeSpace(str) {
//   console.log(str.trimStart());
// }

// removeSpace("        learn JavaScript         ");

//! 17. **Task**: Write a function that takes a string and trims off any trailing spaces. If the input is "coding is fun   ", it should return "coding is fun" with a message: "Trailing spaces have been removed."

// function removeSpace(str) {
//   console.log(str.trimEnd());
// }

// removeSpace("        coding is fun         ");

//! 18. **Task**: Write a function that takes a string and checks whether it starts with an uppercase letter. If the first letter is capitalized, return a message like: "The string starts with an uppercase letter." Otherwise, return: "The string starts with a lowercase letter."

// function checkCapitalized(str) {
//   let ascii = str[0].charCodeAt(0);

//   if (ascii >= 65 && ascii <= 90) {
//     return "The string starts with an uppercase letter.";
//   } else {
//     return "The string starts with a lowercase letter.";
//   }
// }

// console.log(checkCapitalized("Hello world"));

//! 19. **Task**: Write a function that accepts a sentence and converts only the first letter of the sentence to uppercase, while the rest of the letters are converted to lowercase. For example, "hello WORLD" should become "Hello world." Return the updated sentence with a message.

// function convertCapitalised(str) {
//   let lower = str.toLowerCase();
//   let ascii = lower[0].charCodeAt(0);
//   let newStr = "";

//   for (let i = 0; i < lower.length; i++) {
//     if (i == 0) {
//       newStr += lower[i].toUpperCase();
//     } else {
//       newStr += lower[i];
//     }
//   }

//   return newStr;
// }

// console.log(convertCapitalised("hello WORLD"));

//! 20. **Task**: Write a function that takes a sentence and counts how many spaces are in it. The function should return the total number of spaces with a message like: "There are X spaces in the sentence."

// function countSpaces(str) {
//   let arr = str.split(" ");

//   console.log(`There are ${arr.length - 1} spaces in the sentence`);
// }

// countSpaces("Hi, My name is Mahesh Mohite");
