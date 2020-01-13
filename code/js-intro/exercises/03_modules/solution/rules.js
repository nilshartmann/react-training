export function isDefined(candidate) {
  return candidate !== null && candidate !== undefined;
}

export function isNonEmpty(candidate) {
  return typeof candidate === "string" && candidate.length > 0;
}
