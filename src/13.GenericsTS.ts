// Generics allow you to create reusable components that can work with multiple types.
// Generics means general functions.
function identity<T>(arg: T): T {
  return arg;
}

identity<string>("Hello, Generics!"); // T is string
identity<number>(42); // T is number
identity<boolean>(true); // T is boolean
identity<Array<number>>([1, 2, 3]); // T is Array<number>
identity<{ name: string; age: number }>({ name: "John", age: 30 }); // T is object { name: string; age: number }

// Expamle 2
function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

pair<string, number>("Hello", 42); // A is string, B is number
pair<boolean, string>(true, "Generics"); // A is boolean, B is string
pair<Array<number>, { name: string; age: number }>([1, 2, 3], {
  name: "John",
  age: 30,
}); // A is Array<number>, B is object { name: string; age: number }
pair<number, number>(10, 20); // A is number, B is number
pair<string, string>("Hello", "World"); // A is string, B is string
pair<Array<string>, Array<number>>(["a", "b", "c"], [1, 2, 3]); // A is Array<string>, B is Array<number>

// Generic Functions
interface GenericIdentity<T> {
  arg: T;
}

const myIdentity: GenericIdentity<number> = {
  arg: 42,
};
const myIdentity2: GenericIdentity<string> = {
  arg: "Hello, Generics!",
};
const myIdentity3: GenericIdentity<boolean> = {
  arg: true,
};

// Generic with Partial, Required, Readonly, Record, Pick, Omit, Exclude, Extract, NonNullable, Parameters, ConstructorParameters, ReturnType, InstanceType
// Partial<T> --> makes all properties of T optional
interface User {
  name: string;
  age: number;
  email: string;
}

const partialUser: Partial<User> = {
  name: "John Doe",
  age: 30,
};

// Required<T> --> makes all properties of T required
const requiredUser: Required<User> = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

// Readonly<T> --> makes all properties of T readonly
const readonlyUser: Readonly<User> = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

// Record<K, T> --> creates a type with a set of properties K of type T
type UserRoles = "admin" | "editor" | "viewer";
type UserRecord = Record<UserRoles, User>;

// Pick<T, K> --> creates a type by picking a set of properties K from T
type UserNameAndEmail = Pick<User, "name" | "email">;

// Omit<T, K> --> creates a type by omitting a set of properties K from T
type UserWithoutEmail = Omit<User, "email">;

// Real world use case of generics in TypeScript
// For example, a function that fetches data from an API and returns a specific type
interface ApiResponse<T> {
  data: T;
  status: number;
}

function fetchUser(id: string): Promise<ApiResponse<User>> {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: "John Doe",
          age: 30,
          email: "john.doe@example.com",
        },
        status: 200,
      });
    }, 1000);
  });
}
