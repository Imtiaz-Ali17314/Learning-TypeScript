const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  addition: 1,
  price: 10,
};

// {
//   title: string;
//   author: string;
//   addition: number;
//   price: number;
// }

// Use of type to define the object structure
let book1: {
  title: string;
  author: string;
  addition: number;
  price: number;
};

book1 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  addition: 1,
  price: 10,
};

// Alias Object of type
type Book = {
  title: string;
  author: string;
  addition: number;
  price: number;
  publisher: string[];
};

const books2: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  addition: 1,
  price: 10,
  publisher: ["Scribner", "Charles Scribner's Sons"],
};

// Duck typing in TypeScript
type RegisterBook = { price: number };
let smallRegister: RegisterBook = { price: 15 };
let largeRegister = { price: 25, title: "The Great Gatsby" };

smallRegister = largeRegister; // This is valid because largeRegister has all the properties of RegisterBook

// Example 2 of duck typing in TypeScript
type Bag = { capacity: number; color: string };
let smallBag = { capacity: 10, color: "red", size: "small" };

const bag: Bag = smallBag; // This is valid because smallBag has all the properties of Bag

// Usage Checking in TypeScript
type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "john_doe",
  password: "securepassword123",
};

// Spliting out data type in TypeScript
type Item = {
  name: string;
  price: number;
};

type Address = {
  street: string;
  city: string;
  zipCode: string;
};

type Order = {
  id: string;
  items: Item[];
  quantity: number;
  shippingAddress: Address;
};

// define data type once and use it in differnet ways { Partial, Required, Pick, Omit }

// Partial: Makes all properties of a type optional
type Laptop = {
  brand: string;
  model: string;
  price: number;
};

const bayLaptop = (laptop: Partial<Laptop>) => {
  console.log(laptop);
};

bayLaptop({ brand: "Dell" }); // Valid, only brand is provided
bayLaptop({ model: "XPS 13", price: 999 }); // Valid, model and price are provided
bayLaptop({ brand: "Apple", model: "MacBook Pro", price: 1999 }); // Valid, all properties are provided
bayLaptop({}); // Valid, no properties are provided

// Required: Makes all properties of a type required
type Tablet = {
  brand: string;
  model: string;
  price: number;
};

const buyTablet = (tablet: Required<Tablet>) => {
  console.log(tablet);
};

buyTablet({ brand: "Samsung", model: "Galaxy Tab", price: 599 }); // Valid, all properties are provided
// buyTablet({ brand: "Apple", model: "iPad" }); // Error, price is missing

// Pick: Creates a new type by picking a set of properties from an existing type
type Smartphone = {
  brand: string;
  model: string;
  price: number;
  color: string;
};

const buySmartphone = (smartphone: Pick<Smartphone, "brand" | "model">) => {
  console.log(smartphone);
};

buySmartphone({ brand: "OnePlus", model: "9 Pro" }); // Valid, only brand and model are provided
// buySmartphone({ brand: "Google", model: "Pixel 6", price: 699 }); // Error, price is not allowed

// Omit: Creates a new type by omitting a set of properties from an existing type
type Smartwatch = {
  brand: string;
  model: string;
  price: number;
  color: string;
};

const buySmartwatch = (smartwatch: Omit<Smartwatch, "color">) => {
  console.log(smartwatch);
};

buySmartwatch({ brand: "Fitbit", model: "Versa 3", price: 229 }); // Valid, color is omitted
// buySmartwatch({ brand: "Garmin", model: "Venu 2", price: 399, color: "Black" }); // Error, color is not allowed
