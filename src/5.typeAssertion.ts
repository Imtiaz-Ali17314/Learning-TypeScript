// Type Assertion ( as string ) --> Force full assertion
let response: any = "201";

let numericLength: number = (response as string).length;

// Type Assertion ( as Book ) --> Special type assertion
type Book = {
  name: string;
};

let bookString = "{'name': 'Hussain Waris e Anbiya'}";
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

// Type Assertion ( as HTMLInputElement ) --> html element type assertion
const inputElement = document.getElementById("clinicId") as HTMLInputElement;
