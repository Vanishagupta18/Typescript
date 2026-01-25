let subs:number|string="100K Subscribers";
//union type : variable can hold more than one type of data

let apiRequestStatus:'success'|'failure'='success';
//literal type : variable can hold only specific values
// apiRequestStatus='pending'; // Error
apiRequestStatus='failure';

const orders=['100','200','300'];
//any type : can hold any type of data
let currentOrder:string|undefined=undefined;

for(let order of orders){
    if(order==='200'){
        currentOrder=order;
        break;
    }
}
console.log(`Current Order: ${currentOrder}`);

//unkonown type : safer version of any type //read documentation for more details
let userInput:unknown;
let userName:string;