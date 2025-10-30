let arrayName = [];

let fruits = ["mango", "pear", "banana"];
console.log(fruits);
console.log(fruits[3]);
console.log(fruits.length);

fruits[1] = "Grapes";
console.log(fruits);


for (let i = 0; i < fruits.length; i++) {
    console.log(`The fruit at index ${i} is ${fruits[i]}`);
}

//for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}

let text = "Some thing"
let size = 0;
for (let char of text) {
    console.log(char)
    size++;
}
console.log(size);

//Simple Array Methods
//push()
fruits.push("grapes"); //add an item to last element
console.log(fruits);

fruits.pop();  //remove last item from an array
console.log(fruits);


//unshift
fruits.unshift("kiwi");  //add an item to first element
console.log(fruits);

//shift
fruits.shift();  //removes first item from an array
console.log(fruits);

let numbers = [1, 2, 3, 4];
let concatt = fruits.concat(numbers)
//concat -- merge two diffewrent arrays
console.log(concatt);

//slice -copy of portion of array 
let newArr = concatt.slice(0, 4);
console.log(newArr);

//tostring
let newAr = concatt.toString(0, 4);
console.log(newAr);  //converts it to string

//splice()
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);

//also we can add 
fruits.splice(2, 1, "dragon fruit");
console.log(fruits);

fruits.splice(1, 0, "grapes"); //if we don't wanna delete just add item to index 1
console.log(fruits);


//forEach() method
//let fruits = [ 'mango', 'grapes', 'pear', 'dragon fruit' ]
fruits.forEach(function (currentValue, Index, Array) {
    console.log(`${currentValue} is at index ${Index} in the array ${Array}`);
})

fruits.forEach(function (curr, index) {
    console.log(`${curr} is at index ${index}`);
})

fruits.forEach(function (curr) {
    console.log(`${curr}`);
})

fruits.forEach((fruit, i, array) => { //we caan also use arrow function
    console.log(fruit, "at index: ", i)
})

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newArray = nums.forEach((num) => {
    console.log(num * num);
})
console.log(newArray); //undefined output as foreach doesnot return new array

//Map() method
let newArrFromMap = nums.map((currentValue, index, array) => {
    return currentValue * 2;
})
console.log("Original Array", nums);
console.log("New Array from Map", newArrFromMap);

//Filter() method
//let nums = [1, 2, 3, 4, 5, 6,7,8,9]

//nums.filter((currentValue, index, array) => {});
let newFilteredArr = nums.filter((num) => {
    return num % 2 === 0;
    //return num>5
})
console.log("Original Array", nums);
console.log("New Array from FilteredArray", newFilteredArr);

let names = ["Birendra", "Pooja", "Sushma", "Bhuwana", "Abhisekh", "John", "Sarah"];
let longNames = names.filter((name) => {
    return name.length > 5
})

console.log(names);
console.log(longNames);

//reduce() method
// Array.reduce((accumulator,currentValue,index,Array)=>{
//code to run
// }, initialValue)

const number = [2, 3, 5, 6, 10, 20, 30];
let initialValue = 0;
let total = number.reduce((acc, curr) => {
    return acc + curr;
}, initialValue);

console.log(total);
// 

//to find largest number from array
const numb = [2, 3, 5, 4, 55, 6, 10, 20, 30];
let initialValue1 = 0;
let largest = numb.reduce((acc, curr) => {
    return acc>curr?acc:curr  //checks if acc is greateer than curr , if acc>curr get value of acc if not greater get the value of curr
}, initialValue1)

console.log(largest);

//to find the smallest number using reduce method
let initialVal = 100;
let smallest = numb.reduce((acc, curr) => {
    return acc<curr?acc:curr  //checks if ac
}, initialVal)
console.log(smallest);