var Scale = /** @class */ (function () {
    function Scale() {
        this.product = [];
    }
    Scale.prototype.add = function (_product) {
        this.product.push(_product);
    };
    Scale.prototype.getSumScale = function () {
        var totalScale = 0;
        for (var i = 0; i < this.product.length; i++) {
            totalScale += this.product[i].getScale();
        }
        return totalScale;
    };
    Scale.prototype.getNameList = function () {
        var list = [];
        for (var i = 0; i < this.product.length; i++) {
            list[i] = this.product[i].getName();
        }
        return list;
    };
    return Scale;
}());
var Apple = /** @class */ (function () {
    function Apple() {
        this._name = 'Apple';
    }
    Apple.prototype.getScale = function () {
        return this._scale;
    };
    Apple.prototype.getName = function () {
        return this._name;
    };
    Object.defineProperty(Apple.prototype, "scale", {
        set: function (scale) {
            if (scale > 0) {
                this._scale = scale;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Apple.prototype, "name", {
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato() {
        this._name = 'Tomato';
    }
    Tomato.prototype.getScale = function () {
        return this._scale;
    };
    Tomato.prototype.getName = function () {
        return this._name;
    };
    Object.defineProperty(Tomato.prototype, "scale", {
        set: function (scale) {
            if (scale > 0) {
                this._scale = scale;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tomato.prototype, "name", {
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Tomato;
}());
var Apple1 = new Apple();
var Apple2 = new Apple();
var Apple3 = new Apple();
Apple1.scale = 5;
Apple1.name = 'Apple1';
Apple2.scale = 7;
Apple2.name = 'Apple2';
Apple3.scale = 10;
Apple3.name = 'Apple3';
var Tomato1 = new Tomato();
var Tomato2 = new Tomato();
Tomato1.scale = 2;
Tomato1.name = 'Tomato1';
Tomato2.scale = 4;
Tomato2.name = 'Tomato2';
var Scale1 = new Scale();
Scale1.add(Apple1);
Scale1.add(Apple2);
Scale1.add(Tomato2);
console.log('Sum weight=' + Scale1.getSumScale());
console.log('On scale:\n' + Scale1.getNameList());
//console.log('Scale = ' + Apple1.getScale());
// let car1:Car=new Car("2870-ОГО");
// car1.show();
//# sourceMappingURL=app.js.map