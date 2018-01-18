
localStorage.clear();

class Product {
    name: string;
    weigh: number;

    constructor(nameProduct: string, weighProduct: number) {
        this.name = nameProduct;
        this.weigh = weighProduct;
    }

    getWeigh(): number {
        return this.weigh;
    }
    getName(): string {
        return this.name;
    }
}

class Apple extends Product {
    constructor(nameProduct: string, weighProduct: number) {
        super(nameProduct, weighProduct);
    }
}

class Orange extends Product {
    constructor(nameProduct: string, weighProduct: number) {
        super(nameProduct, weighProduct);
    }
}

interface IStorageEngine {
    addItem(item: Product): number | string;
    getItem(index: number | string): Product;
    getCount(): number;
    getSumScale(): number;
    getNameList(): Array<string>;
}

class ScalesStorageEngineArray<StorageItem extends Product> implements IStorageEngine {
    items: StorageItem[];

    constructor() {
        this.items = [];
    }

    addItem(item: StorageItem): number {
        let index: number = this.items.length;
        this.items.push(item);
        return index;
    }

    getItem(index: number): StorageItem {
        return this.items[index];
    }

    getCount(): number {
        return this.items.length;
    }

    getSumScale(): number {
        var sum: number = 0;
        for (var product of this.items) {
            sum += product.getWeigh();
        }
        return sum;
    }

    getNameList(): Array<string> {
        var names: Array<string> = [];
        for (var product of this.items) {
            names.push(product.getName());
        }
        return names;
    }
}

class ScalesStorageEngineLocalStorage<StorageItem extends Product> implements IStorageEngine {

    keys: Array<string>;

    constructor() {
        this.keys = [];
    }

    addItem(item: StorageItem): string {
        let key: string = item.getName();
        this.keys.push(key);
        localStorage.setItem(key, JSON.stringify(item));
        return key;
    }

    getItem(index: string): StorageItem {
        return JSON.parse(localStorage.getItem(index.toString()));
    }

    getCount(): number {
        return this.keys.length;
    }

    getSumScale(): number {
        var sum: number = 0;
        for (var i = 0; i < this.keys.length; i++) {
            let product = <Product>JSON.parse(localStorage.getItem(this.keys[i]));
            let newProduct = new Product(product.name, product.weigh);
            sum += newProduct.getWeigh();
        }
        return sum;
    }

    getNameList(): Array<string> {
        var names: Array<string> = [];
        for (var i = 0; i < this.keys.length; i++) {
            let product = <Product>JSON.parse(localStorage.getItem(this.keys[i]));
            let newProduct = new Product(product.name, product.weigh);
            names.push(newProduct.getName());
        }
        return names;
    }
}

var newStorageEngineArray: ScalesStorageEngineArray<Product> = new ScalesStorageEngineArray<Product>();
var newStorageEngineLocalStorage: ScalesStorageEngineLocalStorage<Product> = new ScalesStorageEngineLocalStorage<Product>();

class Scale<StorageEngine extends IStorageEngine> {

    storageEngine: StorageEngine;

    constructor(_storageArray: StorageEngine) {
        this.storageEngine = _storageArray;
    }

    getSumScale(): number {
        return this.storageEngine.getSumScale();
    }

    getNameList(): Array<string> {
        return this.storageEngine.getNameList();
    }
}

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
