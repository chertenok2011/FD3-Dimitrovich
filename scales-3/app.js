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
    ScalesStorageEngineArray.prototype.getCount = function (index) {
        return this.items[index].getWeigh();
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var index = localStorage.length;
        localStorage.setItem(index.toString(), JSON.stringify(item));
        return index;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        return JSON.parse(localStorage.getItem(index.toString()));
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function (index) {
        return JSON.parse(localStorage.getItem(index.toString()))[index].getWeigh();
    };
    return ScalesStorageEngineLocalStorage;
}());
function uniFactory(classRef) {
    return new classRef();
}
// var newStorageEngineArray: ScalesStorageEngineArray<Product> = uniFactory<ScalesStorageEngineArray<Product>>(ScalesStorageEngineArray);
// var newStorageEngineLocalStorage: ScalesStorageEngineLocalStorage<Product> = uniFactory<ScalesStorageEngineLocalStorage<Product>>(ScalesStorageEngineLocalStorage);
// console.log(newStorageEngineArray);
// console.log(newStorageEngineLocalStorage);
var Scale = /** @class */ (function () {
    function Scale() {
        this.newStorageEngineArray = uniFactory(ScalesStorageEngineArray);
        this.newStorageEngineLocalStorage = uniFactory(ScalesStorageEngineLocalStorage);
    }
    return Scale;
}());
var scale = new Scale();
console.log(scale);
//# sourceMappingURL=app.js.map