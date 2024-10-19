//! 1] innerHTML --------------->

// let { body } = document;

// let navbar = document.createElement("nav");

// body.append(navbar);

// navbar.innerHTML = `
//   <div class="navDivs">text</div>
//   <div class="navDivs">text</div>
//   <div class="navDivs">text</div>
//   <div class="navDivs">text</div>
//   <div class="navDivs">text</div>
// `;

//! 2] innerText ---------------->
//! It will override innrHTML content.

// navbar.innerText = "Hello";

//! 3] textContent --------------->
//! iT WILL OVERRIDE innerText content.

// navbar.textContent = "JAVASCRIPT";

//! 4]  remove() -------->
//! It will remove the heading from the HTML(DOM).

// heading.remove();

//! Event Handling ------------------->

//! We can trigger the events in 3 ways :

//! 1] HTML :

// let { body } = document;

// let func = () => {
//   console.log("Button clicked");
//   body.style.backgroundColor = "red";
// };

//! 2] JavaScript :

//! We just need to pass the function reference without calling it.

// let { body } = document;

// let func = () => {
//   console.log("Button clicked");
//   body.style.backgroundColor = "red";
// };

// let btn = document.querySelector("button");
// console.log(btn);

// btn.onclick = func;

//! 3] JavaScript : addEventListener()

//! It will return the event object.

let str = "";

let heading = document.querySelector("h1");
let input = document.querySelector("input");
let btn = document.querySelector("button");

input.addEventListener("input", (e) => {
  if (e.data != null) {
    str += e.data;
  } else {
  }
  console.log(str);
  heading.innerText = str;
});
