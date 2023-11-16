asyncForEach = (array, cb) => {
    array.forEach(function() {
        setTimeout(cb, 0)
    })
}


asyncForEach([1, 2, 3, 4, 5], function(i) {
    console.log("async", i);
})


// asyncForEach()


// console.log(typeof []);


// console.log("Hi");

// setTimeout(a = () => {
//     console.log("waiting");
// }, 00);



// console.log("Iam");









/*
foo = () => {
    foo()
}

foo()

sub = (a, b) => {
    return a - b;
})

subtrctFromTen = (num) => {
    return sub(10, num);
}

subTen = (num) => {
    let subTEn = subtrctFromTen(num);
    console.log(subTEn)
}

subTen(5);
*/