export default undefined;

// Another Greeter...

// how can we access the strings to translate?
// => add a 'tag' that is available in all Types
type TranslateToEnglish = {
  translation: "DE_EN";
  germanString: string;
};

type TranslateToGerman = {
  translation: "EN_DE";
  englishString: string;
};

type TranslateToFrench = {
  translation: "EN_FR";
  englishString: string;
};

type Translate = TranslateToEnglish | TranslateToGerman;
// add TranslateToFrensh to Translate and see what happens...

function translate(msg: Translate) {
  switch (msg.translation) {
    case "DE_EN":
      return msg.germanString;
    case "EN_DE":
      return msg.englishString;
  }

  // what happens if we extend possible Translations?
  invalidTranslation(msg);
}

function invalidTranslation(msg: never) {
  throw new Error("Invalid Msg Object!");
}

// Info (tagged union types werden auch "discriminating unions" genannt):
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
// Never Type: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type
