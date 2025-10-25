//String
let fName = "Pooja";
console.log(typeof(fName));
let age = "24";
console.log(typeof(age));

//number
let age1 = 24.7;
console.log(typeof(age1));

//boolean
let isLoggedIn = true;
let hasAccesss =false;
console.log(typeof(isLoggedIn));

//undefined --later we might assign the value
let age2;
//console.log(typeof(age2)); //when we declare a vRIAVLE but we haven't assigned variable to any --undefined

//null
let user=null;  //intended absence of value
console.log(user);

//bigint
let BigNumber = 3333333333333333333333333333333333333333333333333334354n;
console.log(typeof(BigNumber));
console.log(BigNumber);

let x= BigInt("435656743576367654376543");
console.log(x);

//symbol
let id = Symbol("id");
console.log(typeof(id));
