export default undefined;

// Present: remove 'undfined' oder 'null' from a type
type Present<T> = T extends undefined ? never : T extends null ? never : T;

// Make sure that the given data-argument is neither null, nor undefined
export function assertValidData<T>(data: T): asserts data is Present<T> {
  if (!data) {
    throw new Error("Data is not defined?!");
  }
}

// EXAMPLE 1:
declare function getDataFromApi(path: string): null | string;

const x = getDataFromApi("path/can/never/return/null"); // x: string | null
assertValidData(x); // in this fictional use-case we expect
// x is never null

x.toLowerCase(); // ok, string;

// can we get the parametes of a function?

// 1. check if we have a function:
type IsFunction<T> = T extends (args: any) => any ? string : never;
type Yes = IsFunction<typeof getDataFromApi>;
type No = IsFunction<string>;

// get the parameters:
type Parameters<T> = T extends (args: infer U) => any ? U : never;
type LetsSee = Parameters<typeof getDataFromApi>;

// 2. ...and the return type?
type ReturnValue<T> = T extends (args: any) => infer U ? U : never;

type ShoudBeStringOrNull = ReturnValue<typeof getDataFromApi>;

// In real life, better use built-in types:
// Parametes or ReturnType
