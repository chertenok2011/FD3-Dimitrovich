var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Products = /** @class */ (function () {
    function Products(nameProduct, weighProduct) {
        this.name = nameProduct;
        this.weigh = weighProduct;
    }
    Products.prototype.getScale = function () {
        return this.weigh;
    };
    Products.prototype.getName = function () {
        return this.name;
    };
    return Products;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(nameProduct, weighProduct) {
        return _super.call(this, nameProduct, weighProduct) || this;
    }
    return Apple;
}(Products));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(nameProduct, weighProduct) {
        return _super.call(this, nameProduct, weighProduct) || this;
    }
    return Orange;
}(Products));
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
            sum += product.getScale();
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