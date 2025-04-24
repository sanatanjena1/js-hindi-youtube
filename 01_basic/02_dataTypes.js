// Primitive Data Types

// Number: Represents numeric values, including integers and floating-point numbers.
// BigInt: Represents integers of arbitrary precision, introduced in ES2020.
// String: Represents a sequence of characters.
// Boolean: true or false
// Null: Represents the intentional absence of a value.
// Undefined: Indicates that a variable has not been assigned a value.
// Symbol: Represents a unique and immutable value, often used as object property keys (introduced in ES6).

// For Example Primitive data types
let age = 30; // Number
let bigNumber = 9007199254740992n; // BigInt
let name = "John Doe"; // String
let isTrue = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined
let uniqueKey = Symbol("key"); // Symbol


// Non-primitive Data Types Also known as reference types, 
// can hold collections of values and are mutable. They are compared by reference

// For Example Non-primitive data types

// Objects: Collections of key-value pairs.
let person = { name: "John", age: 30 };

// Array: An ordered list of values.
let numbers = [1, 2, 3, 4, 5];

// Function: A block of code designed to perform a specific task.
// Functions: Reusable blocks of code.
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Dates: Objects representing specific points in time.
let now = new Date();

// RegExp: Objects representing regular expressions.
let pattern = /abc/;


// When assigning a reference type to a variable, the variable stores a reference to the object's location in memory, not the object itself. This is different from primitive data types (like numbers, strings, booleans, null, undefined, and symbols), where the variable directly stores the value.
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 now references the same array as arr1

arr2.push(4); // Modifying arr2 also modifies arr1
console.log(arr1); // Output: [1, 2, 3, 4]
consoleTable([arr1, arr2]);

