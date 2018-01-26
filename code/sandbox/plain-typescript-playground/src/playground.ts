type Person = {
  name: string;
  lastname: string;
};

function getGreetingFor(p: Person): string {
  return `Hello, ${p.name} ${p.lastname}`;
}

getGreetingFor({ name: "Klaus", lastname: "Mueller" });

// ERROR: Property 'lastname' is missing in type '{ name: string; }'.
// getGreetingFor({ name: 'Klaus ' });

// ERROR: Object literal may only specify known properties, and 'age' does not exist in type 'Person'.
// getGreetingFor({ name: 'Klaus ', lastname: 'Mueller', age: 66 });
