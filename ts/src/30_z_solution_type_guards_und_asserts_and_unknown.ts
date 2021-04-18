export default undefined;

type Something = {
  type: string;
  amount: number;
};

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
if (isAvailable(something)) {
  console.log(`We have ${something.amount} ${something.type} of ${what}`);
} else {
  console.log(`We have no ${what}`);
}

function isAvailable(candidate: any): candidate is Something {
  return typeof candidate === "object" && candidate.type;
}

// https://www.typescriptlang.org/play?q=241#example/unknown-and-never
// https://www.typescriptlang.org/play?q=29#example/type-guards
