const { NAMES, GREETINGS } = require("./dummydata");
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}
const largeDataSet = [];

let n = 0;
let g = 0;
const CREATE_GREETINGS = 20000;
for (let i = 0; i < CREATE_GREETINGS; i++) {
  largeDataSet.push({
    name: NAMES[n],
    greeting: GREETINGS[g]
  });

  n++;
  if (n === NAMES.length) {
    shuffle(NAMES);
    n = 0;
  }

  g++;
  if (g === GREETINGS.length) {
    shuffle(GREETINGS);
    g = 0;
  }
}

shuffle(largeDataSet);

console.log("Generated largeDataSet with items: " + largeDataSet.length);

largeDataSet.forEach((l, ix) => (l.id = ix));

module.exports = largeDataSet;
