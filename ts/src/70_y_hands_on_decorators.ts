export default undefined;

import "reflect-metadata";

// TASKS 🤔:
// 1. Use the shown "validate" decorator and apply it to a custom class. Caution: The validated types must not be primitive data types. 
// Use the class in such a way that it throws a runtime error. 
// 2. write a "frozen" decorator that applies Object.freeze to a class. Use the class in such a way that it throws a runtime error.

class Order {
    private _type: String;
    private _amount: Number;

    constructor(type: String, amount: Number) {
        this._type = type;
        this._amount = amount;
    }

    set type(value: String) {
        this._type = value
    }

    set amount(value: Number) {
        this._amount = value
    }

}

function validate<T>(
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>
) {
    let set = descriptor.set;
    descriptor.set = function (value: T) {
        let type = Reflect.getMetadata("design:type", target, propertyKey);
        if (!(value instanceof type)) {
            throw new TypeError("Invalid type.");
        }
        set!.call(target, value);
    };
}


const order: any = new Order('beer', 10);
order.type = new String("ale");
order.type = false; // this should not be possible at runtime

// Links
// https://www.typescriptlang.org/docs/handbook/decorators.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze