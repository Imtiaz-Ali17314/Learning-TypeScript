//  Using Type without define
function releaseBooks(order: { bookName: string; quantity: number }) {
  console.log(order);
}

function HandleOrder(order: { bookName: string; quantity: number }) {
  console.log(order);
}

// Using Type with define
type Order = {
  bookName: string;
  quantity: number;
};

function laibrary(order: Order) {
  console.log(order);
}

function shop(order: Order) {
  console.log(order);
}

// Type use in class
/*
 type BookInfo = {
  bookName: string;
  author: string;
  addition: number;
};
*/

// Here you can use type or interface.
interface BookInfo {
  bookName: string;
  author: string;
  addition: number;
}

class serveBook implements BookInfo {
  bookName = "The Great Gatsby";
  author = "F. Scott Fitzgerald";
  addition = 1;
}

// Area Where Type is failed to use in class, here we can use interface instead of type
/*
type BookType = "IT" | "Philosophy" | "Science" | "History";

class bookOrder implements BookType {
  //  Class don not implement custom type, from here we can use interface instead of type
  BookType = "IT";
}
*/

// we use interface instead of type in class.
interface BookType {
  category: "IT" | "Philosophy" | "Science" | "History";
}

class bookOrder implements BookType {
  category: "IT" | "Philosophy" | "Science" | "History" = "IT";
}

