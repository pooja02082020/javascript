//fUNCTION DEFINITION OT FUNCTIO DECLARATION
//function FUNCTION_NAME(){ CODE TO EXECUTE}

function greet() {
    for (let i = 0; i <= 1; i++) {
        console.log("HELLO WORLD");
    }

}

//FUNCTION CALL OR INVOCATION
greet();

//FUNCTION PARAMETERS
function greet1(fName,lName){ 
    console.log("WELCOME ",fName,lName);
}

greet1("POOJA","Lohani");


//func to add two numbers
function add(a,b){
    console.log("The sum of the numbers is: ",(a+b));
}

add(12,4);

function addition(a,b){
    return a+b;
}

//addition(10,4); SO WE HAVE TO USE CONSOLE.LOG TO SEE THE RESULT

console.log(addition(10,4));

//we can also do this
let result =addition(4,65);
console.log(result);


function number(n){
    console.log("Before return statement");
    return(n**2)
    console.log("After return statement");
}
console.log("The value of n is",number(4));


//anonymous functions
let greet2= function(){
    console.log("Hello and Welcome");
}

//arrow function
greet2();

let z=()=>{
    console.log("Hello from arrow function")
}

z();


//can have parameter
const gre = name=>{
    return "Welcome "+name;
}
const callingName =gre("Pooja");
console.log(callingName);

//the above code can be written as 
/* 
//can have parameter
const gre = name=> "Welcome "+name;

const callingName =gre("Pooja");
console.log(callingName);

*/

let square = a=> //if funstion has single parameter can omit () and if it has single line of code in code - can omit return keyword and{} parenthesis
     a**2;

console.log(square(2));