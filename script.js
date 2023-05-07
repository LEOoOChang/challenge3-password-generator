// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate a random password based on user criteria
function generatePassword() {
    var length = 0;
    while (length < 8 || length > 128) {
      length = prompt("How many characters would you like to contain in your password? (8-128)");
    }
    
    var uppercase = false;
    var lowercase = false;
    var numbers = false;
    var symbols = false;
    
    while (!uppercase && !lowercase && !numbers && !symbols) {
      uppercase = confirm("Would you like to include uppercase letters?");
      lowercase = confirm("Would you like to include lowercase letters?");
      numbers = confirm("Would you like to include numbers?");
      symbols = confirm("Would you like to include symbols?");
    
      if (!uppercase && !lowercase && !numbers && !symbols) {
        alert("You must select at least one character type.");
      }
    }
  }
  
  var charset = "";
  if (uppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numbers) {
    charset += "0123456789";
  }
  if (symbols) {
    charset += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  }
  
  var password = "";
  for (var i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  
  return password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);