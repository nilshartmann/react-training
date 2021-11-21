export default undefined;

type SuccessProps = {
  msg: string;
  code: number;
};

type ErrorProps = {
  error: string;
};


function getMessage(p: SuccessProps | ErrorProps) {

  // Frage 1: wie arbeiten wir hier mit p?
  //          Unterscheidung zwischen SuccessProps und ErrorProps
  
}

// 😊 Gut: SuccessProps; kein TS-Fehler
getMessage({
  code: 123,
  msg: "Hallo",
})

// 😊 Gut: ErrorProps; kein TS-Fehler
getMessage({
  error: "xxx"
} )

// 😢 Doof: Success und ErrorProps; kein TS-Fehler... warum?
//          - Ist das überhaupt ein Problem? 🤔
//          - falls ja: wie lösen wir es? 🤔
getMessage({
  code: 123,
  msg: "Hallo",
  error: "xxx"
} )

// https://stackoverflow.com/a/52678379