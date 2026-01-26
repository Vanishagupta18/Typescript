const chai={// defining an object type for chai
    name:"Gingerchai",
    sugar:2,
    strong:true
}

let tea:{// defining an object type for tea
    name:string;
    milk:boolean;
    sugar:number;
}

tea={// assigning values to the tea object
    name:"Masalatea",
    milk:true,
    sugar:3
}

type ChaiOrder={// defining a type for ChaiOrder
    type:string;
    sugar:number;
    ingredients:string[];
};

const order1:ChaiOrder={// using the ChaiOrder type
    type:"Gingerchai",
    sugar:2,
    ingredients:["ginger","cardamom"]
}

type cup={size:string};// defining a type for cup

let smallCup:cup={size:"small"};// object of type cup

let largeCup={size:"large", material:"paper"};// extra property 'material'
smallCup=largeCup// structural typing allows this assignment


type User={// defining a type for User
    username:string;
    password:string;
}
const user1:User={
    username:"user123",// assigning values to User object
    password:"pass123"
}

type Item={name:string; price:number};// defining a type for Item
type Address={street:string; city:string};// defining a type for Address

type Order={//readable definition of Order type
   id:number;
   item:Item;
   shippingAddress:Address;
}


type Chai={
    name:string;
    price:number;
    isHot:boolean;
}
const updateChai=(updates:Partial<Chai>)=>{// using Partial utility type
console.log(updates);
}

updateChai({price:50});// updating only the price of chai

type coffeeOrder={
    name:string;
    quantity:number;
}
const processCoffeeOrder=(order:Required<coffeeOrder>)=>{// using Required utility type
    console.log(order);
}

processCoffeeOrder({name:"Espresso",quantity:2});// all properties are required


type pizzaOrder={
    size:string;
    extraCheese?:boolean;
}
type customizePizzaOrder=Pick<pizzaOrder,"size"|"extraCheese">;// using Pick utility type

const order:customizePizzaOrder={size:"large",extraCheese:true};// creating an order with picked properties
console.log(order);

