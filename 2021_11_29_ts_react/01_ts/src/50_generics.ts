export default undefined;

// BASIC: Ein generischer Response Typ......

type ErrorResponse = { error: string };
type SuccessResponse = { data: string };
type Response = ErrorResponse | SuccessResponse;

function readData(url: string): Response {
  // @ts-ignore
  return null;
}

const s = readData("/api/string");
const t = readData("/api/number");
