export default undefined;

// TASK 🤔:
//  - Change return type to 'unknown'
//  - Fix compile error

function getSomething(what: string): any {
  if (what === "beer") {
    return {
      type: "bottles",
      amount: 10
    };
  } else {
    return "no " + what;
  }
}

// const what = 'ale';
const what = "beer";
const something = getSomething(what);

// 😱 1. THIS ONE DOESN'T WORK, HOW DO WE GET IT TO WORK?
//       Can you write a type predicate function, that makes the following line work:
console.log(`We have ${something.amount} ${something.type} of ${what}`);

//

//  2.

// https://www.typescriptlang.org/play?q=241#example/unknown-and-never
// https://www.typescriptlang.org/play?q=29#example/type-guards
