//! Array Methods ------------------>

//! map(value, index, wholeArray)

//! It is used to iterate over an array.
//! It returns an new Array & it will not modify the original array
//! To overcome the drawback of forEach() method we use map() function
//! forEach() will not modify the original array but also at the time of iteration it will not return anything, it will just print
//! If we are not rerurning anything it will return an array with undefined values

// let arr = [10, 20, 30, 40, 50, 60, 70];

// let newArr = arr.forEach((value) => {
//   console.log(value);
//   return value + 100;
// });

// console.log(newArr);
// console.log(arr);

// let newArr2 = arr.map((value) => {
//   console.log(value);
//   return value + 100;
// });

// console.log(newArr2);
// console.log(arr);

//! ### Task 1: Double the Numbers
// Write a function that takes an array of numbers and returns a new array with each number doubled.

// **Input:** `[1, 2, 3, 4, 5]`
// **Output:** `[2, 4, 6, 8, 10]`

// ---

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let newArr = arr.map((val) => val * 2);

// console.log(newArr);
// console.log(arr);

//! ### Task 2: Convert Temperatures
// Given an array of temperatures in Celsius, use `map()` to convert them to Fahrenheit.

// **Formula:** `F = (C × 9/5) + 32`
// **Input:** `[0, 10, 20, 30]`
// **Output:** `[32, 50, 68, 86]`

// ---

// let tempInCel = [0, 10, 20, 30];
// console.log(tempInCel);

// let tempInFarh = tempInCel.map((value) => {
//   let f = value * (9 / 5) + 32;
//   return f;
// });

// console.log(tempInFarh);
// console.log(tempInCel);

//! ### Task 3: Add 'Hello' to Each Name
// You have an array of names. Use `map()` to return a new array where each name is prefixed with "Hello".

// **Input:** `["Alice", "Bob", "Charlie"]`
// **Output:** `["Hello Alice", "Hello Bob", "Hello Charlie"]`

// ---

// let names = ["Tinku", "Pinku", "Rinku"];
// console.log(names);

// let greetings = names.map((name) => {
//   return "Hello, " + name;
// });

// console.log(greetings);
// console.log(names);

// let names = ["Tinku", "Pinku", "Rinku"];
// console.log(names);

// let newArr = [];

// names.forEach((name) => {
//   newArr.push(`Hello, ${name}`);
// });
// console.log(newArr);

//! ### Task 4: Extract Property Values
// You have an array of objects representing users. Use `map()` to return an array of just the usernames.

// **Input:** `[{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]`
// **Output:** `["Alice", "Bob"]`

// ---

// let objArr = [
//   { name: "Tinku", age: 25 },
//   { name: "Rinku", age: 30 },
// ];
// console.log(objArr);

// let names = objArr.map((value) => {
//   return value.name;
// });

// console.log(names);
// console.log(objArr);

//! ### Task 5: Square the Numbers
// Write a function that squares each number in an array and returns the new array using `map()`.

// **Input:** `[2, 3, 4]`
// **Output:** `[4, 9, 16]`

// ---

// let numbers = [2, 3, 4];
// console.log(numbers);

// let squares = numbers.map((num) => {
//   return num * num;
// });

// console.log(squares);
// console.log(numbers);

//! ### Task 6: Create HTML List Items
// Given an array of product names, use `map()` to return a new array of HTML `<li>` elements for each product.

// **Input:** `["Apples", "Oranges", "Bananas"]`
// **Output:** `["<li>Apples</li>", "<li>Oranges</li>", "<li>Bananas</li>"]`

// ---

// let fruits = ["Apples", "Oranges", "Bananas"];
// console.log(fruits);

// let htmlList = fruits.map((fruit) => {
//   return `<li> ${fruit} </li>`;
// });

// console.log(htmlList);
// console.log(fruits);

//! ### Task 7: Add Tax to Prices
// You have an array of product prices. Use `map()` to return a new array where each price includes 15% tax.

// **Input:** `[100, 200, 300]`
// **Output:** `[115, 230, 345]`

// ---

// let prices = [100, 200, 300];
// console.log(prices);

// let priceWithTax = prices.map((price) => {
//   return price + (price * 15) / 100;
// });

// console.log(priceWithTax);
// console.log(prices);

