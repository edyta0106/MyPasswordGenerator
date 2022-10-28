// Assignment Code
var generateBtn = document.querySelector("#generate");

// Added special characters, numbers and alphabets arrays with characters. We will create random passwords with these.
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialArray = ['!', '@', '#', '$', '*', '%'];

// Create function. Within the function we create an algorithm to generate password.
function generatePassword() {
  
  // Used variable passwordLength to prompt the minimum and maximum characters we are using
  var passwordLength = prompt("Choose a length of your password between 8 and 128");
  passwordLength = Number(passwordLength);

  // Create an if statement for an alert when characters don't meet the required password length
  if (passwordLength < 8 || passwordLength > 128) {
      alert("Password must me between 8 and 128 characters long")
      generatePassword()
   };

  // Write prompts for user input and check the 'confirm' in the variables
  var lowerCase = confirm("Please confirm lower case letters");
  var upperCase = confirm("Please confirm upper case letter");
  var numbers = confirm("Please confirm numbers");
  var special = confirm("Please confirm special characters");

  // Create newChars variable to include and array of lower case letters, upper case letters, numbers and special characters
  var newChars = [];

   if (lowerCase) {
      newChars = newChars.concat(lowerCaseArray)
   };
   if (upperCase) {
      newChars = newChars.concat(upperCaseArray)
   };
   if (numbers) {
      newChars = newChars.concat(numbersArray)
   };
   if (special) {
      newChars = newChars.concat(specialArray)
   };
    console.log(newChars);

  // Create a variable for a final password
  var finalPassword = [];

  // Create random password using 'for' loop
  for (var i = 0; i <= passwordLength; i ++) {
      // Create a random number variable
      // Use the Math.floor and Math.random methods to create random password
    var randomNumber = Math.floor(Math.random() * newChars.length);
      // Use concat method to merge the array of newChars of random numbers to the final password
    finalPassword = finalPassword.concat(newChars[randomNumber]);
    console.log(finalPassword);
    };
    // To remove commas from the array in the finalPassword, we use the 'join' method
    finalPassword = finalPassword.join("");
    console.log(newChars);
    console.log(finalPassword);
    return(finalPassword);
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
