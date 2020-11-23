# Tests with material ui and testcafe

## Preparation

### install and start the backend

In  `blog-example/backend-rest`:


```
npm install
npm start
```

### install and start the example react app

In this folder (`6-tests-with-material-ui`)

```
npm install
npm start
```

## Run the Jest-based tests 

They use jsdsom instead of a real browser.

In this folder (`6-tests-with-material-ui`)

```
npm test
```

## Run testcafe tests:

In this folder (`6-tests-with-material-ui`)

```
npm run testcafe
```

(Runs in Chrome, Firefox and Safari in parallel. Adjust browsers in `package.json` to use different ones)


```
npm run testcafe:watch
```

Runs in Testcafe "Live Modus" that doesn't stop the browser after running. It will re-run the tests everytime a test changed.

## Testcases

There are two identical testcafe tests:

`testcaafe/app-test.ts`: uses only testcafe api for selectors
`testcafe/app-test-rtl.ts`: uses the `testcafe-testing-library` query function as Selectors. Note that this are the exact same selectors as used with the JSdom Jest-based test **and** they are 99% identical to the selectors that are used for the non-material-ui version of this app (`steps/6-test`). You can reuse the selectors with different test tools and even if you changing your UI library!

## Slides

From my workshop:

* React Testing Library: https://nilshartmann.github.io/react-training/2020_1211_react.html#/118
* Testcafe Intro: https://nilshartmann.github.io/react-training/2020_1211_react.html#/134

