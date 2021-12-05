export default undefined;

// Another Greeter...

type TranslateToEnglish = {
  translation: "DE_EN";
  germanString: string;
};

type TranslateToGerman = {
  translation: "EN_DE";
  englishString: string;
};

type Translate = TranslateToEnglish | TranslateToGerman;

function translate(msg: Translate) {
  // how can we access the strings to translate?
  // what happens if we extend possible Translations?
}

// Info (tagged union types werden auch "discriminating unions" genannt):
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
// Never Type: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type
