//! <------------------------------ Strings ------------------------->

//! There are 4 ways to Declare an String --------->

//! Way - 1
// let str = "Bahubali"

//! Way - 2
// let str = 'Bahubali'

//! Way - 3
// let str = `Bahubali`

//! Way - 4
// let str = new String("Bahubali")

// console.log("------------------------");

// let str = "Bahubali";

// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);
// console.log(str[6]);
// console.log(str[7]);
// console.log(str[8]);
// console.log(str[9]);

//! Create bablu from Bahubali ------------->

// let newStr = str[0] + str[1] + str[4] + str[5] + str[6] + str[3];
// console.log(newStr);

//! Print the String by using for loop --------->

// let str = "Bahubali";
// console.log(str);
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

//! Print the string by using higer order functions ---------> Not applicable to String

// let str = "Bahubali";

// str.forEach((element) => { //! index.js:33 Uncaught TypeError: str.forEach is not a function
//   console.log(element);
// });

// str.map((element) => { //! index.js:45 Uncaught ReferenceError: Cannot access 'str' before initialization
//   console.log(element);
// });

// str.filter((element) => {  //! index.js:52 Uncaught TypeError: str.filter is not a function
//   console.log(element);
// });

// str.reduce((element) => { //! index.js:58 Uncaught TypeError: str.reduce is not a function
//   console.log(element);
// });

// str.sort((element) => {  //! Uncaught TypeError: str.sort is not a function
//   console.log(element);
// });

//! Convert the String into an array ------------->

//! 1] split(character) :

//! It is an string method.
//! It is used to convert the String into an array.
//! It will return an array.
//! We have to pass an argument to split() method to split by specific character.

// let str = "Bahubali"

// let strArr = str.split("");
// console.log(strArr);

// let strArr = str.split("i");
// console.log(strArr);

//! 2] reverse() :

//! It is an array method used to reverse the array.
//! It will return an array.
//! It will modify the original arrray

// let str = "Bahubali";

// let arr = str.split("").reverse();
// console.log(arr);

// let newStr = arr.join("");
// console.log(newStr);

// let arr = [10, 20, 30, 40, 50];
// let newArr = arr.reverse();
// console.log(newArr);
// console.log(arr);

//! 3] join(character) :

//! It is an array method used to convert the array into an String.
//! We have to pass an argument to join() method that will convert the array into an String.

// let str2 = str.split("").reverse().join("");
// console.log(str2);

//! 4] padStart(length, character that you want to add) :

//! It is used to add the characters at the start of the String.
//! It will return an new String.

//! 5] padEnd(ength, character that you want to add) :

//! It is used to add the characters at the end of the String.
//! It will return an new String.

// let num = "6520";
// let newNo = num.padStart(12, "*").padEnd(20, "*");
// console.log(newNo);

//! 6] trim() :

//! It will remove the white spaces from start and end(both).
//! It will return an trimmed string.

//! 7] trimStart() :

//! It will remove the white spaces from start only.
//! It will return an trimmed String.

//! 8] trimEnd() :

//! It will remove the white spaces from end only.
//! It will return an trimmed String.

// let str = "      Bahubali       ";
// console.log(str);

// let start = str.trimStart();
// console.log(start);

// let end = str.trimEnd();
// console.log(end);

// let both = str.trim();
// console.log(both);

//! 9] toUpperCase() :

//! It is used to the String into upper case.
//! It will return an String.

//! 10] toLowerCase() :

//! It is used to the String into upper case.
//! It will return an String.

//! 11] toLocaleLowerCase() :

//! It is used to the String into upper case.
//! It will return an String.

//! 12] toLocaleUpperCase() :

//! It is used to the String into lower case.
//! It will return an String.

// let str = "Bahubali";
// console.log(str);

// let upper = str.toUpperCase();
// console.log(upper);

// let lower = str.toLowerCase();
// console.log(lower);

// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());

//! 13] replace(removedCharacter, addedCharacter) :

//! It is uesd remove the character from String and add the character in place of that character.
//! It will return an new String.
//! It will only replace the first occurence of the character in the String.

//! 14] replaceAll(removedCharacter, addedCharacter) :

//! It is uesd remove the character from String and add the character in place of that character.
//! It will return an new String.
//! It will replace the all occurence of the character in the String.

// let str = "Bahubali";
// console.log(str);

// console.log(str.replace("a", "i"));
// console.log(str.replaceAll("a", "i"));

// console.log(
//   str.replace("Ba", "K").replace("u", "au").replace("b", "g").replace("l", "ll")
// );
