//assign arrays

var specChar=['!','?'];
var lowerPass = ['a','b','c']// "qwertyuiopasdfghjklzxcvbnm";
var upperPass = ['A','B','C']
var numPass = ["1","2"];


var lengthChoice;
var passLength;


// var userlength=5
var finalPass="";
// for(var i=0; i<userlength;i++){
//   pw+=createPass[Math.floor(math.random(createPass.length-1))]
// }


// Function to prompt user for password options
//function getPasswordOptions()

//fx to prompt user for specific data
function generatePassword(){
  // var hasUpper = confirm("Do you want uppercase characters?");
  // var hasLower = confirm("Do you want uppercase characters?");
  // var hasSpec = confirm ("Do you want special characters?");
  // var hasNum = confirm("Do you want numbers in you password?");
  // console.log(hasUpper);

  //prompt user here
  prompt("Would you like to generate a new password?")
  //create createpass array here

  //randomly select data from createpass to make your final pw

  return "final pw";
}

function writePassword() {
  lengthChoice = true;

//conditional statement for pw length
while (lengthChoice) {
  passLength = prompt("How many characters would you like your password to be? Select between 8 to 128 characters.");
  if (
    passLength < 8 || passLength > 128 || isNan(passLength)) {
    alert ("Please enter a valid amount of characters."); 
  }
    else {
      lengthChoice = false;
    }
}
}
console.log("Length: " + passwordLength);


var charChoice = true;

while (charChoice) {
  passwordChar = prompt("Would you like any special characters in your password?");
  if (
    prompt("Select which special characters you want to include? @, #, !, $, &, ?") 
  ) {
    alert ("Okay");
  } 
  
  //{
    //else {
      //alert ("Please enter a valid special character."); 
  //}
  else {
      charChoice = false;
    }
}
//}









// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Display new password