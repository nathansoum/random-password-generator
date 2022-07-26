// Assignment Code
var generateBtn = document.querySelector('#generate');



function generatePassword() {
  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperChars = ["A", "B", "C", "D", "E", "D", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ",", "]", "^", "_", "`", "{", "|", "}", "~"];
  var numbChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var userChoice = "";

  // TODO: add code to generate the password here
  // Asks for user input
var userLen = prompt("How many characters would you like for your password? Please choose between 8 and 128 characters.");
// If user does not input a number between 8 and 128
if (userLen < 8 || userLen > 128) {
  alert("Please enter a number between 8 and 128.");
} else {
  // Prompts users & ask if they would like lowercase characters in their password
  var useLower = confirm("Would you like your password to include lowercase characters?");
  // If user chooses yes, add all lowercase characters to userChoice
  if (useLower) {
    userChoice = lowerChars.concat(userChoice);
  };
  // Prompts user & ask if they would like uppercase characters in their password
  var useUpper = confirm("Would you like your password to include uppercase characters?");
  // If user chooses yes, add all uppercase characters to userChoice
  if (useUpper) {
    userChoice = upperChars.concat(userChoice);
  };
  // Prompts user & ask if they would like special characters in their password
  var useSpecial = confirm("Would you like your password to include special characters?");
  // If user chooses yes, add all special characters to userChoice
  if (useSpecial) {
    userChoice = specChars.concat(userChoice);
  };
  // Prompts user & ask if they would like numbers in their password
  var useNums = confirm("Would you like your password to include numbers?");
  // If user chooses yes, add all numbers to userChoice
  if (useNums) {
    userChoice = numbChars.concat(userChoice);
  };
  // If user chooses no, they will be prompted that one character type must be chosen
  if (useLower === false && useUpper === false && useSpecial === false && useNums === false) {
    alert("Please select at least one character type.");
    generatePassword();
  }


  var password = "";
  for (var i = 0; i < userLen; i++) {
    password = password + userChoice[Math.floor(Math.random() * userChoice.length)];
    }
}
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);