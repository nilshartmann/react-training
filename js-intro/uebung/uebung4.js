"use strict";



/**
 *
 * @param _sub {function}
 * @param _super {function}
 * @private
 */
function _extends(_sub, _super) {
    /**
     *
     * @constructor
     */
    var IntermediateProto = function () {};
    IntermediateProto.prototype = _super.prototype;
    _sub.prototype = new IntermediateProto();
    _sub.prototype.constructor = _sub;
}



// Vgl. https://code.google.com/p/closure-library/source/browse/closure/goog/base.js
//goog.inherits = function(childCtor, parentCtor) {
//    /** @constructor */
//    function tempCtor() {};
//    tempCtor.prototype = parentCtor.prototype;
//    childCtor.superClass_ = parentCtor.prototype;
//    childCtor.prototype = new tempCtor();
//    /** @override */
//    childCtor.prototype.constructor = childCtor;
//};

/**
 *
 * @interface
 */
function HasName() { }
/**
 * @returns {string}
 */
HasName.prototype.getName = function() {};

/**
 *
 * @param name {string}
 * @param alter {number}
 * @param geschlecht {string=}
 * @constructor
 * @implements {HasName}
 */
function Person(name, alter, geschlecht) {
    this.name = name;
    this.alter = alter;
    this.geschlecht = geschlecht;
}

console.log(Person.prototype.constructor);

/**
 * @returns {string}
 */
Person.prototype.getName = function () {
    return this.name;
};

/**
 * @private
 */
Person.prototype.log = function () {
    var info = "Alter von " + this.name + ": " + this.alter;
    console.log(info);
};

/**
 *
 * @param name
 * @param alter
 * @param geschlecht
 * @constructor
 * @extends {Person}
 */
function Customer(name, alter, geschlecht) {
    Person.apply(this, arguments);
    this.preferredArticle = alter > 40 ? 'Galaxy Note' : 'iPhone';
}

_extends(Customer, Person);
//Customer.prototype = new Person();
console.log(Customer.prototype.constructor);


/**
 *
 * @override
 * @returns {string}
 */
Customer.prototype.getName = function() {
    // super call
    return "Dear " + Person.prototype.getName.call(this);
//    return "Dear " + Object.getPrototypeOf(Customer.prototype).getName.call(this);
};
// be careful: first create prototype, then add methods to it
Customer.prototype.shop = function() {
    console.log("Shopping: " + this.preferredArticle);
};

/**
 * @type {Customer}
 */
var olli = new Customer('Olli', 42, "M");
console.log(olli.getName() === 'Dear Olli');
olli.shop();

var chris = new Customer('Chris', 25, "M");
console.log(chris.getName() === 'Dear Chris');
chris.shop();
