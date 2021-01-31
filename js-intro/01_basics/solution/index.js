console.log("Please edit index.js");

function helloWorld(name) {
  if (typeof name !== "string") {
    return null;
  }

  return `Hallo, ${name}`;
}

console.log(helloWorld()); // ""
console.log(helloWorld(null)); // ""
console.log(helloWorld("Susi")); // Hallo, Susi

// ZUSTATZ AUFGABE: ---------------------------------------
function helloWorldZusatz(name) {
  if (typeof name === "function") {
    name = name();
  }
  if (typeof name !== "string") {
    return null;
  }

  return `Hallo, ${name}`;
}

function susi() {
  return "Susi";
}

console.log(helloWorldZusatz(susi)); // Hallo, Susi
