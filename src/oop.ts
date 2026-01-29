class Chai{
    flavour: string;
    price: number;

    constructor(flavour: string, price: number){//constructor
        this.flavour = flavour;
        this.price = price;
    }
}

const masalaChai = new Chai("Masala", 20);//object creation
console.log(masalaChai);

class Coffee{//class declaration
    public flavour: string="manga" ;
    private secretIngredient: string="sugar";

    reveal(){//accessing private member within the class
        console.log(`The secret ingredient is ${this.secretIngredient}`);
    }
    protected shopName="Starbucks"//accessible within the class and subclasses
};

class Latte extends Coffee{//inheritance
    showShopName(){
        console.log(`Shop Name is ${this.shopName}`);//accessing protected member
    }   
};

const myLatte = new Latte();
myLatte.showShopName();
// myLatte.secretIngredient; // Error: Property 'secretIngredient' is private and only accessible within class 'Coffee'.
myLatte.reveal();//calling method to access private member

class Wallet{
    #balance: number=6;//private field

    getBalance(){//getter method
        return this.#balance;
    }
}
const myWallet = new Wallet();
// console.log(myWallet.#balance); // Error: Private field '#balance' must be declared in an enclosing class
console.log(myWallet.getBalance());//accessing private field via getter method

class Tea{
    private _type: string;

    constructor(type: string){
        this._type = type;
    }
    get type(){//getter
        return this._type;
    }
    set type(newType: string){//setter
        this._type = newType;
    }
}

const greenTea = new Tea("Green");//getter usage
console.log(greenTea.type);
greenTea.type = "Herbal";//setter usage
console.log(greenTea.type);

class Beverage{
    static category: string="Drink";//static member

    static describeCategory(){//static method
        console.log(`Beverage category is ${this.category}`);
    }
}

Beverage.describeCategory();//calling static method
console.log(Beverage.category);//accessing static member

abstract class Dessert{//abstract class
    abstract name: string;//abstract property   
    abstract serve(): void;//abstract method
}   
class IceCream extends Dessert{//subclass implementing abstract class
    name: string;
    constructor(name: string){
        super();//calling parent constructor
        this.name = name;
    }
    serve(): void{
        console.log(`Serving ${this.name} ice cream`);
    }
}

const vanillaIceCream = new IceCream("Vanilla");
vanillaIceCream.serve();//calling implemented method

class Heater{
    heat(){}
}
class ChaiMaker{
    constructor(private heater: Heater){}//dependency injection
//composition
    makeChai(){
        this.heater.heat();
        console.log("Chai is made!");
    }
}