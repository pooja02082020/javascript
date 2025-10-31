function sayHello(){
    alert("hello User")
}

const button =document.getElementById("btn")
// button.onclick = ()=>{
    // button.style.backgroundColor ="yellow"
    // button.style.color ="red"
    // button.style.border = "2px solid black"
    // button.style.height ="120px"
    // div.textContent = "You clicked me"
// }

//event object
button.onclick = (event)=>{
    console.log(event)
    //console.log(event.)
}

//addEventListener()
let div = document.querySelector("#box")
div.addEventListener("click",()=>{
    // alert("hello!!")
    div.style.border ="4px solid blue"
    div.style.width = "400px"
})

let newFunction = ()=>{
    div.style.height ="200px"
}

div.addEventListener("click",newFunction)

//div.removeEventListener("click",newFunction);