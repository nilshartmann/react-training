export default undefined;

type SayHello = {
  action: "SAY_HELLO";
  msg: string;
};

interface SayGoodbye {
  action: "SAY_GOODBYE";
  goodbye(): string;
}

// add this to say-Signature to see invalidAction is showing an error
type SayGoodMorning = {
  action: "SAY_GOOD_MORNING";
};

function say(action: SayHello | SayGoodbye | SayGoodMorning) {
  //   Implementiere diese Funktion:
  //  -------------------------------
  if (action.action === "SAY_GOODBYE") {
    //   2. wenn mit einer Instanz der SayGoodybe-Klasse aufgerufen wird, rufe darauf goodbye() auf
    //      und gib den Rückgabewert von 'goodbye' zurück
    return action.goodbye();
  } else if (action.action === "SAY_HELLO") {
    //   1. wenn die Funktion mit einem 'SayHello'-Objekt aufgerufen wird, gib dessen 'msg' zurück
    return action.msg;
  }

  //   In allen anderen Fällen wirf einen Error (throw new Error("Boom")), ABER:
  //     stelle sicher, dass Du einen Compile-Fehler bekommst, wenn Du die Signatur der Funktion
  //     um SayGoodMorning erweiterst:
  //            function say(action: SayHello | SayGoodbye | SayGoodMorning)

  invalidAction(action);
}

function invalidAction(action: never) {
  throw new Error("invalid!");
}

// Infos:
// 'in' narrowing: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing
// instanceof-narrowing: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing
// Der 'never'-Type: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type
