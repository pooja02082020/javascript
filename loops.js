// for (let i = 0; i < 10; i++) {
    // console.log(i);
// }
// 
// for (let i = 0; i < 10; i++) {
//    console.log("hello world");
// }
//for (initialization;Condition;increment/updation)

//Calculate the sum of first 10 numbers
let sum =0;
for(let i=1;i<=10;i++){
    sum+=i; //sum = sum+i;
   // console.log(sum);
}
console.log("The sum of the first 10 numbers is ",sum);


//while loop
//syntax
// let i = 1;
// while (i <= 10) {
//   console.log("Hello World");
//   i++;
// }
// 
//DO WHILE LOOP
// let i =1;
// do{
    // console.log("Hello World"); 
    // i++;
// }while (i <= 10)



    let i =1;
do{
    console.log("Hello World");
    i++;
}while (i <= 0)  //even if condition is false the code will run atleast once before checking the condition

//NaN
let a="something";
console.log(a/2);

console.log(typeof(a/2)); //NaN itself is a type of number


//prompt()
let age = prompt("Enter your age:");
console.log(age);
console.log(typeof(age));