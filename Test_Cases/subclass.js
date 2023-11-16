class Person{
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }

    getFullName(){
        return "This function will get us a full name later"
    }

}

class Muwaffuq extends Person{
    constructor(name, age, job, driveLiscense){
    super(name, age, job)
    this.driveLiscense = driveLiscense;
    }
}

const moaffag = new Muwaffuq("Muwaffuq", "22", "softwaareEngineer", "unfortunately Don't have one")

// console.log(moaffag.name);
// console.log(moaffag.age);
// console.log(moaffag.job);
// console.log(moaffag.driveLiscense);

// Muwaffuq = new Person("Muwaffuq", "22", "softwaareEngineer");

// console.log(moaffag);
console.log(moaffag.getFullName());
