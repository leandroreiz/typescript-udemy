"use strict";
let userInput;
let userName;
userInput = 'Leandro';
userInput = 5;
// Type 'unknown' is not assignable to type 'string'
// userName = userInput;
// If you check for the type, TypeScript will allow this assignment
if (typeof userInput === 'string') {
    userName = userInput;
}
// Type never
function generateError(message, code) {
    throw { message, code };
}
generateError('An error occurred!', 500);
