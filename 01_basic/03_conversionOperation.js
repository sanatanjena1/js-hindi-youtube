console.log("hello conversionOperation");

// Implicit Conversion
// Implicit conversion, also known as type coercion, occurs automatically when JavaScript expects a value of a particular type but receives a value of a different type.
//  For example:
let x = 5 + "5"; // x is "55" (string concatenation)
let y = 5 * "5"; // y is 25 (string converted to number)
let z = 5 == "5"; // z is true (string converted to number for comparison)

// Explicit Conversion
// Explicit conversion happens when the programmer intentionally converts a value from one type to another using built-in functions or operators.
let str = String(123); // str is "123"
let num = Number("123"); // num is 123
let bool = Boolean(0); // bool is false

// Specific Conversion Operators
// Unary + Operator: 
// Can be used to convert a value to a number
let str = "123";
let num = +str; // num is 123

// parseInt() and parseFloat(): 
// Used to parse strings and convert them to numbers.
let num1 = parseInt("10"); // num1 is 10
let num2 = parseFloat("10.5"); // num2 is 10.5

// BigInt Conversion
// ToBigInt(argument): 
// Converts the argument to a BigInt value. Explicit conversion is required for BigInt.
let bigIntValue = BigInt(100); // bigIntValue is 100n


/*Important Considerations
Null and Undefined:
null converts to 0 in numeric contexts and "null" in string contexts. undefined converts to NaN in numeric contexts and "undefined" in string contexts.
Objects:
Objects are converted to primitives using the ToPrimitive abstract operation, which often involves calling the valueOf or toString methods of the object.
Symbols:
Symbols do not allow implicit conversion and will throw a TypeError if used in a way that triggers implicit conversion
*/

