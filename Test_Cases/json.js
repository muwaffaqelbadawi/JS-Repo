let person = {
    name: "Muwaffuq"
}
console.log(person)
console.log(typeof person)

person = JSON.stringify(person);
console.log(person)
console.log(typeof person)

person = JSON.parse(person);
console.log(person)
console.log(typeof person)