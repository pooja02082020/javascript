// console.log(window)  //browser automatically creates window object
// window.console.log("Hello");
// window.alert("Hello");

// console.dir(window.document)

const heading = document.getElementById("heading");
console.log(heading)

let boxes = document.getElementsByClassName("boxes");
console.log(boxes)

let getByTags = document.getElementsByTagName("div");
console.log(getByTags)

let div = document.querySelector(".boxes");  //for getting classname
//let div = document.querySelector("div");  //for getting tagname
console.log(div)

//query selector all
let divs = document.querySelectorAll(".boxes");
console.log(divs);

//DOM properties
//innerText
let para =document.querySelector("#ptag")
console.log(para.innerText);