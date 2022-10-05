// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // prompt password length
  var passwordLength = prompt("What is the length of your password?");
  // prompt include lowercase
  var includeLowercase = confirm("Do you want to include lowercase?");
  // prompt include uppercase
  var includeUppercase = confirm("Do you want to include uppercase?");
  // prompt include numeric
  var includeNumeric = confirm("Do you want to include numbers?");
  // prompt include special
  var includeSpecial = confirm("Do you want to include special characters?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please use at least 8 characters and fewer than 128 characters.");
    return
  }
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please choose at least one character type.");
    return
  }
 
  // we need to randomly select characters between 8 and 128
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = lowercaseCharacters.toUpperCase();
  var numericCharacters = "1234567890";
  var specialCharacters = "!@#$%^&*()";
  var allCharacters = "";
  if (includeLowercase) {
    allCharacters += lowercaseCharacters;
    // same as above: allCharacters = allCharacters + lowercaseCharacters
  }
  if (includeUppercase) {
    allCharacters += uppercaseCharacters;
  }
  if (includeNumeric) {
    allCharacters += numericCharacters;
  }
  if (includeSpecial) {
    allCharacters += specialCharacters;
  }
  var randomPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    var randomCharacter = allCharacters[randomIndex]; 
    randomPassword += randomCharacter;
  }
return randomPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
