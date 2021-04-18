export default undefined;

// Another Greeter...

type TranslateToEnglish = {
  translation: "DE_EN";

  // note the property name:
  germanString: string;
};

type TranslateToGerman = {
  translation: "EN_DE";

  // note the property name:
  englishString: string;
};

type Translate = TranslateToEnglish | TranslateToGerman;

function translate(msg: Translate) {
  // how can we access the strings to translate?
  // what happens if we extend possible Translations, eg. FR_FR
}

// also called discriminating unions
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions
