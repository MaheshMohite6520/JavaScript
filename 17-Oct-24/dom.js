//! Node does not have the access to the DOM.
//! We can create whole application is JS without using HTML & CSS beacause we can use HTML & CSS in JS.
//! DOM has 2 parts :
//! 1] DOM API
//! 2] SOM Tree

//! Always follow the convention :
//! Variable name in JS must be similar to the HTML ID.

//! ID should be always unique.
//! If ID is repeated then JS will not apply to both of the ID's, JS will only apply to the first occurence.
//! SCRIPT tag must be declared at the end of the body tag otherwise JS will not apply to HTML element.

let heading = document.getElementById("heading");

heading.style.color = "red";
heading.style.fontSize = "30px";
heading.title = "HTML Heading Tag";

console.log(heading);
console.log(typeof heading);
