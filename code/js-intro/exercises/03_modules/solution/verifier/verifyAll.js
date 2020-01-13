import verify from "./verify.js";

export default function verifyAll(values, rules) {
  if (!Array.isArray(values)) {
    values = [values];
  }

  return values.map(value => verify(value, rules));
}
