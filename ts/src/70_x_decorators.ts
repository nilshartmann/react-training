export default undefined;

// decorators allow for additional information or modification for classes and class members 

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Point {
    constructor(protected readonly x: number = 0,
        protected readonly y: number = 0) {
    }
}

// class is sealed, will throw at runtime
(Point.prototype as any).add = function() { }

// meta data is additional data, available at runtime
// still needs polyfill, will not work in playground

import "reflect-metadata";

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
  }
class C {
    @format("Hello, %s")
    name: string = 'Olli';

    printFormatted() {
        // having a fixed string somewhere in the code is not great, better ideas?
        // 😱🙋‍♀️🙋‍♂️
        const formatString = getFormat(this, "name");
        return formatString.replace("%s", this.name);
    }
}

const c = new C();
console.log(c.printFormatted())

// https://www.typescriptlang.org/docs/handbook/decorators.html
// https://www.typescriptlang.org/docs/handbook/decorators.html#metadata

