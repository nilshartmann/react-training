# React production build

For comparsion the `dist` script also builds the non-production version to `dist-dev`.

## Optimizations for production made in this step:

* Do not include `redux-devtools-extension` (see `main.js`)
* Run webpack with `-p` to make sure it minifies everything and includes the production build of react
* Do not let babel process ES6 modules (see `.babelrc`) to make Webpack2 tree shaking work (https://medium.com/modus-create-front-end-development/webpack-2-tree-shaking-configuration-9f1de90f3233)
* Write Source Maps to own file to make distribution `main.js` smaller (see `webpack.config.prod.js`)