//! ### Task 8: Convert Strings to Numbers
// You have an array of strings representing numbers. Use `map()` to convert them into actual numbers.

// **Input:** `["1", "2", "3"]`
// **Output:** `[1, 2, 3]`

// let strArr = ["1", "2", "3"];
// console.log(strArr);

// let numArr = strArr.map((str) => {
//   return Number.parseInt(str);
// });

// console.log(numArr);

//! filter(value, index. wholeArray) ------------>

//! It is used to iterate

// let ages = [34, 44, 10, 20, 28, 15, 18, 67, 12];
// console.log(ages);

// let eligibleToVote = ages.filter((age) => {
//   return age >= 18;
//   // return true;
//   // return false;
//   // return 10;
//   // return "Hello";
// });

// console.log(eligibleToVote);
// console.log(ages);

let data = [
  {
    first_name: "Caryn",
    last_name: "Cohalan",
    email: "ccohalan0@gravatar.com",
    gender: "Female",
  },
  {
    first_name: "Rod",
    last_name: "Hattersley",
    email: "rhattersley1@disqus.com",
    gender: "Male",
  },
  {
    first_name: "Mordecai",
    last_name: "Goodyear",
    email: "mgoodyear2@soup.io",
    gender: "Male",
  },
  {
    first_name: "Livvy",
    last_name: "Van Son",
    email: "lvanson3@woothemes.com",
    gender: "Female",
  },
  {
    first_name: "Valry",
    last_name: "Skilling",
    email: "vskilling4@elpais.com",
    gender: "Female",
  },
  {
    first_name: "Nikolas",
    last_name: "Dearnaley",
    email: "ndearnaley5@sun.com",
    gender: "Male",
  },
  {
    first_name: "Ingaborg",
    last_name: "Deacon",
    email: "ideacon6@digg.com",
    gender: "Agender",
  },
  {
    first_name: "Avrit",
    last_name: "Garthland",
    email: "agarthland7@unc.edu",
    gender: "Polygender",
  },
  {
    first_name: "Nola",
    last_name: "Andover",
    email: "nandover8@psu.edu",
    gender: "Agender",
  },
  {
    first_name: "Nikos",
    last_name: "Pawlicki",
    email: "npawlicki9@rediff.com",
    gender: "Genderqueer",
  },
  {
    first_name: "Lesley",
    last_name: "Surmeyer",
    email: "lsurmeyera@naver.com",
    gender: "Female",
  },
  {
    first_name: "Dosi",
    last_name: "Pershouse",
    email: "dpershouseb@dion.ne.jp",
    gender: "Female",
  },
  {
    first_name: "Elsinore",
    last_name: "Stothart",
    email: "estothartc@unesco.org",
    gender: "Female",
  },
  {
    first_name: "Kalina",
    last_name: "Gurko",
    email: "kgurkod@dedecms.com",
    gender: "Female",
  },
  {
    first_name: "Gerhardine",
    last_name: "Conre",
    email: "gconree@e-recht24.de",
    gender: "Female",
  },
  {
    first_name: "Barby",
    last_name: "Stokoe",
    email: "bstokoef@state.gov",
    gender: "Female",
  },
  {
    first_name: "Mendie",
    last_name: "Kleisle",
    email: "mkleisleg@archive.org",
    gender: "Male",
  },
  {
    first_name: "Rhodia",
    last_name: "Hardbattle",
    email: "rhardbattleh@whitehouse.gov",
    gender: "Female",
  },
  {
    first_name: "Jodi",
    last_name: "Pyson",
    email: "jpysoni@purevolume.com",
    gender: "Female",
  },
  {
    first_name: "Gui",
    last_name: "Penwright",
    email: "gpenwrightj@dropbox.com",
    gender: "Female",
  },
  {
    first_name: "Iggie",
    last_name: "Gledhill",
    email: "igledhillk@icq.com",
    gender: "Male",
  },
  {
    first_name: "Janessa",
    last_name: "Ellacott",
    email: "jellacottl@seesaa.net",
    gender: "Female",
  },
  {
    first_name: "Dale",
    last_name: "Macknish",
    email: "dmacknishm@uol.com.br",
    gender: "Male",
  },
  {
    first_name: "Bonny",
    last_name: "Noddle",
    email: "bnoddlen@chron.com",
    gender: "Female",
  },
  {
    first_name: "Kay",
    last_name: "Poore",
    email: "kpooreo@google.ca",
    gender: "Female",
  },
  {
    first_name: "Harriette",
    last_name: "Binning",
    email: "hbinningp@who.int",
    gender: "Female",
  },
  {
    first_name: "Linda",
    last_name: "Gianullo",
    email: "lgianulloq@jigsy.com",
    gender: "Female",
  },
  {
    first_name: "Jillane",
    last_name: "Bletsoe",
    email: "jbletsoer@jiathis.com",
    gender: "Female",
  },
  {
    first_name: "Torin",
    last_name: "Smooth",
    email: "tsmooths@blogspot.com",
    gender: "Male",
  },
  {
    first_name: "Gilburt",
    last_name: "Callendar",
    email: "gcallendart@samsung.com",
    gender: "Male",
  },
  {
    first_name: "Jada",
    last_name: "Shimmans",
    email: "jshimmansu@cargocollective.com",
    gender: "Female",
  },
  {
    first_name: "Vivyanne",
    last_name: "Ansill",
    email: "vansillv@scribd.com",
    gender: "Female",
  },
  {
    first_name: "Selia",
    last_name: "Rubberts",
    email: "srubbertsw@opera.com",
    gender: "Female",
  },
  {
    first_name: "Farand",
    last_name: "Gamon",
    email: "fgamonx@amazonaws.com",
    gender: "Female",
  },
  {
    first_name: "Brandy",
    last_name: "McHugh",
    email: "bmchughy@dot.gov",
    gender: "Polygender",
  },
  {
    first_name: "Hughie",
    last_name: "McGuinley",
    email: "hmcguinleyz@cnet.com",
    gender: "Male",
  },
  {
    first_name: "Nilson",
    last_name: "Bywaters",
    email: "nbywaters10@howstuffworks.com",
    gender: "Male",
  },
  {
    first_name: "Addi",
    last_name: "Gatrill",
    email: "agatrill11@independent.co.uk",
    gender: "Agender",
  },
  {
    first_name: "Mikael",
    last_name: "Frissell",
    email: "mfrissell12@reuters.com",
    gender: "Male",
  },
  {
    first_name: "Marj",
    last_name: "Heninghem",
    email: "mheninghem13@comcast.net",
    gender: "Female",
  },
  {
    first_name: "Desirae",
    last_name: "Margerrison",
    email: "dmargerrison14@newsvine.com",
    gender: "Female",
  },
  {
    first_name: "Lianne",
    last_name: "Capstaff",
    email: "lcapstaff15@ocn.ne.jp",
    gender: "Female",
  },
  {
    first_name: "Yorgos",
    last_name: "Mulles",
    email: "ymulles16@netlog.com",
    gender: "Male",
  },
  {
    first_name: "Harald",
    last_name: "Grindell",
    email: "hgrindell17@archive.org",
    gender: "Male",
  },
  {
    first_name: "Alf",
    last_name: "Dixcey",
    email: "adixcey18@harvard.edu",
    gender: "Male",
  },
  {
    first_name: "Timmy",
    last_name: "Poleye",
    email: "tpoleye19@pcworld.com",
    gender: "Female",
  },
  {
    first_name: "Augie",
    last_name: "Brenton",
    email: "abrenton1a@cnn.com",
    gender: "Male",
  },
  {
    first_name: "Kain",
    last_name: "Cubbino",
    email: "kcubbino1b@over-blog.com",
    gender: "Male",
  },
  {
    first_name: "Chick",
    last_name: "Woodrup",
    email: "cwoodrup1c@soundcloud.com",
    gender: "Agender",
  },
  {
    first_name: "Jerad",
    last_name: "Juorio",
    email: "jjuorio1d@about.com",
    gender: "Male",
  },
];

let maleArray = data.filter((value) => {
  return value.gender == "Male";
});
console.log(maleArray);

let femaleArray = data.filter((value) => {
  return value.gender == "Female";
});
console.log(femaleArray);

let agenderArr = data.filter((value) => {
  return value.gender == "Agender";
});
console.log(agenderArr);

let polyGenderArr = data.filter((value) => {
  return value.gender == "Polygender";
});
console.log(polyGenderArr);

let genderqueerArr = data.filter((value) => {
  return value.gender == "Genderqueer";
});
console.log(genderqueerArr);
