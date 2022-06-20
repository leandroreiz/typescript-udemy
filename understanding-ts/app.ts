let userInput: unknown;
let userName: string;

userInput = 'Leandro';
userInput = 5;

// Type 'unknown' is not assignable to type 'string'
// userName = userInput;

// If you check for the type, TypeScript will allow this assignment
if (typeof userInput === 'string') {
  userName = userInput;
}