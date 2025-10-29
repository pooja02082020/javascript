let fName = "Pooja";
let lName = 'Lohani';
console.log(typeof(fName));     //string
console.log(typeof(lName));     //string

//accessing values of a string
console.log(fName.length);  //no of characters we have in this string
console.log(fName.charAt(2)); 
console.log(fName[2]); 

//string methods
console.log(lName.toUpperCase());
console.log(lName.toLowerCase());
console.log(lName); //Lohani wil be printed becoz string is immutable

//TRIM -REMOVES THE WHITESPACES FROM BOTH ENDS
let name = "         Pooja          ";
console.log(name.trim());

//SLICE METHOD - EXTRACTS A PORTION OF THE STRING
console.log(fName.slice(0,3)); 
console.log(fName.slice(-4,-2)); 


//CONCATENATION
console.log(fName.concat(" ",lName));

//REPLACE
let text = "I like cats BECAUSE cats ARE NOT GREEDY";
console.log(text.replace("cats","dogs"));

//WHAT IF WE WANT TO REPLACE EVERY OCCURENCES
console.log(text.replaceAll("cats","dogs"));

//INDEXOF()
console.log(text.indexOf("cats"));  //7

//CHARAT
console.log(text.charAt(4));


//tEMPERAL LITERALS
console.log("WELCOME"+fName);
//NOW USING TEMPERAL LITERALS
console.log(`HELLO ${fName}`);

let a=6;
let b=10;
console.log(`the sum of a and b is ${a+b}`)


/*
let text = "I like cats BECAUSE
 cats ARE NOT GREEDY";  -- THIS WILL GIVE ERROR INCASE OF ""
 */
let textLiteral = `I like cats BECAUSE
 cats ARE NOT GREEDY`;  //NO ERROR
console.log(textLiteral);