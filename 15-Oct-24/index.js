//! <---------------- Asynchronous JavaScript -------------------->

//! Promises -------------->

//! Promises are the Objects in JavaScript.
//! It is used to achieve Asynchronous behaviour.
//! In promises we get 3 diffrent states.
//! 1] pending
//! 2] resolve
//! 3] reject

//! 1] pending: Promise will be in pending state when it is neighther resolved or rejected.

//! 2] resolve: Promise will be in resolve state when your Promise is fulfilled. When the promise is resolved it will call then() block and we can pass some arguments along with it.

//! 3] reject: Promise will be in reject state when your Promise is not fulfilled. When the promise is rejected it will call catch() block and we can pass some arguments along with it. catch block can be used to handle the errors and exceptions.

//! Note: Your Promise can either be in resolve state or rejected state at once(not in both at a time)

//! Some Asynchronous tasks in JavaScript will internally return the Promise, we just have to handle them by using then() & catch() block.
//! Example: fetch() method will return the Promise.

// let p1 = new Promise((resolve, reject) => {
//   let a = 10;

//   if (a == 10) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// p1.then(() => console.log("True, a == 10"));
// p1.catch(() => console.log("False, a != 10"));

// let p2 = new Promise((resolve, reject) => {
// resolve();
//   reject();
// });
// p2.then(() => console.log("then block"));
// p2.catch(() => console.log("catch block"));

// console.log("start");

// let p3 = new Promise((resolve, reject) => {
//   let a = 10 + 20;

// resolve(a);
//   reject("Something went wrong");
// });

// p3.then((val) => {
//   console.log("then block", val);
// });

// p3.catch((err) => {
//   console.log("catch block", err);
// });

// console.log("end");

//! API Fetching --------------->

//! fetch()

//! It will return an Promise.
//! catch block will execute when internal error occurs.(like Internet Connection)

// let p = fetch("https://api.github.com/users");
// console.log(p);

// p.then((val) => {
//   console.log(val);

//   let data = val.json();
//   return data;
// })
//   .then((val2) => {
//     console.log(val2);
//   })
//   .catch((err) => {
//     console.log("Something went wrong", err);
//   });

fetch("https://api.github.com/users")
  .then((val) => {
    return val.json();
  })
  .then((data) => {
    console.log(data);
  });
