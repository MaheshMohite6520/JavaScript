//! <-------------------- ### DOM Manipulation Tasks -------------------->

//! 1. **Change Background Color:**
//    - Create a button with a label like “Change Background”. Write a function that will change the background color of the entire page when this button is clicked. You can allow the user to choose a random color or pick a predefined color.

// let { body } = document;

// let changeBackgound = () => {
//   let color = prompt("Enter Color Name: ");
//   body.style.backgroundColor = `${color}`;
//   console.log("Button Clicked");
// };

// let btn = document.createElement("button");

// body.append(btn);

// btn.addEventListener("click", changeBackgound);

//! 2. **Text Update:**
//    - Add a paragraph element to your HTML with some initial text (e.g., “Click the button to change this text.”). Create a button labeled “Update Text”. Write a function that, when the button is clicked, changes the paragraph text to something else (e.g., “Text updated!”).

// let { body } = document;

// let p = document.createElement("p");
// p.textContent = "Hello";

// body.append(p);

// let btn = document.createElement("button");

// body.append(btn);

// let updateText = () => {
//   p.innerText = "Text Updated";
// };

// btn.addEventListener("click", updateText);

//! 3. **Hide/Show Element:**
//    - Add a div with some content and a button labeled “Hide/Show”. Write a function that hides the div when the button is clicked for the first time, and shows it again when clicked the second time. Use a boolean or toggle to keep track of whether the div is visible or hidden.

// let { body } = document;

// let div = document.createElement("div");
// div.textContent = "Hello";

// body.append(div);

// let btn = document.createElement("button");
// btn.textContent = "Hide/Show";

// body.append(btn);

// let display = true;

// let hide = (e) => {
//   if (display) {
//     div.style.display = "none";
//     display = false;
//   } else {
//     div.style.display = "block";
//     display = true;
//   }
// };

// btn.addEventListener("pointerdown", hide);

//! 4. **Add New Item to List:**
//    - Create an input field and an empty unordered list (ul) in your HTML. Below the input, add a button labeled “Add Item”. Write a function that, when the button is clicked, adds the value from the input field as a new list item (li) to the unordered list. Make sure to clear the input field after adding the item.

// let input = document.querySelector("input");
// let ul = document.querySelector("ul");

// let addNum = () => {
//   let num = input.value;
//   ul.innerHTML += `<li>${num}</li>`;
//   input.value = "";
// };

//! 5. **Remove Last Item from List:**
//    - Add an unordered list with a few predefined list items (li). Below the list, add a button labeled “Remove Last Item”. Write a function that, when the button is clicked, removes the last item from the list. Make sure the function works even when the list is empty (i.e., it shouldn’t break).

// let ul = document.querySelector("ul");
// console.log(ul);

// let li = document.querySelectorAll("li");
// console.log(li);

// let removeItem = () => {
//   if (li.length > 0) {
//     for (let i = 0; i < li.length; i++) {
//       if (i == li.length - 1) {
//         li[i].remove();
//       }
//     }
//   } else {
//     console.log("List is Empty");
//   }
// };

//! 6. **Toggle Class:**
//    - Create a div element with some initial style, like a background color or border. Add a button labeled “Toggle Style”. Write a function that toggles a specific class on the div when the button is clicked. The class should change the div’s appearance (e.g., different color or border style).

// let { body } = document;

// let div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "red";
// div.style.margin = "10px";
// div.setAttribute("class", "divClass");

// body.append(div);

// let btn = document.createElement("button");
// btn.textContent = "Toggle Style";

// body.append(btn);

// btn.addEventListener("click", () => {
//   div.style.backgroundColor = "green";
// });

//! 7. **Change Image Source:**
//    - Add an image element with an initial source. Below the image, add two buttons labeled “Change to Image 1” and “Change to Image 2”. Write functions for both buttons that change the image’s source to a different URL when clicked.

// let { body } = document;

