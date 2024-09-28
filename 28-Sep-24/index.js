//! 9] splice() : It is used to copy the elements from an array & it returns an array
//! It will affect original array
//! It accepts 3 arguments (start index, length of how many elements you want to delete, elements that you want to add)
//! last index element is not included

// let arr = [10, 20, 30, 40];
// console.log(arr);

// let newArr = arr.splice(0, 1);
// console.log(newArr);

// console.log(arr);

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(arr);

// let newArr = arr.splice(1, 0, 100);
// console.log(newArr);
// console.log(arr);

// let newArr = arr.splice(1, 1);
// console.log(newArr);
// console.log(arr);

// let newArr = arr.splice(4, 3, 500, 600, 700, 800);
// console.log(newArr);
// console.log(arr);

//! Q 1. Add the element at last index (You don't know the length of array) by using splice() method

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let num = 4000;

// let newArr = arr.splice(arr.length, 0, num);
// let newArr = arr.splice(arr.length, 10, num);
// console.log(newArr);
// console.log(arr);
// console.log(arr[20]);

//! Q 2. Add the element at second index by using splice() method

// let newArr = arr.splice(1, 1, 4000);
// console.log(newArr);
// console.log(arr);

//! Q 3. Remove all elements by using splice() method add num in array

// let newArr = arr.splice(0, arr.length, 4000);
// console.log(newArr);
// console.log(arr);

//! API

// let name = prompt("Enter your Name: ");
// let address = prompt("Enter your address: ");
// let contact = prompt("Enter your contact: ");
// let id = prompt("Enter your id: ");

// let newObj = { name, address, contact, id };

