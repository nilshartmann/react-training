export default undefined;

// we have an api that might return something based on the input
declare function getDataFromApi(path: string): null | string;
// we are sure this returns a string
const x = getDataFromApi("path/can/never/return/null"); // x: string | null

// type assertions are great to narrow down a given type

// Make sure that the given data-argument is neither null, nor undefined
export function assertValidData(data: string | null): asserts data is string {
  if (!data) {
    throw new Error("Data is not defined?!");
  }
}

assertValidData(x);
x.toLowerCase(); // ok, string;

// but can you generalize this example to any type and not only string?
// 😱🙋‍♀️🙋‍♂️


// - https://www.typescriptlang.org/docs/handbook/2/conditional-types.html 
// - https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types 
// - https://github.com/microsoft/TypeScript/pull/40002 
// - https://stackoverflow.com/questions/60067100/why-is-the-infer-keyword-needed-in-typescript 
// - https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types