export default undefined;

class Point {
    constructor(protected readonly x: number = 0,
        protected readonly y: number = 0) {
    }
}

// we don't want this
// elegant ways of making this illegal?
// 😱🙋‍♀️🙋‍♂️
(Point.prototype as any).add = function() { }

class C {
    name: string = 'Olli';

    printFormatted() {
        // having a fixed string somewhere in the code is not great, better ideas?
        // 😱🙋‍♀️🙋‍♂️
        const formatString = "Hello, %s";
        return formatString.replace("%s", this.name);
    }
}

const c = new C();
console.log(c.printFormatted())


// https://www.typescriptlang.org/docs/handbook/decorators.html
// https://www.typescriptlang.org/docs/handbook/decorators.html#metadata
