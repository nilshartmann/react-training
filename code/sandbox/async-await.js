// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

let count = 0;
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      count++;
      console.log(`Count: ${count}`);
      resolve(x + count);
    }, 2000);
  });
}

async function add1(x) {
  const a = resolveAfter2Seconds(20);
  const b = resolveAfter2Seconds(30);
  return x + (await a) + (await b);
}

// add1(10).then(v => {
//     console.log(v);  // prints 60 after 2 seconds.
// });

async function add2(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

// add2(10).then(v => {
//     console.log(v);  // prints 60 after 4 seconds.
// });

const add3 = async x => x + (await resolveAfter2Seconds(20)) + (await resolveAfter2Seconds(30));

// add3(10).then(v => {
//     console.log(v);  // prints 60 after 4 seconds.
// });

function rejectAfter2Seconds(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      count++;
      console.log(`Count: ${count}`);
      reject(x + count);
    }, 2000);
  });
}

async function main() {
  try {
    const add4 = async x => await rejectAfter2Seconds(30);

    const result = await add4(10);
    console.log(result);
  } catch (unhandled) {
    console.warn(unhandled);
  }
}

main();
