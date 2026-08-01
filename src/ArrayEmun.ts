// ****************** Array *************************************

// ways to define array in TypeScript

// basic syntax
const books: string[] = ["Book 1", "Book 2", "Book 3"];
const additions: number[] = [1, 2, 3, 4, 5];

const prices: Array<number> = [10, 20, 30, 40, 50];

// array of objects
type Book = {
  title: string;
  author: string;
  price: number;
};

const bookList: Book[] = [
  { title: "Book 1", author: "Author 1", price: 10 },
  { title: "Book 2", author: "Author 2", price: 20 },
  { title: "Book 3", author: "Author 3", price: 30 },
];

// readonly array --> array that cannot be modified after its creation
const readonlyBooks: ReadonlyArray<Book> = [
  { title: "Book 1", author: "Author 1", price: 10 },
  { title: "Book 2", author: "Author 2", price: 20 },
  { title: "Book 3", author: "Author 3", price: 30 },
];
// readonlyBooks.push({ title: 'Book 4', author: 'Author 4', price: 40 }); // Error, cannot push to readonly array

// Multi-dimensional array
const multiDimensionalArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// ********************* Tuple --> fixed length array with different types *********************

let bookTuple: [string, string, number];
bookTuple = ["Book 1", "Author 1", 10];
// bookTuple = ['Book 2', 'Author 2', "20"]; // Error, third element should be a number, not a string

// Example 2
let userInfo: [string, number, boolean];
userInfo = ["John Doe", 30, true];
// userInfo = [30, 'John Doe', true]; // Error, first element should be a string, second element should be a number

// readonly tuple --> fixed length array with different types that cannot be modified after its creation
const readonlyBookTuple: readonly [string, string, number] = [
  "Book 1",
  "Author 1",
  10,
];
// readonlyBookTuple[0] = 'Book 2'; // Error, cannot modify readonly tuple

// named tuple --> fixed length array with different types and named elements
type BookTuple = [title: string, author: string, price: number];
const namedBookTuple: BookTuple = ["Book 1", "Author 1", 10];

// ***************** Enum --> special "class" that represents a group of constants (unchangeable variables) *****************

enum BookCategory {
  IT,
  Philosophy,
  Science,
  History,
}
const bookCategory: BookCategory = BookCategory.IT;

// Auto Incremented Values in Enum
enum BookCategoryAutoIncremented {
  IT = 1,
  Philosophy, // 2
  Science, // 3
  History, // 4
}
const bookCategoryAutoIncremented: BookCategoryAutoIncremented =
  BookCategoryAutoIncremented.IT;

// Make values string to avoid auto incremented values in enum
enum BookCategoryString {
  IT = "it",
  Philosophy = "philosophy",
  Science = "science",
  History = "history",
}

function getBookCategory(category: BookCategoryString): void {
  console.log(`Book category is: ${category}`);
}

getBookCategory(BookCategoryString.Science); // Valid
// getBookCategory("science"); // Error, argument must be of type BookCategoryString

// Hitrogenous Enum --> Enum with mixed values (string and number)
enum BookCategoryHeterogeneous {
  IT = "it",
  Philosophy = 1,
  Science = "science",
  History = 2,
}

// constant enum --> Enum that is completely removed during compilation, and replaced with the actual values
const enum BookCategoryConstant {
  IT = "it",
  Philosophy = "philosophy",
  Science = "science",
  History = "history",
}

const catagory: BookCategoryConstant = BookCategoryConstant.Philosophy;

// push value in tuple --> we can push value in tuple, but we cannot access it by index, because tuple has fixed length
let bookTuplePush: [string, string, number] = ["Book 1", "Author 1", 10];
bookTuplePush.push("Book 2"); // Valid, we can push value in tuple
// console.log(bookTuplePush[3]); // Error, we cannot access value by index, because tuple has fixed length
