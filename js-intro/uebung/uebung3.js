"use strict";

/**
 * @constructor
 */
function Person(name, alter, geschlecht) {
    if (typeof name === 'undefined') {
        throw new Error("Da fehlt doch was");
    }
    this.name = name;
    this.alter = alter;
    this.geschlecht = geschlecht;
}

Person.prototype.getName = function () {
    return this.name;
};

Person.prototype.log = function () {
    var info = "Alter von " + this.name + ": " + this.alter;
    console.log(info);
};


var opa = new Person("Opa", 88, "M");
console.log(opa.getName() === "Opa");
opa.log();