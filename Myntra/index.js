let navBar = document.createElement("nav");
console.log(navBar);

navBar.setAttribute("class", "navClass");

//! LOGO ------------------->

let div1 = document.createElement("div");
console.log(div1);

div1.setAttribute("class", "div1Class");

let img1 = document.createElement("img");
console.log(img1);

img1.setAttribute("width", "80px");

img1.setAttribute("class", "img1Class");

img1.setAttribute(
  "src",
  "https://tse1.mm.bing.net/th?id=OIP.ZfIQIYuS-cZFg_1AzC7uHQHaHa&pid=Api&P=0&h=180"
);

let { body } = document;
console.log(body);

body.append(navBar);

navBar.append(div1);

div1.append(img1);

//! Sections ---------------->

let div2 = document.createElement("div");
console.log(div2);

div2.setAttribute("class", "sections");

navBar.append(div2);

let div2_1 = document.createElement("div");
let div2_2 = document.createElement("div");
let div2_3 = document.createElement("div");
let div2_4 = document.createElement("div");
let div2_5 = document.createElement("div");
let div2_6 = document.createElement("div");

div2_1.className = "section";
div2_2.className = "section";
div2_3.className = "section";
div2_4.className = "section";
div2_5.className = "section";
div2_6.className = "section";

div2_1.textContent = "MEN";
div2_2.textContent = "WOMEN";
div2_3.textContent = "KIDS";
div2_4.textContent = "HOME & LIVING";
div2_5.textContent = "BEAUTY";
div2_6.textContent = "STUDIO";

div2.append(div2_1);
div2.append(div2_2);
div2.append(div2_3);
div2.append(div2_4);
div2.append(div2_5);

//! Search Bar --------------->

let input1 = document.createElement("input");
console.log(input1);

let searchIcon = document.createElement("img");
console.log(searchIcon);

searchIcon.setAttribute("src", "search.png");

navBar.append(input1);
input1.append(searchIcon);

input1.setAttribute("type", "text");
input1.setAttribute("placeholder", " 🔎 Search for products, brands and more");
input1.setAttribute("class", "input1Class");

//! Profile Section -------------->

let div4 = document.createElement("div");
console.log(div4);

div4.setAttribute("class", "profileSection");

navBar.append(div4);

let div4_1 = document.createElement("div");

let img2 = document.createElement("img");
let p1 = document.createElement("p");

img2.setAttribute("src", "profile.png");
p1.textContent = "Profile";

img2.setAttribute("width", "20px");

div4_1.append(img2);
div4_1.append(p1);

let div4_2 = document.createElement("div");

let img3 = document.createElement("img");
let p2 = document.createElement("p");

img3.setAttribute("src", "Heart.png");
p2.textContent = "WishList";

img3.setAttribute("width", "20px");

div4_2.append(img3);
div4_2.append(p2);

let div4_3 = document.createElement("div");

let img4 = document.createElement("img");
let p3 = document.createElement("p");

img4.setAttribute("width", "20px");

div4_3.append(img4);
div4_3.append(p3);

img4.setAttribute("src", "bag.png");
p3.textContent = "Bag";

div4.append(div4_1);
div4.append(div4_2);
div4.append(div4_3);
