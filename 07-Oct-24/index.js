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

//! 2] getDay() :

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

//! 3] getMonth() :

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

//! It returns the day of the month.
//! It starts from 0 - 31.

// let date = new Date();
// console.log(date);
// console.log(date.getDate());

//! 5] getFullYear() :

//! It returns the present yearin 4 digit format. (2024)

// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());

//! 6] getHours() :

//! It returns the present hour in 24 hourse format.

// let date = new Date();
// console.log(date);
// console.log(date.getHours());

//! 7] getMinutes() :

//! It returns the present minutes.
//! It starts from 0 till 59.

// let date = new Date();
// console.log(date);
// console.log(date.getMinutes());

//! 8] getSeconds() :

//! It returns the present second.
//! It starts from 0 till 59.

// let date = new Date();
// console.log(date);
// console.log(date.getSeconds());

//! 9] getMilliseconds() :

//! It returns the present milli-second.
//! It starts from 0 till 999.

// let date = new Date();
// console.log(date);
// console.log(date.getMilliseconds());

//! 10] getTime() :

//! It returns the unique number.

// let date = new Date();
// console.log(date);
// console.log(date.getTime());

//! <-------------------------- Math Functions -------------------------->

//! 1] Math.PI

//! It returns the PI value.

// console.log(Math.PI); // 3.141592653589793

//! 2] Math.sqrt()

//! It returns the square root of given number.

// console.log(Math.sqrt(64)); // 8
// console.log(Math.sqrt()); // NaN
// console.log(Math.sqrt(34.54)); // 5.877074101966046
// console.log(Math.sqrt([])); // 0
// console.log(Math.sqrt([12, 23])); // NaN
// console.log(Math.sqrt({})); // NaN
// console.log(Math.sqrt({ name: "Mahesh" })); // NaN
// console.log(Math.sqrt("")); // 0
// console.log(Math.sqrt(" jhds ")); // NaN

//! 3] Math.abs()

//! It returns the absolute value of a given number.
//! It conc=verts the negative value to positive.

// console.log(Math.abs(1.12)); // 1.12
// console.log(Math.abs()); // NaN
// console.log(Math.abs(1)); // 1
// console.log(Math.abs([23, 34])); // NaN
// console.log(Math.abs([])); // 0
// console.log(Math.abs({})); // NaN
// console.log(Math.abs({ name: "Mahesh" })); // NaN
// console.log(Math.abs(-123.34)); // 123.34
// console.log(Math.abs(" ")); // 0
// console.log(Math.abs("jhd")); // NaN

//! 4] Math.cbrt()

//! It returns the cube root of a given number.

// console.log(Math.cbrt(27)); // 3
// console.log(Math.cbrt()); // NaN
// console.log(Math.cbrt(64.345)); // 4.007174623500338
// console.log(Math.cbrt(-100)); // -4.007174623500338
// console.log(Math.cbrt([])); // 0
// console.log(Math.cbrt([4, 5])); // NaN
// console.log(Math.cbrt({})); // NaN
// console.log(Math.cbrt({ age: 6 })); // NaN
// console.log(Math.cbrt(" ")); // 0
// console.log(Math.cbrt(" s ")); // NaN

//! 5] Math.ceil()

//! It returns the largest whole integer greater than the given integer.

// console.log(Math.ceil(10.01)); // 11
// console.log(Math.ceil()); // NaN
// console.log(Math.ceil(10)); // 10
// console.log(Math.ceil(-10.45)); // -10
// console.log(Math.ceil([])); // 0
// console.log(Math.ceil([2, 3])); // NaN
// console.log(Math.ceil({})); // NaN
// console.log(Math.ceil({ age: 45 })); // NaN
// console.log(Math.ceil(" ")); // 0
// console.log(Math.ceil(" uy ")); // NaN

//! 6] Math.floor()

//! It returns the smallest whole integer lesser or equal to than the given integer.

// console.log(Math.floor(10.01)); // 10
// console.log(Math.floor(-10.01)); // 11
// console.log(Math.floor()); // NaN
// console.log(Math.floor(0)); // 0
// console.log(Math.floor([])); // 0
// console.log(Math.floor([4, 5])); // NaN
// console.log(Math.floor({})); // NaN
// console.log(Math.floor({ age: 22 })); // NaN
// console.log(Math.floor(" ")); // 0
// console.log(Math.floor(" jh ")); // NaN

//! 7] Math.round()

//! It returns the nearest wholepositive integer value for given integer.

// console.log(Math.round(4.6)); // 5
// console.log(Math.round(4.5)); // 5
// console.log(Math.round(4.4)); // 4
// console.log(Math.round(-4.6)); // -5
// console.log(Math.round(-4.5)); // -4
// console.log(Math.round(-4.4)); // -4
// console.log(Math.round(0)); // 0
// console.log(Math.round()); // NaN
// console.log(Math.round([])); // 0
// console.log(Math.round([6, 7])); // NaN
// console.log(Math.round({})); // NaN
// console.log(Math.round({ age: 45 })); // NaN
// console.log(Math.round({ age: 45 })); // NaN
// console.log(Math.round(" ")); // 0
// console.log(Math.round("ghj ")); // NaN

//! 8] Math.random()

//! It returns an random value from 0 (inclusive) to 1 (exclusive)

// console.log(Math.random()); // 0.2950758234340223

//! 9] Math.min()

//! It is uesd to fins smallest value from given numbers.

// console.log(Math.min(23, 45, 56)); // 23
// console.log(Math.min([45, 67], [23, 34])); // NaN
// console.log(Math.min([], [])); // 0
// console.log(Math.min([23, 34, 45])); // NaN
// console.log(Math.min(" ", 78)); // 0
// console.log(Math.min(" ")); // 0
// console.log(Math.min("")); // 0
// console.log(Math.min("hj", 34)); // NaN
// console.log(Math.min(34)); // 34

//! 10] Math.max()

//! It is uesd to fins largest value from given numbers.

// console.log(Math.max(23, 45, 56)); // 56
// console.log(Math.max([45, 67], [23, 34])); // NaN
// console.log(Math.max([], [])); // 0
// console.log(Math.max([23, 34, 45])); // NaN
// console.log(Math.max(" ", 78)); // 78
// console.log(Math.max(" ")); // 0
// console.log(Math.max("")); // 0
// console.log(Math.max(34)); // 34

//! Q. Generate 4 digit OTP ----------->

// console.log(Math.floor(Math.random() * 9000) + 1000);