// let img = document.createElement("img");
// img.setAttribute(
//   "src",
//   "https://tse4.mm.bing.net/th?id=OIP.UjPu3o32l14JZWEX0iZBwgAAAA&pid=Api&P=0&h=180"
// );
// img.style.width = "100px";

// let btn1 = document.createElement("button");
// btn1.textContent = "Change to Image 1";

// let btn2 = document.createElement("button");
// btn2.textContent = "Change to Image 2";

// body.append(img);
// body.append(btn1);
// body.append(btn2);

// btn1.addEventListener("click", () => {
//   img.setAttribute(
//     "src",
//     "https://tse4.mm.bing.net/th?id=OIP.UjPu3o32l14JZWEX0iZBwgAAAA&pid=Api&P=0&h=180"
//   );
// });

// btn2.addEventListener("click", () => {
//   img.setAttribute(
//     "src",
//     "https://tse1.mm.bing.net/th?id=OIP.Of2yoKfXNXaNLKbfET_iLwHaEz&pid=Api&P=0&h=180"
//   );
// });

//! 8. **Create Elements Dynamically:**
//    - Add a button labeled “Add Paragraph”. Write a function that, when the button is clicked, creates a new paragraph element and appends it to the document body. The paragraph should contain some text (e.g., “This is a new paragraph!”).

// let { body } = document;

// let btn = document.createElement("button");
// btn.textContent = "Add Paragraph";

// body.append(btn);

// btn.addEventListener("click", () => {
//   let p = document.createElement("p");
//   p.innerText = "This is a new Paragraph!";

//   body.append(p);
// });

//! 9. **Disable Button After Click:**
//    - Add a button labeled “Click Me”. Write a function that disables the button (i.e., makes it unclickable) after it’s been clicked once. You can change the button’s text to indicate that it’s been disabled (e.g., “Button Disabled”).

// let { body } = document;

// let btn = document.createElement("button");
// btn.textContent = "Click Me";

// body.append(btn);

// btn.addEventListener("click", () => {
//   btn.textContent = "Button Disabled";
//   btn.setAttribute("disabled", "");
// });

//! 10. **Display Input Text:**
//     - Create an input field and a div below it. Write a function that, as the user types into the input field, displays the same text in the div In real-time. This can be achieved by listening for the input event and updating the div’s inner text with the input’s current value.

// let { body } = document;

// let input = document.createElement("input");
// let p = document.createElement("p");

// body.append(input);
// body.append(p);

// let str = "";
// input.addEventListener("input", (e) => {
//   if (e.data != null) {
//     str += e.data;
//     console.log(e.data);
//   }
//   p.innerText = str;
// });

//! 11. **Change Text Color on Hover:**
//     - Add a paragraph element with some text. Write a function that changes the text color when the mouse hovers over the paragraph and reverts the color back to its original state when the mouse leaves.

// let { body } = document;

// let p = document.createElement("p");
// p.textContent = "Hello";
// console.log(p);

// body.append(p);

// p.addEventListener("mouseover", () => {
//   p.style.color = "red";
// });

// p.addEventListener("mouseout", () => {
//   p.style.color = "black";
// });

//! 12. **Display Current Date and Time:**
//     - Add a button labeled “Show Date and Time”. Write a function that, when the button is clicked, displays the current date and time in a div below the button. You can use JavaScript’s `Date` object to get the current date and time.

// let { body } = document;

// let btn = document.createElement("button");
// btn.textContent = "Show Date & Time";

// body.append(btn);

// btn.addEventListener("click", () => {
//   let div = document.createElement("div");
//   body.append(div);

//   let dt = new Date();

//   div.append(dt);
// });

//! 13. **Remove Element:**
//     - Add a div or any other element with some content. Below it, add a button labeled “Remove Element”. Write a function that removes the element from the DOM when the button is clicked.

// let { body } = document;

// let div = document.createElement("div");
// div.textContent = "JavaScript";

