// Assignment Code
var generateButton = document.querySelector("#generate");

// Added special characters, numbers and alphabets in var characters. We will create random passwords with these.
var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// //Used var passwordMinLength and passwordMaxLength to indicate the minimum and maximum characters we are using
var passwordMaxLength = 128
var passswordMinLength = 8


var password = ""

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);
