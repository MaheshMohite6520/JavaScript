// Q 1. FFind vowels in a string?

// let str = "Hello hunny bunny";
// let temp = "";

// let findVowel = (val) => {
//   for (let i = 0; i < str.length; i++) {
//     if (
//       val[i] == "a" ||
//       val[i] == "e" ||
//       val[i] == "i" ||
//       val[i] == "o" ||
//       val[i] == "u"
//     ) {
//       temp += val[i];
//     }
//   }

//   console.log(temp);
// };
// findVowel(str);

// Note : In JS, strings also have indexes.

// Q 2. Print the table of given number?

// let num = prompt("Enter a number");

// let table = (num) => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
//   }
// };
// table(num);

// Q 3. Find the length of the string?

let str = prompt("Enter a string: ");
let count = 0;

let findLength = (val) => {
  let i = 0;
  while (true) {
    if (val[i] == undefined) {
      break;
    }
    count++;
  }

  console.log(`length of the string is ${count}`);
};
findLength(str);
