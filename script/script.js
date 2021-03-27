
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
//see if you can combine these if statements into one
 if (isNaN(passwordLength)) {
    alert("You need to use numbers!");
    return "";
     }
 if(passwordLength < 8 || passwordLength > 128) {
     alert("password must be more than 8 and less than 128");
     return "";
 }

//  Password criteria variables to confirm what they want to use in the new password.
  let includeLowercaseLetters = confirm("do you want to use lowercase letters?");
  let includeUppercaseLetters = confirm("do you want to use uppercase letters?");
  let includeNumbers = confirm("do you want to use numbers?");
  let includeSpecialCharacters = confirm("Do you want to use special characters?");
  
  let masterArray = [];

 if (includeLowercaseLetters === true) {
    masterArray.push(...lowercaseLettersArray)
  }
  if (includeUppercaseLetters === true) {
    masterArray.push(...uppercaseLettersArray)
  }
  if (includeNumbers === true) {
    masterArray.push(...numbersArray)
  }
  if (includeSpecialCharacters === true) {
    masterArray.push(...specialCharactersArray)
  }

  let password = ""; 

//  while loop running the loop of the given password length chosen 
  let i = 0;

  while (i < passwordLength) {
    i++;
    password += masterArray[Math.floor(Math.random() * masterArray.length)];
  };
        return password;
    }
    
    
generateBtn.addEventListener("click", writePassword);{
    generateBtn.style.backgroundColor = "chocolate";
}
        
    