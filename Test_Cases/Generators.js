let newWeakSet = new WeakSet();

const weakSetObj = {
    name: "weakSet",
    type: "unknown"
}

newWeakSet.add(weakSetObj)

console.log(newWeakSet);

global






// let array = [1, 2, 3, 4, 5];


// delete(array[0]);
// array.pop(2);
// array.pop(0);
// array.pop();

// const indexOf1 = {
//     index: array.indexOf(1)
// }

// console.log(indexOf1.index);

// array.pop();

// console.log(array);
// console.log(array.indexOf(5));

// let myMap = new Map([
//     ["name", "muwaffuq"],
//     ["age", "22"],
//     ["job", "softwareEngineer"]
// ]);

// myMap.delete("name");

// console.log(myMap);
// console.log(myMap.size);
// console.log(typeof(myMap));

// myMap.set("birthDay", "Jan/13/97")
// myMap.forEach(element => {
//     console.log(element);
// })

/*
const obj = {
    name: "Sara",
    age: "20",
    job: "computerScience"
}

for (element in obj) {
    console.log(element);
};

// let array = [1, 2, 3, 4, 5];
// mySet = new Set(array);

// mySet.delete(2)

// console.log(mySet);

// array.push("string");
// array.push({
//     key: "val",
//     func: () => {
//         return "Iam afunc";
//     }
// });
// array.push(fun = () => {
//     return "what i'm donig";
// })

// console.log(typeof(array));
// console.log(mySet);
// console.log(typeof(mySet));

// mySet.add("string");
// mySet.add({ key: "val" });
// mySet.add([]);
// mySet.delete(5);
// mySet.add(func = () => {
//     return "I dont know what i'm doing";
// })


// console.log(mySet);
// console.log(mySet.size);

// function* gen() {
//     const array = [1, 2, 3, 4, 5, 6, 7];
// }

// G = gen()

// function another() {
//     const array = [1, 2, 3, 4, 5];
// }

// A = another()

// console.log(typeof(A.array));

// console.log(G.array.next());

// console.log(typeof(G.array))

// console.log(typeof(G));

/*
const someNewObjects = {
    [Symbol.iterator]: mainObject = () => {
        return {
            New: () => {
                const something = Math.round() > 0.75
                if (!something)
                    return {
                        value: makeSomething(),
                        done: false
                    }
                return { done: true }
            }
        }
    }
}

const stuff = [
    "computer",
    "headphone",
    "cellPhone"
]

for (const char of stuff[0]) {
    console.log(char);
}

require
// const iterMethod = stuff.__iterator__;
// console.log(iterMethod);
// List = [1,2,3,4,5]
// List_iterarator = iter(List)
// const iter = stuff[Symbol.iterator]();
// console.log(iter);

// const iter = stuff[Symbol.iterator];
// console.log(iter);

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

const stuff = [
    "computer",
    "headphone",
    "cellPhone"
]

for (const something of stuff) {
    // console.log(something);
    // console.log(something);
}

// console.log(typeof(stuff));

function* generatorFunction() {
    yield "Iam the firs yielding for now";
    yield "Iam the sec";
    yield "Iam the third";
    yield "Iam the fourth";
}

const G = generatorFunction();
for (const i of G) {
    console.log(i);
};

// for (const something of G) {
//     console.log(something);
// }

// console.log(G.next());
// console.log(G.next());
// console.log(G.next());
// console.log(G.next());
// console.log(G.next());
// console.log(G.next());
// console.log(G.next());
*/