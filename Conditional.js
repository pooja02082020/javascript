// if (condition){
//code to be exectuted if the condition is true
// }

// let age =2;
// if(age>18){
    // console.log("The user is an adult");
// }
// if(age<18){
    // console.log("Not an adult")
// }
// 
// console.log("Hello World")

// let age =10;
// if(age>18){
    // console.log("You can vote");
// }
// else
    // console.log("You can't vote")

let marks = 85;
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=80 && marks>=60){
    console.log("Grade B")
}
else{
    console.log("not qualified");
}

//ternary
let age =19;
age>18?console.log("you can vote"):console.log("You can't vote");

let a=10;
a>12?console.log("true"):a===10?console.log("a is exactly 10"):console.log("a is not 10");

let day="Monday";
switch(day){
case "Monday":
    console.log("Monday");
    break;
case "Tuesday":
    console.log("Tuesday");
    break;
case "Wed":
    console.log("Wednesday");
    break;
case "Thrusday":
    console.log("Thrusday");
    break;
case "friday":
    console.log("friday");
    break;
default:
    console.log("Weekends");
    break;
}

