type ChaiOrder={// defining an interface for ChaiOrder
    type:string;
    sugar:number;
    strong:boolean;
};

function makeChai(order: ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}

// type TeaRecipe={
//     type:string;
//     milk:boolean;
//     sugar:number;
// };
interface TeaRecipe{// defining an interface for TeaRecipe
    type:string;
    milk:boolean;
    sugar:number;
};

class MasalaTea implements TeaRecipe{// implementing the TeaRecipe interface in a class
    type="gingertea";
    milk=true;
    sugar=2;    
}

// type CupSize="small" | "medium" | "large";// defining a union type for CupSize

// class Chai implements CupSize{
    
// }

interface CupSize{// defining an interface for CupSize
    size:"small" | "medium" | "large";
}
class Chai implements CupSize{// implementing the CupSize type in a 
    size: "small" | "medium" | "large"="medium";
}

// type Response={ok:true}|{ok:false} //cannot implement

type TeaType="masala" | "ginger" | "lemon";// literal union type for TeaType
function prepareTea(t:TeaType){
    console.log(t);
}

type BaseChai={tealeaves:number};
type Extra={masala:number};

type MasalaChai=BaseChai & Extra;// defining an intersection type for MasalaChai

const cup:MasalaChai={tealeaves:5,masala:3};// using the intersection type
console.log(cup);

type User={
    name:string;
    bio?:string;// bio is optional
}
const user1:User={name:"Alice"};// bio is optional
const user2:User={name:"Bob",bio:"Loves tea"};// bio is provided

type Config={
    readonly appName:string;// appName is readonly
    version:string;
}
const config:Config={appName:"TeaApp",version:"1.0.0"};
// config.appName="NewTeaApp";// Error: Cannot assign to 'appName' because it is a read-only property