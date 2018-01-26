var utilmodule = {};
(function (exports) {
    "use strict";
    function _extends(_sub, _super) {
        _sub.prototype = Object.create(_super.prototype);
        _sub.prototype.constructor = _sub;
    }

    exports._extends = _extends;
})(utilmodule);

var personmodule = {};
(function (exports, utilmodule) {
    "use strict";
    function Person(name, alter, geschlecht) {
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

    function Customer(name, alter, geschlecht) {
        Person.apply(this, arguments);
        this.preferredArticle = alter > 40 ? 'Galaxy Note' : 'iPhone';
    }

    utilmodule._extends(Customer, Person);

    Customer.prototype.shop = function () {
        return "Shopping: " + this.preferredArticle;
    };

    Customer.prototype.getName = function () {
        // super call
        return "Dear " + Person.prototype.getName.call(this);
    };

    exports.Customer = Customer;
})(personmodule, utilmodule);


var mainmodule = {};
(function (exports, personmodule) {
    "use strict";
    function run() {
        //das geht nicht wegen Sichtbarkeit
        // var oma = new personmodule.Person('Oma', 88, "W");
        var olli = new personmodule.Customer('Olli', 42, "M");
        console.log(olli.getName() === 'Dear Olli');
        console.log(olli.shop());

        var chris = new personmodule.Customer('Chris', 25, "M");
        console.log(chris.getName() === 'Dear Chris');
        console.log(chris.shop());
    }
    exports.run = run;
})(mainmodule, personmodule);

mainmodule.run();