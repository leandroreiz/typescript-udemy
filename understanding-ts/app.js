var userInput;
var userName;
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
    throw { message: message, code: code };
}
generateError('An error occurred!', 500);
