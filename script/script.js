
// // Arrays
let generateBtn = document.querySelector("#generate");

let lowercaseLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let uppercaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let specialCharactersArray = ["!", "@", "#", "%", "^", "&", "*", "(", ")"]

// // Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};

function generatePassword() {
  let passwordLength = parseInt(prompt("How long do you want your password?"));
 
// prompt user for user password length between 8-128 characters
// see if you can combine both of these if statements in one
 if (isNaN(passwordLength)) {
    alert("You need to use numbers!");
    return "";
     }
 if(passwordLength < 8 || passwordLength > 128) {
     alert("password must be more than 8 and less than 128");
     return "";
 }
    };
    
    
generateBtn.addEventListener("click", writePassword);{
    generateBtn.style.backgroundColor = "chocolate";
}
        
    