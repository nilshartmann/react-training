export default undefined;

// TASK 🤔:
// Process the return of type unknown so that you can work with it reasonably.

function getSomething(what: string): unknown {
  if (what === "beer") {
    return {
      type: "bottles",
      amount: 10
    };
  } else {
    return "n/a";
  }
}

// const what = 'ale';
const what = "beer";
const something = getSomething(what);
// 😱 THIS ONE DOESN'T WORK, HOW DO WE GET IT TO WORK?
// console.log(`We have ${something.amount} ${something.type} of ${what}`)

// https://www.typescriptlang.org/play?q=241#example/unknown-and-never
// https://www.typescriptlang.org/play?q=29#example/type-guards
