var
Let
Const
// var:
// Function-scoped or globally-scoped, depending on where it's declared. It can be redeclared and 
// reassigned.

// let:
// Block-scoped, can be reassigned but not redeclared within the same scope.

// const:
// Block-scoped, cannot be reassigned or redeclared after initialization.

// For Examples
var x = 10; // Number
let name = "John"; // String
const isTrue = true; // Boolean

x = "Hello"; // Reassignment is allowed for var and let
// isTrue = false; // Error: Assignment to constant variable

let y; // Undefined by default