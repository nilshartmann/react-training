export default undefined;

// TASK 🤔:
// implement say-Function (see below)

type SayHello = {
  action: "SAY_HELLO";
  msg: string;
};

class SayGoodbye {
  goodbye() {
    return "goodbye";
  }
}

type SayGoodMorning = {};

function say(action: SayHello | SayGoodbye) {
  //   IMPLEMENT THIS FUNCTION:
  //   1. if it's invoked with a 'SayHello' object return its msg
  //   2. if it's invoked with an instance of SayGoodybe, invoke goodbye() and return it's return value
  //   throw Error in any other case... BUT
  //     make sure you get a COMILE error if you enhance the signature of "say"-function to:
  //     function say(action: SayHello | SayGoodbye | SayGoodMorning)
}
