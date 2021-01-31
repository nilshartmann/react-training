export default function createPerson({ name, age = 18 }, additionalData) {
  return { name, age, ...additionalData };
}
