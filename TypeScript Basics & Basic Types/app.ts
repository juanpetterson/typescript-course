let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Juan';

// userName = userInput; // mismatch

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError('An error occurred!', 500);
