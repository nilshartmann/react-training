
/*
public class Person {
    public String name;
    public Person(String name) {
        this.name = name;
    }
    public Person() {
        this.name = "Opa";
    }

    public String getName() {
        return this.name;
    }
}
*/

/*
class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}
*/

function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
};

class Programmer extends Person {

    constructor(name, sprache) {
        super(name);
        this.sprache = sprache;
    }

    program() {
        console.log(this.getName() + " kann " + this.sprache);
    }
}

var olli = new Programmer('Olli', 'Cobol');
olli.getName() === 'Olli';
console.log(olli.program());
// console.log(Programmer.prototype.program);

