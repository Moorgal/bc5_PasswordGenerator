// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let characterGroups = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters];
let groupNames = ['Special Characters', 'Numeric Characters', 'Lowercase Characters', 'Uppercase Characters'];
let choosenGroups = [];
// Function to prompt user for password options
function getPasswordOptions() {
  let password;
  do {
    password = prompt('Please select a length for the password between 10 and 64:');
  } while (password < 10 || password > 64);

  for (let i = 0; i < characterGroups.length; i++) {
    if (confirm('Would you like to include ' + groupNames[i] + ' in your password? Ok = yes; Cancel = no') == true) {
      choosenGroups.push(characterGroups[i]);
    }
  }
  if (choosenGroups.length < 1) {
    alert('You need to include at least one type of character');
  }
  return password;
}
console.log(choosenGroups);
// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let index = arr[randomIndex];
  return index;
}

// Function to generate password with user input
function generatePassword() {
  let finalPassword = '';
  let amount = getPasswordOptions();
  for (let i = 0; i < amount; i++) {
    randomGroup = getRandom(choosenGroups);
    singleCode = getRandom(randomGroup);
    finalPassword += singleCode;
  }
  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  choosenGroups = [];
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
