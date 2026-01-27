function makeChai(type: string,cups: number) {
    console.log(`Making ${cups} cups of ${type} chai.`);
}

makeChai("Masala", 2);

function getChaiPrice(): number {
    return 50;
}

function makeOrder(order:string) {//return type string or null
    if(!order) return null;
    return order;
    
}

function logChai():void {//void function
    console.log("Chai is ready!");
}

// function burgerOrder(type?: string): {//optional parameter
// }

// function burgerOrder(type: string="BK burger"): {//default parameter
    
// }

function Employee(Em:{
    name: string;
    age: number;
    city?: string;//optional property
})
{
    console.log(`Employee Name: ${Em.name}, Age: ${Em.age}, City: ${Em.city}`);
}