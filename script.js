// Assignment Code
var generateBtn = document.querySelector("#generate");
// lowercase characters
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// uppercase characters
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// special characters
var specialChar = ["!","@","^","*","$","/","~","."];
var passChoices = [];
// variable console.logs
// console.log(lowerCase);
// console.log(upperCase);
// console.log(specialChar);

function generatePassword(){
    // ask user for password length
    var passwordLength = window.prompt("How many characters long would you like your password to be?");
    // IF the user enters something other than a number value ->
        // DO alert the user that "Please enter a number!"
        // 'STOP THE FUNCTION' aka 'return'
         // IF the entered number is less than 8
        // alert the user that we need a number greater than or equal to 8 "enter 8 or more"
        // 'STOP THE FUNCTION!' aka 'return'
    // IF the entered number is greater than 128
        // alert the user that we need a number less than or equal to 128
        // 'STOP THE THE FUNCTION!' aka 'return'

    if (passwordLength < 8 || passwordLength > 128){
        alert("Please enter a number greater than 8 and less than 128");
        return;
    }

    var specialChars = window.confirm("Would you like to use Special Characters in your password?");

    var upperChars = window.confirm("Would you like to use Uppercase characters in your password?");
    // console.log(upperChars);
    
    var lowerChars = window.confirm("Would you like to use Lowercase characters in your password?");
    // console.log(lowerChars);

    if (specialChars === true){
        // we want to add special characters into the passChoices array
        passChoices.concat(specialChar);
        passChoices.push(specialChar);
        console.log(passChoices);
    }
    if (upperChars === true){
        // we want to add upper case characters into the passChoices array
        passChoices.push(upperChars);
        console.log(passChoices);
    }
    if (lowerChars === true){
        // we want to add lower case characters into the passChoices array
        passChoices.push(lowerChars);
        console.log(passChoices);   
    }

};

// Write password to the #password input

function writePassword() {
    // I need to build the generatePassword() function
        // generate a random password from the upperCase, lowerCase and specialChar variables
       
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
