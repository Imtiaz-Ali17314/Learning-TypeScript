// use of type in function parameter
function makeChai(type: string, cpus: number) {
  console.log(`Making ${type} chai with ${cpus} cups of milk`);
}

makeChai("Masala", 2); // Valid
// makeChai("Ginger", "3"); // Error, second argument should be a number, not a string

// use of type in function return type
function getChaiDetails(): { type: string; cpus: number } {
  return { type: "Masala", cpus: 2 };
  // return { type: "Ginger", cpus: "3" }; // Error, cpus should be a number, not a string
}

getChaiDetails(); // Valid, returns an object with type and cpus properties

// Example 2
function getChaiPrice(): number {
  return 5;
}

// Example 3
function getChaiType(order: string): string {
  // if (!order) {
  //   return null; // Error, return type is string, but null is returned
  // }

  if (!order) return "Masala";
  return order;
}

// Logger Function --> don't return anything, just log the message, use of void return type.
function login(): void {
  console.log("User logged in");
}

// use of optional type in function parameter
function makeTea(type: string, sugar?: boolean) {
  if (sugar) {
    console.log(`Making ${type} tea with sugar`);
  } else {
    console.log(`Making ${type} tea without sugar`);
  }
}

// use of default value in function parameter
function makeCoffee(type: string, sugar: boolean = true) {
  if (sugar) {
    console.log(`Making ${type} coffee with sugar`);
  } else {
    console.log(`Making ${type} coffee without sugar`);
  }
}

// use of complex type in function parameter
function makeSmoothie(order: {
  fruit: string;
  quantity: number;
  size: "small" | "medium" | "large";
}): void {
  console.log(
    `Making ${order.size} smoothie with ${order.quantity} ${order.fruit}`,
  );
}
