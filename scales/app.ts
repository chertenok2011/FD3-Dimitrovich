class Products {
    name: string;
    weigh: number;

    constructor(nameProduct: string, weighProduct: number) {
        this.name = nameProduct;
        this.weigh = weighProduct;
    }

    getScale(): number {
        return this.weigh;
    }
    getName(): string {
        return this.name;
    }
}

class Apple extends Products {
    constructor(nameProduct: string, weighProduct: number) {
        super(nameProduct, weighProduct);
    }
}

class Orange extends Products {
    constructor(nameProduct: string, weighProduct: number) {
        super(nameProduct, weighProduct);
    }
}

class Scale {
    scaleList: Array<number> = [];
    nameList: Array<string> = [];

    constructor() {}

    add(propduct: Products): void {
        this.scaleList.push(propduct.getScale());        
        this.nameList.push(propduct.getName());
    }
    getSumScale(): number {
        var sum: number = 0;
        for (var value of this.scaleList){
            sum += value;
        }
        return sum;
    }
    getNameList(): Array<string> {
        return this.nameList;
    }
}

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