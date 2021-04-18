export default undefined;

// our data is an array of strings
// ...how can we make sure that this array can only contain strings??
// 😱🙋‍♀️🙋‍♂️
let data: Array<string> = [];
data.push('a')

// data.push(10)


// and how do we incorporate the idea into our response? 
// 😱🙋‍♀️🙋‍♂️

// type SuccessResponse = { data: string };
// type SuccessResponse = { data: string[] };
// type SuccessResponse = { data: Array<string> };

// let response: SuccessResponse = {
//     data: ["a", "b", "c"]
//     // data: ["a", "b", "c", true]
// }

// We can build our own generic type
type ErrorResponse = { error: string };
type SuccessResponse<T> = { data: T };
type Response<T> = ErrorResponse | SuccessResponse<T>;

// let myResponse: Response<string>;
// let myResponse: Response<string[]>;
declare let myResponse: Response<Array<string>>;
if (isSuccessResponse(myResponse)) {
    let data = myResponse.data;

}

// Likewise, generic functions
function isSuccessResponse<T>(candidate: Response<T>): candidate is SuccessResponse<T> {
    return "data" in candidate;
}

// https://www.typescriptlang.org/docs/handbook/generics.html
// https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#generics
// https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
// https://github.com/inversify/InversifyJS/issues/208