// body.append(div);

// let btn = document.createElement("button");
// btn.textContent = "Remove Element";

// body.append(btn);

// btn.addEventListener("click", () => {
//   div.remove();
// });

//! 14. **Count Button Clicks:**
//     - Create a button labeled “Click Counter”. Below the button, add a paragraph that displays the number of times the button has been clicked (e.g., “Button clicked 0 times”). Write a function that increments the count every time the button is clicked.

// let { body } = document;

// let btn = document.createElement("button");
// btn.textContent = "Click Counter";

// body.append(btn);

// let p = document.createElement("p");
// p.textContent = "Button clicked 0 times";
// body.append(p);

// let counter = 0;

// btn.addEventListener("click", (e) => {
//   counter++;

//   p.innerHTML = `Button clicked ${counter} times`;
// });

//! 15. **Display Window Width:**
//     - Add a div that will display the current window width. Write a function that updates the width in the div whenever the user resizes the window. You can listen for the `resize` event and use `window.innerWidth` to get the current width.

// let { body } = document;

// let div = document.createElement("div");
// div.textContent = `Current window width: ${window.innerWidth}px`;

// body.append(div);

// div.addEventListener("resize", () => {
//   div.textContent = `Current window width: ${window.innerWidth}px`;
// });

//! 16. **Add Class to All Elements:**
//     - Add a few paragraph elements to the page. Below them, add a button labeled “Add Class”. Write a function that, when the button is clicked, adds a specific class (e.g., a class that changes the text color) to all the paragraph elements on the page.

// let { body } = document;

// let p1 = document.createElement("p");
// p1.textContent = "Paragraph-1";

// let p2 = document.createElement("p");
// p2.textContent = "Paragraph-2";

// let p3 = document.createElement("p");
// p3.textContent = "Paragraph-3";

// let p4 = document.createElement("p");
// p4.textContent = "Paragraph-4";

// let p5 = document.createElement("p");
// p5.textContent = "Paragraph-5";

// body.append(p1);
// body.append(p2);
// body.append(p3);
// body.append(p4);
// body.append(p5);

// let btn = document.createElement("button");
// btn.textContent = "Add Class";

// body.append(btn);

// btn.addEventListener("click", () => {
//   let p = document.querySelectorAll("p");
//   console.log(p);

//   for (let i = 0; i < p.length; i++) {
//     p[i].setAttribute("class", "paragraph");
//   }
// });

//! 17. **Input Validation:**
//     - Create a form with a text input field and a submit button. Write a function that validates the input field when the form is submitted. If the field is empty, display an error message below the form and prevent the form from being submitted.

// let { body } = document;

// let form = document.createElement("form");

// body.append(form);

// let input = document.createElement("input");
// input.type = "text";
// input.placeholder = "Enter here";

// form.append(input);

// let br = document.createElement("br");

// form.append(br);

// let btn = document.createElement("button");
// btn.textContent = "Submit";

// form.append(btn);

// let div = document.createElement("div");

// form.append(div);

// btn.addEventListener("click", () => {
//   event.preventDefault();

//   if (input.value == "") {
//     div.textContent = "Input feild cannot be empty";
//   } else {
//     div.textContent = "Form submitted successfully";
//   }
// });

//! 8. **Change Font Size:**
//     - Add a paragraph with some text. Below the paragraph, add a button labeled “Increase Font Size”. Write a function that increases the font size of the paragraph by 2px every time the button is clicked.

// let { body } = document;

// let p = document.createElement("p");
// p.textContent = "JavaScript";
// p.style.fontSize = "20px";

// body.append(p);

// let btn = document.createElement("button");
// btn.textContent = "Increase Font Size";

// body.append(btn);

// btn.addEventListener("click", () => {
//   fontSize = parseInt(p.style.fontSize);

//   p.style.fontSize = fontSize + 2 + "px";
// });
