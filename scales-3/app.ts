interface IStorageEngine {
    addItem(item: Product): number;
    getItem(index: number): Product;
    getCount(index: number): number;
}

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

    getCount(index: number): number {
        return this.items[index].getWeigh();
    }
}

class ScalesStorageEngineLocalStorage<StorageItem extends Product> implements IStorageEngine {

    addItem(item: StorageItem): number {
        let index: number = localStorage.length;
        localStorage.setItem(index.toString(), JSON.stringify(item));
        return index;
    }

    getItem(index: number): StorageItem {
        return JSON.parse(localStorage.getItem(index.toString()));
    }

    getCount(index: number): number {
        return JSON.parse(localStorage.getItem(index.toString()))[index].getWeigh();
    }
}

function uniFactory<StorageEngine>(classRef: { new(): StorageEngine; }): StorageEngine {
    return new classRef();
}

var newStorageEngineArray: ScalesStorageEngineArray<Product> = uniFactory<ScalesStorageEngineArray<Product>>(ScalesStorageEngineArray);
var newStorageEngineLocalStorage: ScalesStorageEngineLocalStorage<Product> = uniFactory<ScalesStorageEngineLocalStorage<Product>>(ScalesStorageEngineLocalStorage);

console.log(newStorageEngineArray);
console.log(newStorageEngineLocalStorage);

class Scale<StorageEngine extends IStorageEngine> {
    constructor() {

    }

    // getSumScale(): number {
    //     var sum: number = 0;
    //     for (var product of this.listProducts) {
    //         sum += product.getWeigh();
    //     }
    //     return sum;
    // }

    // getNameList(): Array<string> {
    //     var names: Array<string> = [];
    //     for (var product of this.listProducts) {
    //         names.push(product.getName());
    //     }
    //     return names;
    // }
}

var scale = new Scale<ScalesStorageEngineArray<Apple>>();

console.log(scale);
