// Functions ------------------>

// Function declaration Way-1 ----> function as an expression
let firstFunction = function () {
  console.log("firstFunction called and executed");
};
firstFunction();

// Addition Function
let add = function (a, b) {
  console.log(`The addition of ${a} & ${b} is: ${a + b}`);
};
add(200, 400);

// Subtraction Function
let sub = function (a, b) {
  console.log(`The subtraction of ${a} & ${b} is: ${a - b}`);
};
sub(400, 100);

// Multiplication Function
let mul = function (a, b) {
  console.log(`The multiplication of ${a} & ${b} is: ${a * b}`);
};
20, 10;

// Division Function
let div = function (a, b) {
  console.log(`The division of ${a} & ${b} is: ${a / b}`);
};
div(200, 20);

// Modulus Function
let mod = function (a, b) {
  console.log(`The modulus of ${a} & ${b} is: ${a % b}`);
};
mod(100, 3);

console.log("-----------------------------------");

// Function declaration Way-2 ----> function without expression
function second() {
  console.log("second function called & executed");
}
second();

function addition(a, b) {
  console.log(`Adiition of ${a} & ${b} is ${a + b}`);
}
addition(25, 45);

function subtraction(a, b) {
  console.log(`Subtraction of ${a} & ${b} is ${a - b}`);
}
subtraction(250, 50);

function multiplication(a, b) {
  console.log(`Multiplication of ${a} & ${b} is ${a * b}`);
}
multiplication(25, 25);

function division(a, b) {
  console.log(`Division of ${a} & ${b} is ${a / b}`);
}
division(100, 5);

function modulus(a, b) {
  console.log(`Modulus of ${a} & ${b} is ${a % b}`);
}
modulus(25, 4);

console.log("--------------------------------");

// Function declaration Way-3 ----> Arrow function

// let thirdFunction = () => {
//   console.log("third function called & executed");
// };
// thirdFunction();

thirdFunction = () => {
  console.log("third function called & executed");
};
thirdFunction();

addFunction = (a, b) => {
  console.log(`Addition of ${a} & ${b} is ${a + b}`);
};
addFunction(5, 10);

subFunction = (a, b) => {
  console.log(`Subtraction of ${a} & ${b} is ${a - b}`);
};
subFunction(50, 10);

mulFunction = (a, b) => {
  console.log(`Multiplication of ${a} & ${b} is ${a * b}`);
};
mulFunction(5, 15);

divFunction = (a, b) => {
  console.log(`Division of ${a} & ${b} is ${a / b}`);
};
divFunction(20, 4);

modFunction = (a, b) => {
  console.log(`Modulus of ${a} & ${b} is ${a % b}`);
};
modFunction(500, 10);

console.log("-------------------------");

// Introduction --------->

let intro1 = function (name, nativePlace, age) {
  console.log(
    `My name is ${name}. I am from ${nativePlace} & I am ${age} years old`
  );
};
intro1("Mahesh", "Kolhapur", 22);
intro1("Tejas", "Nashik", 22);

function intro2(name, nativePlace, age) {
  console.log(
    `My name is ${name}. I am from ${nativePlace} & I am ${age} years old`
  );
}
intro2("Mahesh", "Kolhapur", 22);
intro2("Gaurav", "Jalgaon", 22);

intro3 = (name, nativePlace, age) => {
  console.log(
    `My name is ${name}. I am from ${nativePlace} & I am ${age} years old`
  );
};
intro3("Mahesh", "Kolhapur", 22);
intro3("Prasad", "Pune", 23);

console.log("-----------------------------------");

// Orders ---------->

let order = function (item, name, size, price, addOns) {
  console.log(
    `Here is your ${item} Mr. ${name} of ${size} size with ${addOns} & your Bill is Rs. ${price}`
  );
};
order("Pizza", "Mahesh Mohite", "Extra Large", 1000, "Coke");

console.log("-------------------------------");

// Animal Sound -------->

function animalSound(name, sound) {
  console.log(`The sound of ${name} is ${sound} ${sound}`);
}
animalSound("Dog", "Bow Bow");
animalSound("Cat", "Meow Meow");
animalSound("Gaurav", "Bow Bow");
animalSound("lion", "Roar");
animalSound("Cow", "Hambaaaaaaaaaaa");

console.log("-------------------------------");
