// Excursion: callbacks, this, and arrow functions

function caller(callback) {
  callback("Parameter from Caller");
}

function simple(param) {
  console.log(`Simple: ${param}`);
}

caller(simple);
