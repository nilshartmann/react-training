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

// also called discriminating unions
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions