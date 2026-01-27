// const chaiTypes: string[] = ['Masala', 'Ginger', 'Cardamom', 'Tulsi'];
// const chaiPrices: number[] = [10, 15, 20, 25];

const rating:Array<number> = [1, 2, 3, 4, 5];// Generic array type

type Chai={// Object type
    flavour: string;
    type: string;
    price: number;
}
const menu: Chai[] = [// Array of objects
    { flavour: 'Assam', type: 'Masala', price: 10 },
    { flavour: 'Assam', type: 'Ginger', price: 15 },
    { flavour: 'Assam', type: 'Cardamom', price: 20 },
];    

const cities :readonly string[] = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'];
// cities.push('Bangalore'); // Error: Cannot add to a readonly array

const table:number[][] = [// 2D array
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// Tuple examples

let coffeeTuples: [string, number, boolean];// Tuple type
coffeeTuples = ['Espresso', 5, true]; // Correct
// coffeeTuples = [5, 'Espresso', true]; // Error: Type mismatch

let userTuple: [number, string,boolean?];// Tuple type
userTuple = [1, 'Alice']; // Correct
userTuple = [2, 'Bob', true]; // Correct with optional boolean

const location: readonly [number, number] = [40.7128, -74.0060];// Readonly tuple
// location[0] = 41.0000; // Error: Cannot modify a readonly tuple

const chaiItems:[name: string, price: number] = ['Masala', 10];// Named tuple elements

//enum examples

enum CupSize{// Numeric enum
  SMALL,
    MEDIUM,
    LARGE,
}

const size=CupSize.MEDIUM;// Using enum

enum StatusCode{// Auto-incremented enum
  SUCCESS=200,
  NOT_FOUND,// 201 auto-incremented to 201
  SERVER_ERROR// 202 auto-incremented to 202
}

enum ChaiType{// String enum
  MASALA='Masala',
  GINGER='Ginger',
  CARDAMOM='Cardamom',
}

function makeChai(type: ChaiType): string {// Function using enum
  return `Making a cup of ${type} chai.`;
}
makeChai(ChaiType.GINGER);

enum MixedEnum {// Heterogeneous enum
  YES = 'YES',
  NO = 0,
}