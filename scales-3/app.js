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
localStorage.clear();
var Product = /** @class */ (function () {
    function Product(nameProduct, weighProduct) {
        this.name = nameProduct;
        this.weigh = weighProduct;
    }
    Product.prototype.getWeigh = function () {
        return this.weigh;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(nameProduct, weighProduct) {
        return _super.call(this, nameProduct, weighProduct) || this;
    }
    return Apple;
}(Product));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(nameProduct, weighProduct) {
        return _super.call(this, nameProduct, weighProduct) || this;
    }
    return Orange;
}(Product));
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        var index = this.items.length;
        this.items.push(item);
        return index;
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.items[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.items.length;
    };
    ScalesStorageEngineArray.prototype.getSumScale = function () {
        var sum = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var product = _a[_i];
            sum += product.getWeigh();
        }
        return sum;
    };
    ScalesStorageEngineArray.prototype.getNameList = function () {
        var names = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var product = _a[_i];
            names.push(product.getName());
        }
        return names;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.keys = [];
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var key = item.getName();
        this.keys.push(key);
        localStorage.setItem(key, JSON.stringify(item));
        return key;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        return JSON.parse(localStorage.getItem(index.toString()));
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return this.keys.length;
    };
    ScalesStorageEngineLocalStorage.prototype.getSumScale = function () {
        var sum = 0;
        for (var i = 0; i < this.keys.length; i++) {
            var product = JSON.parse(localStorage.getItem(this.keys[i]));
            var newProduct = new Product(product.name, product.weigh);
            sum += newProduct.getWeigh();
        }
        return sum;
    };
    ScalesStorageEngineLocalStorage.prototype.getNameList = function () {
        var names = [];
        for (var i = 0; i < this.keys.length; i++) {
            var product = JSON.parse(localStorage.getItem(this.keys[i]));
            var newProduct = new Product(product.name, product.weigh);
            names.push(newProduct.getName());
        }
        return names;
    };
    return ScalesStorageEngineLocalStorage;
}());
var newStorageEngineArray = new ScalesStorageEngineArray();
var newStorageEngineLocalStorage = new ScalesStorageEngineLocalStorage();
var Scale = /** @class */ (function () {
    function Scale(_storageArray) {
        this.storageEngine = _storageArray;
    }
    Scale.prototype.getSumScale = function () {
        return this.storageEngine.getSumScale();
    };
    Scale.prototype.getNameList = function () {
        return this.storageEngine.getNameList();
    };
    return Scale;
}());
var scale = new Scale(newStorageEngineLocalStorage);
var apple1 = new Apple("Apple 1", 200);
var apple2 = new Apple("Apple 2", 150);
var orange1 = new Orange("Orange 1", 250);
var orange2 = new Orange("Orange 2", 270);
var appleIndex1 = scale.storageEngine.addItem(apple1);
var appleIndex1 = scale.storageEngine.addItem(apple2);
var orangeIndex1 = scale.storageEngine.addItem(orange1);
var orangeIndex2 = scale.storageEngine.addItem(orange2);
console.log(scale.storageEngine.getItem(appleIndex1));
console.log(scale.storageEngine.getCount());
console.log(scale.storageEngine.getSumScale());
console.log(scale.storageEngine.getNameList());
//# sourceMappingURL=app.js.map