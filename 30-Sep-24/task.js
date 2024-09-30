//! Q 1. **Extract Object Keys**
//    You are given an object representing a student:
//    ```javascript
//    const student = {
//      name: 'Alice',
//      age: 22,
//      major: 'Computer Science',
//      GPA: 3.8
//    };
//    ```
//    Extract all the keys from the `student` object and print each key along with its corresponding value.

// let student = {
//   name: "Alice",
//   age: 22,
//   major: "Computer Science",
//   GPA: 3.8,
// };

// let keys = Object.keys(student);

// keys.forEach((key) => {
//   console.log(`${key} : ${student[key]}`);
// });

//! Q 2. **Retrieve Object Values**
//    Given the following object representing a movie:
//    ```javascript
//  const movie = {
//    title: 'Inception',
//    director: 'Christopher Nolan',
//    releaseYear: 2010,
//    rating: 8.8
//  };
//    ```
//    Retrieve all the values from this `movie` object and print them in a structured format.

// let movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   releaseYear: 2010,
//   rating: 8.8,
// };

// let values = Object.values(movie);

// values.forEach((value, index) => {
//   console.log(`${index + 1}: ${value}`);
// });

//! 3. **Convert Object to Key-Value Pairs**
//    You have an object that represents a book:
//    ```javascript
//  const book = {
//    title: '1984',
//    author: 'George Orwell',
//    genre: 'Dystopian'
//  };
//    ```
//    Convert the object into an array of key-value pairs and print each pair in the format: `key: value`.

// const book = {
//   title: "1984",
//   author: "George Orwell",
//   genre: "Dystopian",
// };

// let bookArr = Object.entries(book);

// bookArr.forEach((value) => {
//   console.log(`${value[0]} : ${value[1]}`);
// });

//! 4. **Recreate Object from Key-Value Pairs**
//    You are given an array of key-value pairs:
//    ```javascript
//    const keyValueArray = [
//      ['name', 'Charlie'],
//      ['age', 30],
//      ['job', 'Engineer']
//    ];
//    ```
//    Convert this array back into an object and print the newly created object.

// const keyValueArray = [
//   ["name", "Charlie"],
//   ["age", 30],
//   ["job", "Engineer"],
// ];

// let obj = Object.fromEntries(keyValueArray);
// console.log(obj);

//! 5. **Merge Two Objects**
//    Given the following two objects:
//    ```javascript
//    const contactInfo = {
//      phone: '123-456-7890',
//      email: 'john.doe@example.com'
//    };

//    const address = {
//      street: '123 Main St',
//      city: 'Anytown',
//      state: 'CA'
//    };
//    ```
//    Merge these two objects into a single `userInfo` object and print the merged object.

// const contactInfo = {
//   phone: "123-456-7890",
//   email: "john.doe@example.com",
// };

// const address = {
//   street: "123 Main St",
//   city: "Anytown",
//   state: "CA",
// };

// let userInfo = Object.assign({}, contactInfo, address);
// console.log(userInfo);

//! 6. **Shallow Copy with Object.assign**
//    Create a nested object representing a `person`:
//    ```javascript
//    const person = {
//      name: 'John',
//      age: 35,
//      address: {
//        city: 'New York',
//        country: 'USA'
//      }
//    };
//    ```
//    Create a shallow copy of the `person` object. Modify the `city` property in the copied object and check the original object.

// const person = {
//   name: "John",
//   age: 35,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// let copy = Object.assign(person);
// copy.address.city = "Pune";
// console.log(copy);
// console.log(person);

//! 7. **Deep Copy using JSON Methods**
//    Given the same nested `person` object, create a deep copy of it. Modify the `address` in the deep copy and verify the original object remains unchanged.

// const person = {
//   name: "John",
//   age: 35,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// let jsonObj = JSON.stringify(person);
// let copy = JSON.parse(jsonObj);
// copy.address.city = "Pune";
// console.log(person);
// console.log(copy);

//! 8. **Object Literal Syntax**
//    Create an object using object literal syntax to represent a smartphone:
//    Print each property of the `smartphone` object.

// let smartphone = {
//   brand: "MI",
//   model: "REDMI 12 5G",
//   ram: "8 GB",
//   camera: "50 MP",
// };

// let arr = Object.entries(smartphone);

// arr.forEach((value) => {
//   console.log(`${value[0]} : ${value[1]}`);
// });

//! 9. **Factory Function**
//    Write a factory function `createCar(make, model, year)` that returns an object representing a car. The object should have a `drive` method that logs the car's make and model. Use the factory function to create 3 different car objects and call the `drive()` method on each.

// function createCar(make, model, year) {
//   let obj = {
//     make,
//     model,
//     year,
//     drive: function () {
//       console.log(`Driving a ${this.year} ${this.make} ${this.model}`);
//     },
//   };

