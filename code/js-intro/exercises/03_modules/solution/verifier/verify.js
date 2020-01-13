export default function verify(candidate, rules) {
  if (!rules) {
    return true;
  }
  for (let rule of rules) {
    if (!rule(candidate)) return false;
  }

  return true;
}
