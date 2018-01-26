class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    resetName() {
        this.name = 'Opa';
    }
}

class Programmer extends Person {
    constructor(name, language) {
        super(name);
        this.language = language;
    }
/*
    resetName(hugo) {
        this.name = hugo;
    }
*/

    resetName() {
        super.resetName();
        this.name = "Mr. " + this.name;
    }

    code() {
        return this.name + " codes in " + this.language;
    }
}

const programmer = new Programmer('Erna', 'JavaScript');
console.log(programmer.code());
console.log(programmer instanceof Programmer); // true
console.log(programmer instanceof Person); // true

programmer.resetName();
console.log(programmer.code());
