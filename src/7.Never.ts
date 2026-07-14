//  Use Case of never type in typescript
type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard...");
    return;
  } else if (role === "user") {
    console.log("Redirecting to user dashboard...");
    return;
  }
  role; // at mouse hover -> (parameter) role: never
}

// Never Returning function example
function neverReturn(): never {
  while (true) {} // --> infinite loop, never end function
}
