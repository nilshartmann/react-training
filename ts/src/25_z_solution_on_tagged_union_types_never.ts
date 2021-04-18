export default undefined;

type SayHello = {
  action: "SAY_HELLO";
  msg: string;
};

class SayGoodbye {
  goodbye() {
    return "goodbye";
  }
}

// add this to say-Signature to see invalidAction is showing an error
type SayGoodMorning = {};

function say(action: SayHello | SayGoodbye) {
  if (action instanceof SayGoodbye) {
    return action.goodbye();
  } else if ("msg" in action) {
    return action.msg;
  }

  invalidAction(action);
}

function invalidAction(action: never) {
  throw new Error("invalid!");
}
