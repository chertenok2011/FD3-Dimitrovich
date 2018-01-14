interface IStorageEngine {
    addItem(): number;
    getItem(): any;
    getCount(): number;
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

class ScalesStorageEngineArray<StorageItem extends Product> {
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

class ScalesStorageEngineLocalStorage<StorageItem extends Product> {
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

class Scale<StorageItem extends Product, StorageEngine extends IStorageEngine> {

    listProducts: StorageItem[];

    constructor() {
        this.listProducts = [];
    }

    addItem(item: StorageItem): number {
        let index: number = this.listProducts.length;
        this.listProducts.push(item);
        return index;
    }

    getItem(index: number): StorageItem {
        return this.listProducts[index];
    }

    getCount(index: number): number {
        return this.listProducts[index].getWeigh();
    }

    getSumScale(): number {
        var sum: number = 0;
        for (var product of this.listProducts) {
            sum += product.getWeigh();
        }
        return sum;
    }

    getNameList(): Array<string> {
        var names: Array<string> = [];
        for (var product of this.listProducts) {
            names.push(product.getName());
        }
        return names;
    }
}

var scale = new Scale<Apple, ScalesStorageEngineArray<Apple>>();

// var apple1 = new Apple("Apple 1", 200);
// var apple2 = new Apple("Apple 2", 150);

// var orange1 = new Orange("Orange 1", 250);
// var orange2 = new Orange("Orange 2", 270);

// scale.addItem(apple1);
// scale.addItem(apple2);

// console.log(scale.getSumScale());
// console.log(scale.getNameList());

// scale.addItem(orange1);
// scale.addItem(orange2);

// console.log(scale.getSumScale());
// console.log(scale.getNameList());