// console.log(1 === "1")
// console.log("1" === "1")
// console.log("" === " ")


let obj = [
    { id: "Muwaffug", name: "moyassar" },
    { id: "22", name: "muwazzur" },
    { id: "softwareEngineer", name: "maeen" }
]

let makeTree = (obj, name) => {
    let node = {}
    obj
        .filter(element => element.name === name)
        .forEach(element => obj[element.id])
    return node
}

console.log(
    JSON.stringify(
        makeTree(obj, null), null, 2)
)


/*

let max = (num) => {
    if (num === 0) return;
    console.log(num)
    max(num - 1)
}

max(10)


// console.log("poop");


const object = {
    getName: function(){
        return "Ia the name";
    }
};

// const obj = Object.create(object);
// obj.title = "Book One";
// obj.auther = "Jhon Doe";
// obj.year = "2013";


const obj = Object.create(object, {
    title: {value:"book one"},
    author: {value:"Jhon Doe"},
    year: {value:"2013"}
}); 
 

console.log(obj);
*/