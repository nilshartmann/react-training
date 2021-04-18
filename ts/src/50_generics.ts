export default undefined;

// our data is an array of strings
// ...how can we make sure that this array can only contain strings??
// 😱🙋‍♀️🙋‍♂️
let data = [];
data.push('a')
data.push(10)

// and how do we incorporate the idea into our response? 
// 😱🙋‍♀️🙋‍♂️
let response = {
    // data: ["a", "b", "c"]
    data: ["a", "b", "c", true]
}

// Not every response returns an array of strings, how can we generalize this? 
// 😱🙋‍♀️🙋‍♂️

type ErrorResponse = { error: string };
type SuccessResponse = { data: string };
type Response = ErrorResponse | SuccessResponse;

function isSuccessResponse(candidate: Response): candidate is SuccessResponse {
    return "data" in candidate;
  }
  
// https://www.typescriptlang.org/docs/handbook/generics.html
// https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#generics
// https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
// https://github.com/inversify/InversifyJS/issues/208
