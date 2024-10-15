//! <------------------------ String Methods ---------------------->

// let str = "Katappa";
// console.log(str);

//! 15] slice(start index, end index) :

//! It is used to copy the string from original string.
//! It will return an new String.
//! It will not modify the original String.
//! It allows negative indices, which count from the end of the string.
//! if start is greater than end does not swap indices.

// let str = "Katappa";
// console.log(str);

// let val = str.slice(0, 2);
// console.log(val);

// let val1 = str.slice(-1);
// console.log(val1);

// let val2 = str.slice(-1, str.length);
// console.log(val2);

//! 16] subString(start index, end index) :

//! It is used to copy the string from original string.
//! It will return an new String.
//! It will not modify the original String.
//! It does not allows negative indices.
//! It swaps the start and end indices if start is greater than end.

// let str = "Katappa";
// console.log(str);

// let val = str.substring(1, 3);
// console.log(val);

// let val1 = str.substring(0, 3);
// console.log(val1);

//! 17] substr(start index, length of characters that you want to delete);

//! Extracts a section of a string from start index with a specified length.
//! If length is omitted(not given or empty), it extracts from start to the end of the string.
//! If start is negative, it counts from the end of the string.
//! Returns a new string containing the extracted characters.
//! It will not modify the original String.

// let str = "Katappa";
// console.log(str);

// let val = str.substr(-7, 4);
// console.log(val);
// console.log(str);

//! 18] includes("character") :

//! It is used to find a character in a String.
//! It will return an boolean value.

// let str = "Katappa";
// console.log(str);

// let val = str.includes("K");
// console.log(val);

// let val1 = str.includes("appa");
// console.log(val1);

//! 19] startsWith("string") :
//! 20] endsWith("string") :

//! Both methods are used to check wheather the String is starting or ending with particular string or not.
//! It will return an boolean value.

// let str = "Katappa";
// console.log(str);

// let val1 = str.startsWith("k");
// console.log(val1);

// let val2 = str.endsWith("ppa");
// console.log(val2);

//! 21] at(index) :
//! 22] charAt(index) :

//! Both methods are used to find the character present at particular index.
//! It will return an character.

// let str = "Katappa";
// console.log(str);

// let val = str.at(4);
// console.log(val);

// let val = str.charAt(4);
// console.log(val);

//! 23] charCodeAt(index) :

//! It is used to find the ASCII value of an character present in the String.
//! It will return an ASCII value.

// let str = "Katappa";
// console.log(str);

// let ascii = str.charCodeAt(4);
// console.log(ascii);
