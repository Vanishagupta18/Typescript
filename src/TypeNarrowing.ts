function getChai(kind:string | number){//union type as parameter
    if(typeof kind === 'string'){
        return `Here is your ${kind} chai. Enjoy!`;//type narrowing
    }
    return `Here is your chai number ${kind}. Enjoy!`;//type narrowing
}

function serveChai(msg?:string){//optional parameter
    if(msg){
        return msg;//type narrowing
    }
    return "Here is your chai. Enjoy!";
}

function orderChai(size:'small'|'medium'|'larger'|number){//literal type and union type as parameter
if(size==="small")
{
    return "You have ordered a small chai.";
}
if(size==="medium")
{
    return "You have ordered a medium chai.";
}
if(size==="larger")
{   
    return "You have ordered a larger chai.";
}
return `You have ordered a chai of size number ${size}.`;
}

class kulhadChai{
    serve(){
        return "Here is your kulhad chai. Enjoy!";
    }
}

class glassChai{
    serve(){
        return "Here is your glass chai. Enjoy!";
    }
}

function prepareChai(chai:kulhadChai | glassChai){//union type as parameter
    if(chai instanceof kulhadChai){//type narrowing
        return chai.serve();
    }
}

//typecript give you more control over types and helps in narrowing down types to avoid errors at runtime.
//can use type annotations, union types, literal types, optional parameters, and instanceof for type narrowing.
//This enhances code safety and maintainability.

type ChaiOrder={//custom type
type:string
sugar:number
}

function createChaiOrder(order:ChaiOrder){
    return `You have ordered a ${order.type} chai with ${order.sugar} sugar(s).`;
}

type MasalaChai={type:'masala',spicelevel:number}//custom type
type GingerChai={type:'ginger',spicelevel:number}

function createSpecialChaiOrder(order:MasalaChai | GingerChai){//union type of custom types
    if(order.type==='masala'){//type narrowing
        return `You have ordered a masala chai with spice level ${order.spicelevel}.`;
    }
    if(order.type==='ginger'){//type narrowing
        return `You have ordered a ginger chai with spice level ${order.spicelevel}.`;
    }
}

function brew(order: MasalaChai | GingerChai){//union type of custom types
    if('spicelevel' in order){//type narrowing
        return `Brewing your ${order.type} chai with spice level ${order.spicelevel}.`;
    }
}

// The above code demonstrates various TypeScript features such as union types, type narrowing, literal types, optional parameters, custom types, and the use of 'instanceof' and 'in' for type checking. These features help in writing safer and more maintainable code by ensuring that variables and parameters are of the expected types.

function isStringArray(arr:unknown):arr is string[]{//type predicate function
    return Array.isArray(arr) && arr.every(item=>typeof item==='string');
}