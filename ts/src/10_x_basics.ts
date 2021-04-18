// hack: make sure this module is "private"
export default undefined;

// 1. Type Annotations

// variables can have type information
let foo: string;
foo = 'yo';
// Error: Type 'number' is not assignable to type 'string'.
// @ts-ignore
foo = 10;

// 2. Inference and types on functions

// types can be inferred (return type)
function sayIt(what: string) {
    return `Saying: ${what}`;
}

const said: string = sayIt('Hello!');

// 3. Classes

class Sayer {
    what: string; // mandatory

    constructor(what: string) {
        this.what = what;
    }

    // return type if you want to
    sayIt(): string {
        return `Saying: ${this.what}`;
    }
}

const sayer = new Sayer('Hello!');
sayer.sayIt()
sayer.what

// 4. Null Checks

function fooFunc(num: number) {
    if (num > 10) {
        return 'cool';
    }
    return null;
}

const fooed: string | null = fooFunc(11);
if (fooed) {
    fooed.toString();
}

// or tell the compiler we know better (in this case we actually do)
fooed!.toString();
const certainly = fooed!;

// https://www.typescriptlang.org/docs/handbook/basic-types.html
// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin