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
  // for loop that uses the number from lengthPrompt given by the user as the condition for executing the code block
  for (i = 0; i < lengthPrompt; i++) {
    // using Math.random() function to generate a random number to correspond with a value from the selectionArray and assigning it to randomCharacter variable
    var randomCharacter = selectionArray[Math.floor(Math.random() * selectionArray.length)];
    // with each iteration, the randomCharacter is pushed to finalArray
    finalArray.push(randomCharacter);
  }
};

// criteria function
function criteria() {
  // windows for user to confirm the use of each character type
  var capitalConfirm = window.confirm("Would you like your password to include capital letters?");
    // if the user confirms the window, push the values in the array upperCase from the characterTypers object into selectionArray.
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
  // ensure user selects at least one character type
  if (selectionArray.length === 0) {
    window.alert("Please choose at least one character type.");
    criteria();
  }
  // if requirements are met, run the finalResult() function.
  else {
    finalResult();
  }
};

// Password criteria
function generatePassword() {  
  // ask user how many characters they want their password to have
  lengthPrompt = window.prompt("How many characters would you like in your password? (8-128)");
  // ensure the user enters a number no lower than 8 and no higher than 128
  if (isNaN(lengthPrompt)) {
    window.alert("Please enter a number from 8 to 128.");
    generatePassword();
  }
  else if (lengthPrompt < 8 || lengthPrompt > 128) {
    window.alert("Password length must be between 8 and 128 characters in length.");
    generatePassword()
  }
  // if requirements are met, run the criteria() funciton.
  else {
    criteria();
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // clearing arrays after pressing Generate Password button again
  finalArray = [];
  selectionArray = [];
  // run generatePassword function
  generatePassword();
  // ensuring the finalArray appears as a string and assigning it to password variable
  var password = finalArray.join("");
  // linking generated password with html
  var passwordText = document.querySelector("#password");

  // giving passwordText variable the value from password variable
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);