let userInput: unknown;
let userName: string;

userInput = 'Max';
userInput = 5; 
if (typeof userInput === 'string') {
  userName = userInput;
}


function generateError(message: string, code: number) {
  throw {message: message, code: code}; 
}
generateError('An error occured', 500);