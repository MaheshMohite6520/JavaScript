//! <----------------------------- DATE() --------------------------->

// let date = new Date();
// console.log(date);

//! 1] Date.now() :

//! It will return an unique number which represents the seconds.
//! It is used to return unique indexes.

// console.log(Date.now());

// let obj = {
//   name: "Tinku",
//   id: Date.now(),
// };
// console.log(obj);

//! 2] variable.getDay() :

//! It will return indexes from 0 to 6 that will cover all the seven days of week.
//! It starts from Sunday to Saturday.

//! Weeks example ----->

// let date = new Date();
// console.log(date.getDay());

// switch (date.getDay()) {
//   case 0:
//     console.log("Sun");
//     break;

//   case 1:
//     console.log("Mon");
//     break;

//   case 2:
//     console.log("Tue");
//     break;

//   case 3:
//     console.log("Wed");
//     break;

//   case 4:
//     console.log("Thu");
//     break;

//   case 5:
//     console.log("Fri");
//     break;

//   case 6:
//     console.log("Sat");
//     break;

//   default:
//     console.log("invalid day");
//     break;
// }

//! 3] variable.getMonth() :

//! Months example ----->

// let date = new Date();
// console.log(date.getMonth());

// switch (date.getMonth()) {
//   case 0:
//     console.log("Jan");
//     break;

//   case 1:
//     console.log("Feb");
//     break;

//   case 2:
//     console.log("Mar");
//     break;

//   case 3:
//     console.log("Apr");
//     break;

//   case 4:
//     console.log("May");
//     break;

//   case 5:
//     console.log("Jun");
//     break;

//   case 6:
//     console.log("Jul");
//     break;

//   case 7:
//     console.log("Aug");
//     break;

//   case 8:
//     console.log("Sep");
//     break;

//   case 9:
//     console.log("Oct");
//     break;

//   case 10:
//     console.log("Nov");
//     break;

//   case 11:
//     console.log("Dec");
//     break;

//   default:
//     console.log("invalid month");
//     break;
// }

//! 4] getDate() :
//! 5] getFullYear() :
//! 6] getHours() :
//! 7] getMinutes() :
//! 8] getSeconds() :
//! 9] getMilliseconds() :
//! 10] getTime() :

// let date = new Date();
// console.log(date);

// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());

//! <-------------------------- Math Functions -------------------------->

// console.log(Math.PI);
// console.log(Math.sqrt(64));
// console.log(Math.abs(10.12));
// console.log(Math.cbrt(27));
// console.log(Math.ceil(10.01));
// console.log(Math.floor(10.01));

console.log(Math.floor(Math.random() * 10000));
