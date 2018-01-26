// requests need requestAnimationFrame https://reactjs.org/docs/javascript-environment-requirements.html
// needs to be in it's own file until jest ships with it: https://github.com/facebook/jest/issues/4545#issuecomment-332762365
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};
