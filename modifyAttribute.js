let para = document.querySelector("p")
console.log(para.getAttribute("id"))
console.log(para.getAttribute("style"))

//set 
//console.log(para.setAttribute("class","paraclass"))
para.setAttribute("style", "background-color: red;");
//has atrribute

//para.remove
para.removeAttribute("id");

let heading = document.querySelector("#heading")
// heading.style.backgroundColor = "red";
// heading.style.color = "white";

heading.classList.add("newClass")