export default undefined;

// TASKS 🤔:
// 1. use the given taxonomy of animals and create an array that can contain all of them and only them.
// 2. Create an array that should contain only cats. Can you find a way to sneak in a dog?

abstract class Animal {
}

class Dog extends Animal {
    bark(): void {
        console.log('bark')
    }
}

class Cat extends Animal {
    meow(): void {
        console.log('meow')
    }
}


// https://www.typescriptlang.org/docs/handbook/generics.html