var Car = function(name, color, logo, type){
       this.name = name;
       this.color = color;
       this.logo = logo;
       this.type = type;
}

Car.prototype._function = function(){
       console.log("Iam the old function that been inside the constructur but now i'm outside it or in fact inside a protptype hurreh!!");
}

const Marcides = new Car("ghost", "black", "marcides", "benz C-class");
const Toyota = new Car("lux", "black", "TOYOTA", "vain");
const Person = new Car("a", "b", "c", "d");

console.log(Toyota);
Toyota._function();

// const func = Person._function();
// console.log(Pnerson);
// console.log(Person._function);
// console.log(Person._function());
/*
console.log(Marcides.name);
console.log(Marcides.color);
console.log(Marcides.logo);
console.log(Marcides.type);
console.log(Marcides);
console.log(typeof(Marcides));
*/
// console.log(Marcides.values);
/*
for(Keys in Marcides){
       console.log(Marcides.Keys)

for(i in Range(10)){
    console.log(i);
};

const Afunc = function(){
       return "Iam a func function"
}

const Bfunc = void function(){
       return "why i'm not a function someone explain that to me!!"
}

console.log(Afunc());
console.log(Bfunc);
console.log(typeof(Afunc));

const array = [];
console.log(typeof(array));

const _Array = toString(array);
console.log(typeof(_Array));

// console.log(_Array);
*/