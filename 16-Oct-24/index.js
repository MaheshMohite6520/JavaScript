//! <---------------------- async & await ------------------------>

//! async & await both are keywords.
//! It is also used to acheive asynchronous behavior.
//! We cannot use await without async but we can use async without await.
//! Introduced in ECMAScript 2017 (ES8)
//! They are built on top of Promises and make it easier to work with asynchronous operations like fetching data from an API, reading a file, or executing a time-consuming task.
//! async functions always return a Promise.
//! await pauses the execution of an async function until the Promise resolves.

// let fun1 = async () => {
//   let res = await fetch("https://api.github.com/users");
//   console.log(res);
//   let data = await res.json();
//   console.log(data);

//   data.map((val, i) => {
//     console.log(i + " " + val.login);
//     console.log(val.avatar_url);
//   });
// };

// fun1();
