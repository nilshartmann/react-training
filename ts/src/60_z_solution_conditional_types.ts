export default undefined;

// TASKS 🤔:
// 1. Replace our "Present" type with the "NonNullable" utility type - what is the difference?

// Make sure that the given data-argumet is neither null, nor undefined
export function assertValidData<T>(data: T): asserts data is NonNullable<T> {
  if (!data) {
    throw new Error("Data is not defined?!");
  }
}

declare function getDataFromApi(path: string, wait?: number): null | string;

const x = getDataFromApi("path/can/never/return/null"); // x: string | null
assertValidData(x); // in this fictional use-case we expect
// x is never null

x.toLowerCase(); // ok, string;

// 2. Conditional types allow inferring of types like described here: 
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
// There is a "Flatten" example that that gives you generic parameter of an Array
// Can you write a conditional type that extracts the parameter type of our 'getDataFromApi'?

// comment this out to see that the standard Parameter utility type   
// can handle more than one parameter and also has better checking of generic parameter
type Parameters<T> = T extends (arg: infer U) => any ? U : never;

type parameterType = Parameters<typeof getDataFromApi>
const y: number = 10;
type parameterType2 = Parameters<typeof y>

// - https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype
// - https://www.typescriptlang.org/docs/handbook/2/conditional-types.html 
// - https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types 
// - https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
// - https://github.com/microsoft/TypeScript/pull/40002 
// - https://stackoverflow.com/questions/60067100/why-is-the-infer-keyword-needed-in-typescript 