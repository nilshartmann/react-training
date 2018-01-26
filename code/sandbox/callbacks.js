// Excursion: callbacks, this, and arrow functions

function simple(param) {
  console.log(`Simple: ${param}`);
}

// caller(simple());
// caller(simple);

function caller(callback) {
  // console.log(callback);
  callback("Parameter from Caller");
}

class Researcher {
  constructor(name) {
    this.name = name;
  }
  research(param) {
    console.log(`${this.name} is researching, param was ${param}`);
  }
  doCallback() {
    // this.research('Param from doCallback');
    let callback = param => this.research(param);
    caller(callback);
  }
}

const r = new Researcher("Albert");
r.doCallback();
// r.research();
