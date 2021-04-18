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

// REAL-LIVE MOTIVATION:

// In GraphQL you get a response object, that (simplified)  has an error OR data, but not both:
type GraphQLResponse<T> = { error?: string; data?: T };

// imagine this is our request function that returns a response
function runGraphQLQuery<T>(): GraphQLResponse<T> {
  // ignore this, assume this is graphql internal implementation
  return { error: "" };
}

// GraphQLResponse and runGraphQLQuery are both parts of graphql (simplified)

// This is our business code, that useses the function and the type:

// our business data...
type Person = { lastname: string };

// Run a Query and expect a Person to be returned (or error)
const { error, data } = runGraphQLQuery<Person>();

// check for error
if (error) {
  // handle error
} else {
  // in this location we KNOW FOR SURE that there is a data object, because
  // according to the API description, if there is NO data, then error would be
  // set and our code would go through the first if-branch
  //
  console.log(error); // error still  string | undefined
  console.log(data); // still (Person | undefined)

  assertValidData(data);
  // if for some reason data would be null or undefined
  // (for example due to a bug in graphql)
  // assertValidData throws an exception and this is
  // never executed
  console.log(data.lastname); // data is Person
}

// - https://www.typescriptlang.org/docs/handbook/2/conditional-types.html 
// - https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types 
// - https://github.com/microsoft/TypeScript/pull/40002 
// - https://stackoverflow.com/questions/60067100/why-is-the-infer-keyword-needed-in-typescript 
// - https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types