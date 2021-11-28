export default undefined;

// Example: fetch function

function fetch(): any {
  return {};
}

// what would be a better return type for fetch maybe?

function betterFetch() {
  return {};
}

// Example, API conventions:
//   type ErrorResponse = { error: string };
//   type SuccessResponse = { data: string };
//   type Response = ErrorResponse | SuccessResponse;

// idea: write an abstraction "apiFetch" on top of betterFetch to
//  we make sure we received the correct result

// idea 2: how can users of apiFetch distinguish between
//    ErrorResponse and SuccessResponse
