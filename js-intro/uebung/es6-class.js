class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

const olli = new Person('Olli');
console.log(olli.name);
