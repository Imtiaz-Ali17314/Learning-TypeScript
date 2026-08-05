// Interface in TypeScript is a way to define the structure of an object.
// It allows you to specify the properties and methods that an object should have, without providing the implementation details.
// Interfaces are used for type-checking and can be implemented by classes or used to define the shape of objects.

interface Book {
  title: string;
  author: string;
  pages: number;
  additionalInfo?: string; // optional property
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
  additionalInfo: "A classic American novel",
};

// readonly properties in interfaces
interface ReadonlyBook {
  readonly title: string;
  readonly author: string;
  readonly pages: number;
}

const myReadonlyBook: ReadonlyBook = {
  title: "1984",
  author: "George Orwell",
  pages: 328,
};

// Handling methods in interfaces
interface BookMethods {
  getBookInfo(): string;
  getAuthorInfo(): string;
}

const myBookMethods: BookMethods = {
  getBookInfo() {
    return `Title: ${myBook.title}, Author: ${myBook.author}, Pages: ${myBook.pages}`;
  },
  getAuthorInfo() {
    return `Author: ${myBook.author}`;
  },
};

// Function interfaces
interface DiscountPrice {
  (originalPrice: number, discountPercentage: number): number;
}

const calculateDiscountPrice: DiscountPrice = (
  originalPrice,
  discountPercentage,
) => {
  return originalPrice - (originalPrice * discountPercentage) / 100;
};

// index signatures in interfaces
interface BookCollection {
  [index: number]: Book;
}

const myBookCollection: BookCollection = {
  0: { title: "Book 1", author: "Author 1", pages: 100 },
  1: { title: "Book 2", author: "Author 2", pages: 200 },
};

// 2nd example of index signatures in interfaces
interface StringArray {
  [index: string]: number;
}

const myStringArray: StringArray = {
  one: 1,
  two: 2,
  three: 3,
};

// Merging interfaces
interface User {
  name: string;
}

interface User {
  age: string;
}

const myMergedBook: User = {
  name: "John Doe",
  age: "30",
};

// Extending interfaces
interface Employee extends User {
  employeeId: string;
}

const myEmployee: Employee = {
  name: "Jane Doe",
  age: "28",
  employeeId: "E12345",
};
