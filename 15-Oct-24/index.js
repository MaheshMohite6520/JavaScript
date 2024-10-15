//! <---------------- Asynchronous JavaScript -------------------->

//! Promises -------------->

//! It is used to achieve Asynchronous behaviour.
//! IIt has 2 callback functions and handles them internally.
//! At a time we can only call then() or catch() not both at a time

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

let p = fetch("https://api.github.com/users");
console.log(p);

p.then((val) => {
  console.log(val);

  let data = val.json();
  return data;
})
  .then((val2) => {
    console.log(val2);
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });
