{
    var c = "var dekl noch da";
    // no hoisting
    // console.log(a);
    // => ReferenceError: a is not defined
    // let a = 10;

    // or
    const a = {
        f1: 10,
        f2: 20
    };
    console.log(a);
    a.f1 = 100;
    // => TypeError: Assignment to constant variable.
}
console.log(c);
console.log(a);


// var array = [1,2,3];

/*
for (var i = 0; i < array.length; i++) {
    var valueAua = array[i];
    console.log(valueAua);
}

console.log(valueAua);
*/
// error
// undefined
// 3

/*
(function() {
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        console.log(value);
    }
})();
console.log(value);
*/
/*

function outer() {
    var used = "Olli";
    var unused = "Weg";
    return (function() {
        return "Text: " + used;
    });
}

var inner = outer();
console.log(inner());
*/

/*
var humanresources = (function () {
    function Resume() {
        console.log('Resume created');
    }

    var Person = function (name) {
        this.name = name;
        this.resume = resumeFactory();
    };

    function personFactory(name) {
        return new Person(name);
    }

    function resumeFactory() {
        return new Resume();
    }

    return {
        Person: Person,
        personFactory: personFactory
    };
    // return Person;
})();
var olli = new humanresources.Person('Olli');
console.log(olli.name);
console.log(olli.resume);

var oma = humanresources.personFactory('Oma');
*/

// TypeError: undefined is not a function
// new humanresources.InternalStuff();