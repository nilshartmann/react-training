export default undefined;

// BASIC: Ein generischer Response Typ......

type ErrorResponse = { error: string };
type SuccessResponse<T> = { data: T };
type Response<T> = ErrorResponse | SuccessResponse<T>;

function readData<T>(url: string): Response<T> {
  // @ts-ignore
  return null;
}

const s = readData<string>("/api/string");
const t = readData<number>("/api/number");
