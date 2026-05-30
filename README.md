# 📘 Learning TypeScript

A structured, hands-on repository dedicated to mastering TypeScript from foundational concepts to advanced type safety practices. This project demonstrates TypeScript's robust type-system capabilities, focusing on compile-time safety, clean architecture, and type narrowing patterns.

---

## 🚀 Key Features & Learning Milestones

### 1. **Basic Typing, Inference & Annotation** (`src/typesInTs.ts`)
- **Type Inference:** Demonstrates TypeScript's ability to automatically infer types based on assigned values (e.g., `let name = "Imtiaz Ali"`).
- **Type Annotation:** Shows how to explicitly declare types for variables to ensure strict type constraints (e.g., `let myName: string = "Imtiaz Ali"`).

### 2. **Union & Literal Types** (`src/unionAndany.ts`)
- **Union Types:** Learn to specify multiple allowed types for a single variable using the `|` operator.
- **Literal Types:** Restrict variable assignments to precise, predefined values—excellent for state tracking (e.g., `"loading" | "success" | "failed"`).
- **The Escape Hatch (`any`):** Explores the `any` type, its flexibility, and why it should be avoided in production environments.

### 3. **Advanced Type Narrowing & Guards** (`src/typeNarrowing.ts`)
Comprehensive examples detailing how to narrow broad types down to precise ones:
- **`typeof` Guards:** Simple checks for primitive types.
- **Truthiness Checks:** Safety guards around optional/nullish variables.
- **`instanceof` Guards:** Class-based type identification.
- **`in` Operator Checks:** Property-based verification for structural types.
- **Custom Type Predicates:** Writing custom validator functions using `parameter is Type` (e.g., `obj is chaiOrder`).
- **Discriminated Unions:** Leveraging a common property (e.g., `type: "masala" | "ginger" | "elaichi"`) in `switch` blocks for exhaustive compiler validation.
- **Safe `unknown` Validation:** Utilizing array checking utilities to convert `unknown` data to typed structures safely.

---

## 📁 Repository Architecture

```text
Learning-TypeScript/
├── dist/                  # Compiled JavaScript artifacts (output of build)
├── src/                   # Source TypeScript files
│   ├── index.ts           # Entry point and basic compilation test
│   ├── typeNarrowing.ts   # Advanced type guards and runtime safety
│   ├── typesInTs.ts       # Foundational type inference & annotations
│   └── unionAndany.ts     # Union, literal types, and type escape hatches
├── package.json           # Scripts, dependencies, and project metadata
├── tsconfig.json          # Highly optimized TypeScript compiler configuration
└── README.md              # Project documentation
```

---

## 🛠️ Tech Stack & Configuration

- **Language:** [TypeScript ^5.9.3](https://www.typescriptlang.org/)
- **Runtime:** [Node.js](https://nodejs.org/)
- **Compiler Configuration (`tsconfig.json`):**
  - **Target:** `ESNext` for modern JavaScript features.
  - **Module Resolution:** `NodeNext` for standard ES modules in Node.js.
  - **Strictness:** `"strict": true` and `"noUncheckedIndexedAccess": true` enabled to enforce high-quality type safety rules.

---

## 💻 Getting Started

### 📋 Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16 or higher recommended) installed on your system.

### ⚙️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Imtiaz-Ali17314/Learning-TypeScript.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Learning-TypeScript
   ```
3. Install the dev dependencies:
   ```bash
   npm install
   ```

### 🏃 Running the Code
The project uses the TypeScript Compiler (`tsc`) to build modern JavaScript into the `dist/` directory.

- **Compile the project:**
  ```bash
  npm run dev
  ```
  *(Runs `npx tsc` to compile code from `src/` into `dist/`)*

- **Run the compiled entry point:**
  ```bash
  npm start
  ```
  *(Runs `node dist/index.js` to execute the output)*

---

## 📄 License

This project is licensed under the **ISC License**. Feel free to use it for your own learning and reference!
