// Type Assertion ( as string )
let response: any = "201";

let numericLength: number = (response as string).length;

// Type Assertion ( as Book )
type Book = {
  name: string;
};

let bookString = "{'name': 'Hussain Waris e Anbiya'}";
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

// Type Assertion ( as HTMLInputElement )
const inputElement = document.getElementById("clinicId") as HTMLInputElement;
