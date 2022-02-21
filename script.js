var lengthPrompt;

// Character types selectors
var characterTypes = {
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  numeric: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  special: ['!', '#', '$', '%', '&', '(', ')', '*', '+', '\'', '\"', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '_', '`', '{', '|', '}', '~']
};

var selectionArray = [];
var finalArray = [];

function finalResult() {
  for (i = 0; i < lengthPrompt; i++) {
    var randomCharacter = selectionArray[Math.floor(Math.random() * selectionArray.length)];
    finalArray.push(randomCharacter);
  }
};

// criteria function
function criteria() {
  var capitalConfirm = window.confirm("Would you like your password to include capital letters?");
    if (capitalConfirm) {
      selectionArray.push(...characterTypes.upperCase);
    }
  var lowercaseConfirm = window.confirm("Would you like your password to include lowercase letters?");
    if (lowercaseConfirm) {
      selectionArray.push(...characterTypes.lowerCase);
    }
  var numbersConfirm = window.confirm("Would you like your password to include numbers?");
    if (numbersConfirm) {
      selectionArray.push(...characterTypes.numeric);
    }
  var specialConfirm = window.confirm("Would you like your password to include special characters?");
    if (specialConfirm) {
      selectionArray.push(...characterTypes.special);
    }
  finalResult();
};

// Password criteria
function generatePassword() {  
  // ask user how long they want their password to be
  lengthPrompt = window.prompt("How many characters would you like in your password?");
  // ensure the user chooses a password with no fewer than 8 and no more than 128 characters
  if (isNaN(lengthPrompt)) {
    window.alert("Please enter a number from 8 to 128.");
    generatePassword();
  }
  else if (lengthPrompt < 8 || lengthPrompt > 128) {
    window.alert("Password length must be between 8 and 128 characters in length.");
    generatePassword()
  }
  else {
    criteria();
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  finalArray = [];
  generatePassword();
  var password = finalArray.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);