// union and any data type

// union : in ma sy koi data type ka use karna hai.
let value: string | number | boolean = "Imtiaz Ali";
value = 22;
value = true;

let apiRequestStatus: "loading" | "success" | "failed" = "loading";
apiRequestStatus = "success";
apiRequestStatus = "failed";

// any : mujhy parwa nahi jo b data type ho.
let anyValue: any = "Imtiaz Ali";
anyValue = 22;
anyValue = true;
