export default undefined;

// TASKS 🤔:
// 1. Replace our "Present" type with the "NonNullable" utility type - what is the difference?

// Present: remove 'undfined' oder 'null' from a type
type Present<T> = T extends undefined ? never : T extends null ? never : T;

// Make sure that the given data-argumet is neither null, nor undefined
export function assertValidData<T>(data: T): asserts data is Present<T> {
  if (!data) {
    throw new Error("Data is not defined?!");
  }
}

declare function getDataFromApi(path: string): null | string;

const x = getDataFromApi("path/can/never/return/null"); // x: string | null
assertValidData(x); // in this fictional use-case we expect
// x is never null

x.toLowerCase(); // ok, string;

// 2. Conditional types allow inferring of types like described here: 
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
// There is a "Flatten" example that that gives you generic parameter of an Array
// Can you write a conditional type that extracts the parameter type of our 'getDataFromApi'?

type Flatten<T> = T extends Array<infer U> ? U : T;
type numberType = Flatten<Array<number>>
type stringType = Flatten<Array<string>>

// - https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype
// - https://www.typescriptlang.org/docs/handbook/2/conditional-types.html 
// - https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types 
// - https://github.com/microsoft/TypeScript/pull/40002 
// - https://stackoverflow.com/questions/60067100/why-is-the-infer-keyword-needed-in-typescript 