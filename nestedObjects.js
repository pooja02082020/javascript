let student = {
    fName: "Pooja",
    id: 1,
    age: 22,
    country: "Nepal",
    address:{
        city:"DH",
        zip:1234
    }
}

console.log(student.address.city)

student.address.state ="Bagmati";
console.log(student)