let data = [
  {
    name: "Becky Schinner",
    address: "Data",
    contact: "alliance",
    id: "1",
  },
  {
    name: "Antoinette Crist",
    address: "North",
    contact: "Puerto",
    id: "2",
  },
  {
    name: "Everett Wilderman",
    address: "female",
    contact: "Rubber",
    id: "3",
  },
  {
    name: "Cecelia Beatty",
    address: "Dakota",
    contact: "Funk",
    id: "4",
  },
  {
    name: "Marshall Zboncak",
    address: "yellow",
    contact: "Macao",
    id: "5",
  },
  {
    name: "Santos Crist",
    address: "female",
    contact: "Sterling",
    id: "6",
  },
  {
    name: "Chris Cruickshank",
    address: "digital",
    contact: "pascal",
    id: "7",
  },
  {
    name: "Jean Schamberger",
    address: "Northwest",
    contact: "Facilitator",
    id: "8",
  },
  {
    name: "Miss Ralph Ondricka DDS",
    address: "Universal",
    contact: "pixel",
    id: "9",
  },
  {
    name: "Blanca Dibbert",
    address: "enim",
    contact: "Finland",
    id: "10",
  },
  {
    name: "Ken Hudson",
    address: "West",
    contact: "B2B",
    id: "11",
  },
  {
    name: "Dr. Kari Lebsack",
    address: "yuck",
    contact: "following",
    id: "12",
  },
  {
    name: "Jason Balistreri",
    address: "Generic",
    contact: "Hermaphrodite",
    id: "13",
  },
  {
    name: "Rodolfo Walker",
    address: "grey",
    contact: "Practical",
    id: "14",
  },
  {
    name: "Pearl Kulas",
    address: "invoice",
    contact: "system",
    id: "15",
  },
  {
    name: "Viola Wolf",
    address: "Garden",
    contact: "hospitable",
    id: "16",
  },
  {
    name: "Simon Berge",
    address: "Concrete",
    contact: "Mireille",
    id: "17",
  },
  {
    name: "Brent Rippin",
    address: "Latin",
    contact: "Investment",
    id: "18",
  },
  {
    name: "Richard Emard",
    address: "Data",
    contact: "Tandem",
    id: "19",
  },
  {
    name: "Jeremiah Shanahan",
    address: "West",
    contact: "although",
    id: "20",
  },
  {
    name: "Tracey Heathcote",
    address: "panel",
    contact: "Central",
    id: "21",
  },
  {
    name: "Tiffany Mayer Sr.",
    address: "TLS",
    contact: "Northeast",
    id: "22",
  },
  {
    name: "Eleanor Rowe MD",
    address: "Assurance",
    contact: "Swift",
    id: "23",
  },
  {
    name: "Muriel Smitham",
    address: "Supervisor",
    contact: "Kids",
    id: "24",
  },
  {
    name: "Matthew Altenwerth",
    address: "Wooden",
    contact: "program",
    id: "25",
  },
  {
    name: "Marcus Mills",
    address: "Bronze",
    contact: "regarding",
    id: "26",
  },
  {
    name: "Rudy Abbott",
    address: "Van",
    contact: "Bedfordshire",
    id: "27",
  },
  {
    name: "Michele Rath",
    address: "mole",
    contact: "yowza",
    id: "28",
  },
  {
    name: "Wesley Quigley V",
    address: "Funk",
    contact: "faucet",
    id: "29",
  },
  {
    name: "Roderick Sipes",
    address: "Aiyana",
    contact: "yet",
    id: "30",
  },
  {
    name: "Jeannie Kiehn",
    address: "set",
    contact: "Generic",
    id: "31",
  },
  {
    name: "Sheri Christiansen",
    address: "mint",
    contact: "FTM",
    id: "32",
  },
  {
    name: "Jeffery Boyle",
    address: "Luxurious",
    contact: "black",
    id: "33",
  },
  {
    name: "Cory D'Amore",
    address: "West",
    contact: "North",
    id: "34",
  },
  {
    name: "Diana Brekke",
    address: "National",
    contact: "East",
    id: "35",
  },
  {
    name: "Genevieve Leffler",
    address: "alarm",
    contact: "Brand",
    id: "36",
  },
  {
    name: "Garry Bogisich",
    address: "so",
    contact: "mint",
    id: "37",
  },
  {
    name: "Darryl Thiel",
    address: "lumen",
    contact: "est",
    id: "38",
  },
  {
    name: "Verna Gerhold",
    address: "VGA",
    contact: "empower",
    id: "39",
  },
  {
    name: "Juana Dietrich DVM",
    address: "HDD",
    contact: "Shoes",
    id: "40",
  },
  {
    name: "Ron Connelly",
    address: "Guilder",
    contact: "Southeast",
    id: "41",
  },
  {
    name: "Toni Koss",
    address: "IP",
    contact: "Account",
    id: "42",
  },
  {
    name: "Lorenzo Dickens",
    address: "Northwest",
    contact: "ROI",
    id: "43",
  },
  {
    name: "Erika Schroeder",
    address: "SSD",
    contact: "Electronic",
    id: "44",
  },
  {
    name: "Mr. Tim Kovacek",
    address: "Planner",
    contact: "sievert",
    id: "45",
  },
  {
    name: "Jonathan Stroman",
    address: "Van",
    contact: "what",
    id: "46",
  },
  {
    name: "Gary Klocko",
    address: "Senior",
    contact: "intrepid",
    id: "47",
  },
  {
    name: "Julian Kshlerin",
    address: "North",
    contact: "Murfreesboro",
    id: "48",
  },
  {
    name: "Guadalupe Ondricka",
    address: "bus",
    contact: "Metal",
    id: "49",
  },
  {
    name: "Darnell Hahn",
    address: "matrix",
    contact: "out",
    id: "50",
  },
];

// data.push(newObj);
console.log(data);

// let jsonData = JSON.stringify(data[0]);
// let data = JSON.parse(JSON.stringify(data[0]));
// console.log(jsonData);

let index = 0;

data.forEach((element) => {
  document.writeln(`
    Id: ${element.id}
    Name: ${element.name}
    Address: ${element.address}
    Contact: ${element.contact}
  `);
});
