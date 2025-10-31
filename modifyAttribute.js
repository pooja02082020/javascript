// let para = document.querySelector("p")
// console.log(para.getAttribute("id"))
// console.log(para.getAttribute("style"))

// //set 
// //console.log(para.setAttribute("class","paraclass"))
// para.setAttribute("style", "background-color: red;");
// //has atrribute

// //para.remove
// para.removeAttribute("id");

// let heading = document.querySelector("#heading")
// // heading.style.backgroundColor = "red";
// // heading.style.color = "white";

// heading.classList.add("newClass")

//inserting an Element
let target = document.querySelector("#list")
let newElement = document.createElement("li")
newElement.textContent="React"
target.append(newElement)

//Deleting an item
let removeItem = document.querySelector("li");
removeItem.remove();  // removes first element
