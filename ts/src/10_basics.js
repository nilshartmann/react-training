// hack: make sure this module is "private"
export default undefined;

// 1. Type Annotations

let foo;
foo = 'yo';
foo = 10;

// 2. Inference and types on functions

function sayIt(what) {
    return `Saying: ${what}`;
}

const said = sayIt('Hello!');

// 3. Classes

class Sayer {

    constructor(what) {
        this.what = what;
    }

    sayIt() {
        return `Saying: ${this.what}`;
    }
}

const sayer = new Sayer('Hello!');
sayer.sayIt()
sayer.what

// 4. Null Checks

function fooFunc(num) {
    if (num > 10) {
        return 'cool';
    }
    return null;
}

const fooed = fooFunc(11);
fooed.toString();