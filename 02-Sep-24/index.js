//! Scope : var

// var a = 10
// if(true)
// {
//   console.log(a);  // 10
//   var a = 20
//   console.log(a); // 20
// }
// console.log(a); // 20

//! Scope : let

// let a = 10;
// if (true) {
//   // console.log(a);  // error
//   let a = 20;
//   console.log(a); // 20
// }
// console.log(a); // 10

//! Scope : const

const a = 10;
if (true) {
  // console.log(a); // error
  const a = 20;
  console.log(a); // 20
}
console.log(a); // 10
