//! <----------------------- setTimeout() ------------------------>

//! It is an higher order function.
//! It accepts 2 arguments.
//! 1] callbak function
//! 2] Time in MilliSeconds
//! It will execute only one time.

// setTimeout(() => {
//   console.log("SetTimeout() Function");
// }, 5000);

//! <----------------------- setInterval() ------------------------>

//! It is an higher order function.
//! It accepts 2 arguments.
//! 1] callbak function
//! 2] Time in MilliSeconds
//! It will execute for every interval.
//! We can stop it by using clearInterval(intervalName) function & condition.

// let count = 0;

// let myInterval = setInterval(() => {
//   count++;

//   console.log(count);

//   if (count == 10) {
//     clearInterval(myInterval);
//   }
// }, 1000);
