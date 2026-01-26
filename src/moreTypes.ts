let response:any="42";

// Using type assertion to specify that response is a string
let numericLength:number=(response as string).length;

type Book={// Defining a Book type with a name property
    name:string;
}

let bookString='{"name":"TypeScript Basics"}';// JSON string representing a Book object

// Parsing the JSON string and asserting its type as Book
let bookObject:Book=JSON.parse(bookString) as Book;

console.log(bookObject);

const inputElement=document.getElementById("username") as HTMLInputElement;// Asserting the type of a DOM element
console.log(inputElement.value);


let value:any

value="Hello, TypeScript!";
value=100;
value=true;
value.upperCase();// This will cause a runtime error since value is not a string at this point

let newvalue:unknown

newvalue="Hello, TypeScript!";
newvalue=100;
newvalue=true;
//newvalue.upperCase();//error
if(typeof newvalue==="string"){
    console.log(newvalue.toUpperCase());
}

try {
    
} catch (error) {
if(error instanceof Error){// Type narrowing to ensure error is of type Error
    console.log(error.message);
}
}

const data:unknown="chaiaurcode";
const strDta:string=data as string;// Asserting unknown type to string

type Role="admin"|"user"|"guest";

function redirectBasedOnRole(role:Role):void{ // Function to redirect based on user role
    if(role==="admin"){
        console.log("Redirect to admin dashboard");
        return;
    }
    if(role==="user"){
        console.log("Redirect to user homepage");
        return;
    }
    if(role==="guest"){
        console.log("Redirect to guest welcome page");
        return;
    }
    role;// The role variable is of type never here
}