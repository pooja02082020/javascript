let arrayName=[];

let fruits = ["mango","orange","pear","banana"];
console.log(fruits);
console.log(fruits[3]);
console.log(fruits.length);

fruits[1]="Grapes";
console.log(fruits);


for(let i=0;i<fruits.length;i++){
    console.log(`The fruit at index ${i} is ${fruits[i]}`);
}

//for...of loop
for(let fruit of fruits){
    console.log(fruit);
}