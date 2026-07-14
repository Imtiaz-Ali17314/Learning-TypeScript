// Type Narrowing and Type Guards

// Findout type of variable
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `making ${kind} chai...`;
  }
  return `Chai order:  ${kind}`;
}

// Findout truthiness
function serveChai(msg?: string) {
  if (msg) {
    `Serving ${msg}`;
  }
  return `Serving default chai...`;
}

//  Exhaustive checks
function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return "small cutting chai....";
  } else if (size === "medium" || size === "large") {
    return "make extra chai....";
  }
  return `Chai order  #${size}`;
}

// Special case of exhaustive checks and use of all the type sof javascript that ckeck the type of variable
class fullChai {
  serve() {
    return "Serving full chai";
  }
}
class cutChai {
  serve() {
    return "Serving cutting chai";
  }
}

function serve(chai: fullChai | cutChai) {
  if (chai instanceof fullChai) {
    return chai.serve();
  }
}

// Super power of typescript for custom types
type chaiOrder = {
  type: string;
  sugur: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugur === "number"
  );
}

function serveOrder(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving chai order ${item.type} with ${item.sugur} sugur`;
  }
  return `Serving custom chai ${item}`;
}

// Use cases of type
type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Making masala chai with ${order.spiceLevel} spice`;
      break;
    case "elaichi":
      return `Making elaichi chai`;
      break;
    case "ginger":
      return `Making ginger chai`;
      break;
  }
}

function brew(order: MasalaChai | GingerChai) {
  if ("spiceLevel" in order) {
    return `Brewing masala chai with ${order.spiceLevel} spice`;
  }
}

// Use cases of Unknown
function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every((item) => typeof item === "string");
}
