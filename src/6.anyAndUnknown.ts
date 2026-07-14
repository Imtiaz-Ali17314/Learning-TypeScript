// any type allows you to assign any type of value to a variable without any type checking.
// However, it can lead to runtime errors if you try to call methods or access properties that do not exist on the assigned value.

let value: any;

value = "Imtiaz Ali";
value = 22;
value = true;
value = { name: "Hussain Waris e Anbiya" };
value = [1, 2, 3, 4, 5];

value.toUpperCase();

// unknown type is a safer alternative to any type. It allows you to assign any type of value to a variable,
// but it requires you to perform type checking before calling methods or accessing properties on the assigned value.

let newValue: unknown;

newValue = "Imtiaz Ali";
newValue = 22;
newValue = true;
newValue = { name: "Hussain Waris e Anbiya" };
newValue = [1, 2, 3, 4, 5];

if (typeof newValue === "string") {
  newValue.toUpperCase();
}

// Types Check handling in try catch block

//  X Wrong way to handle error in catch block
try {
} catch (error: any) {
  console.log(error.message);
}

//  Right way to handle error in catch block
try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}