var Apple = /** @class */ (function () {
    function Apple(_name, _weigh) {
        this.name = _name;
        this.weigh = _weigh;
    }
    Apple.prototype.getName = function () {
        return this.name;
    };
    Apple.prototype.getWeigh = function () {
        return this.weigh;
    };
    return Apple;
}());
var Orange = /** @class */ (function () {
    function Orange(_name, _weigh) {
        this.name = _name;
        this.weigh = _weigh;
    }
    Orange.prototype.getName = function () {
        return this.name;
    };
    Orange.prototype.getWeigh = function () {
        return this.weigh;
    };
    return Orange;
}());
var Scale = /** @class */ (function () {
    function Scale() {
        this.listProducts = [];
    }
    Scale.prototype.add = function (propduct) {
        this.listProducts.push(propduct);
    };
    Scale.prototype.getSumScale = function () {
        var sum = 0;
        for (var _i = 0, _a = this.listProducts; _i < _a.length; _i++) {
            var product = _a[_i];
            sum += product.getWeigh();
        }
        return sum;
    };
    Scale.prototype.getNameList = function () {
        var names = [];
        for (var _i = 0, _a = this.listProducts; _i < _a.length; _i++) {
            var product = _a[_i];
            names.push(product.getName());
        }
        return names;
    };
    return Scale;
}());
var scale = new Scale();
var apple1 = new Apple("Apple 1", 200);
var apple2 = new Apple("Apple 2", 150);
var orange1 = new Orange("Orange 1", 250);
var orange2 = new Orange("Orange 2", 270);
scale.add(apple1);
scale.add(apple2);
console.log(scale.getSumScale());
console.log(scale.getNameList());
scale.add(orange1);
scale.add(orange2);
console.log(scale.getSumScale());
console.log(scale.getNameList());
//# sourceMappingURL=app.js.map