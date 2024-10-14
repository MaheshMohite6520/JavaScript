//! <-------------------- Object Methods ------------------>

const obj = {
  name: "Aditya",
  accNo: 9837408934323,
  contact: 98738734,
  balance: 150,
};

console.log(obj);

obj.add = "Pune";
console.log(obj);

obj.balance = 200;
console.log(obj);

// const obj = {}; // Not possible beacause of const

//! 1] seal() ------------------>

//! We can modify the object.
//! We cannot add or delete the properties in object.

Object.seal(obj);

obj.balance = 300;
console.log(obj); // object will update

obj.age = 22;
console.log(obj); // it will be not added

//! 2] freez() -------------------->

//! We cannot do any operation on freezed object.

Object.freeze(obj);

obj.balance = 400;
console.log(obj); // it will be not update

obj.age = 22;
console.log(obj); // it will be not update

//! 3] isFrozen() ---------------------->

//! It is uesd to check the given object is frozen or not.
//! It will return boolean value(true or false)

//! The freeze object is seal as well as freeze.
//! The sea object is only seal.

console.log(Object.isFrozen(obj));
