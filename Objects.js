let student = {
    fName: "Pooja",
    id: 1,
    age: 22,
    country: "Nepal"
}

console.log(student)
console.log(typeof student)  //object

//Accessing the properties of an objec
console.log(student.fName)
console.log(student["age"]);

//crud properties
//Adding new property
student.city = "Dhading";
//student["city"] = "Dhading"
console.log(student)

//Update Existing property
student.age = 23;
console.log(student)

//delete a property
delete student.country;
console.log(student)