//   return obj;
// }

// const car1 = createCar("Toyota", "Corolla", 2015);
// const car2 = createCar("Honda", "Civic", 2018);
// const car3 = createCar("Ford", "Mustang", 2020);

// car1.drive();
// car2.drive();
// car3.drive();

//! 10. **Constructor Function**
//    Define a constructor function `User(name, email)` that initializes a user object with `name` and `email` properties. Add a method `greet()` to the constructor that logs a greeting message using the user’s name. Create multiple instances of `User` and call the `greet()` method on them.

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   greet = function () {
//     console.log(`Good Morning, ${this.name}`);
//   };
// }

// const user1 = new User("Ayush More", "ayushmore@gmail.com");
// const user2 = new User("Mahesh Mohite", "maheshmohite@gmail.com");
// const user3 = new User("Gaurav More", "gmore@gmail.com");

// user1.greet();
// user2.greet();
// user3.greet();

//! 11. **Creating Objects with Classes**
//    Create a class `Dog` with a constructor that takes `name` and `breed` as parameters. Add a method `bark()` that logs the dog's name followed by "is barking". Instantiate the class with 2 dogs and make them bark.

// class Dog {
//   constructor(name, breed) {
//     (this.name = name), (this.breed = breed);
//   }

//   bark = function () {
//     console.log(`${this.name} is barking`);
//   };
// }

// const dog1 = new Dog("Moti", "Golden Retriever");
// const dog2 = new Dog("Pillya", "German Shepherd");

// dog1.bark();
// dog2.bark();

//! 12. **Using Constructor Function**
//    Create a constructor function `Movie(title, director)` that initializes a movie object. Add a prototype method `getDetails()` that returns a string with the title and director. Create a few movie instances and call `getDetails()` on them.

// class Movie {
//   constructor(title, director) {
//     (this.title = title), (this.director = director);
//   }

//   getDetails = function () {
//     console.log(`${this.title} : ${this.director}`);
//   };
// }

// let movie1 = new Movie("Bahubali", "Rajamauli");
// let movie2 = new Movie("Inception", "Nolan");

// movie1.getDetails();
// movie2.getDetails();

//! 13. **Assign Default Values to an Object**
//    You have an object with missing properties:
//    ```javascript
//    const userProfile = {
//      name: 'Alice',
//      age: 25
//    };
//    ```
//    Merge the object with default values `{age: 18, city: 'Unknown'}` and print the updated object.

// const userProfile = {
//   name: "Alice",
//   age: 25,
// };

// const obj = {
//   age: 18,
//   city: "Unknown",
// };

// const newObj = Object.assign({}, userProfile, obj);
// console.log(newObj);

//! 14. **Cloning an Object with Object.assign**
//    Create an object `laptop` with properties like `brand`, `model`, and `price`. Clone the `laptop` object into a new object `newLaptop`. Modify `newLaptop` and ensure the changes don’t affect the original `laptop`.

// let laptop = {
//   brand: "ASUS",
//   model: "TUF",
//   price: 100000,
// };

// let newLaptop = Object.assign({}, laptop);
// newLaptop.price = 65000;
// console.log(newLaptop);
// console.log(laptop);

//! 15. **Adding Methods to an Existing Object with Object.assign**
//    You have a `robot` object:
//    ```javascript
//    const robot = {
//      name: 'Robo'
//    };
//    ```
//    Add two new methods to the `robot` object: `greet()` and `performTask()`. The `greet` method should log the robot's name, and `performTask` should log a generic task message.

// const robot = {
//   name: "Robo",
// };

// let methods = {
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
//   performTask() {
//     console.log("Doing things....");
//   },
// };

// Object.assign(robot, methods);

// robot.greet();
// robot.performTask();

//! 16. **Iterating through Object Properties using Object.entries**
//    Given the following object:
//    ```javascript
//    const movie = {
//      title: 'The Matrix',
//      director: 'Wachowskis',
//      year: 1999
//    };
//    ```
//    Iterate through the object and log each key-value pair in the format: `key: value`.

// const movie = {
//   title: "The Matrix",
//   director: "Wachowskis",
//   year: 1999,
// };

// let arr = Object.entries(movie);
// arr.forEach((value) => {
//   console.log(`${value[0]} : ${value[1]}`);
// });

//! 17. **Dynamic Access to Object Keys**
//    Write a function `getProperty(obj, key)` that takes an object and a key as arguments. Check if the key exists in the object. If it exists, return the value of the key; otherwise, return `"Key not found"`.

// function getProperty(obj, key) {
//   if (key in obj) {
//     return obj[key];
//   } else {
//     return "Key not found";
//   }
// }

// const person = {
//   name: "John",
//   age: 30,
// };

// console.log(getProperty(person, "name"));
// console.log(getProperty(person, "age"));
// console.log(getProperty(person, "country"));
