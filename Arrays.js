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

let nums = [1, 2, 3, 4]
nums.forEach((num) => {
    console.log(num * num);
})