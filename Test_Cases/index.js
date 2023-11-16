function Book(title, auther, year){
        this.title = title;
        this.auther = auther;
        this.year = year;
}

Book.prototype.getYear = function(){
    return "Iam the getYear function";
};

function Magazine(title, auther, year, month){
        Book.call(this, title, auther, year);
        this.month = month;
}

// console.log(Magazine.prototype);
// console.log(typeof(Magazine.prototype));

// inherit prototype
Magazine.prototype = Object.create(Book.prototype);
mag1 = new Magazine("mag one", "Jhon Doe", "2018", "Jan");
console.log(mag1.getYear());
// console.log(mag1);
Magazine.prototype.constructor = Magazine;
console.log(mag1);