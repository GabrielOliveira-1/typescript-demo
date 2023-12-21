// Primitives: number, string, boolean
// Complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;

age = 12;

let firstName: string;

firstName = "Gabriel";

let isDeveloper: boolean;

isDeveloper = true;

// Complex types

let hobbies: string[];

hobbies = ["Games", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Gab",
  age: 26,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

// type inference

let title: string | number = "Job market in tech - 2023";

title = 1234568789;

// Functions & types

function add(a: number, b: number): number | string {
  return a + b;
}

console.log(add(5, 6));

function printOut(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
const newArray = [value, ...array]:
return newArray;
}
const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1): // (-1, 1, 2, 3)
const stringArray = insertAtBeginning(["a", "b", "c"], "d")
// updatedArray[0].split(""
)