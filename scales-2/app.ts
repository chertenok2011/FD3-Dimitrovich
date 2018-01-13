interface IScalable {
    getName(): string;
    getWeigh(): number;
}

class Apple implements IScalable {
    name: string;
    weigh: number;

    constructor(_name: string, _weigh: number) {
        this.name = _name;
        this.weigh = _weigh;
    }

    getName(): string {
        return this.name;
    }

    getWeigh(): number {
        return this.weigh;
    }
}

class Orange implements IScalable {
    name: string;
    weigh: number;

    constructor(_name: string, _weigh: number) {
        this.name = _name;
        this.weigh = _weigh;
    }

    getName(): string {
        return this.name;
    }

    getWeigh(): number {
        return this.weigh;
    }
}

class Scale {
    listProducts: Array<IScalable> = [];

    constructor() { }

    add(propduct: IScalable): void {
        this.listProducts.push(propduct);
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