//assign arrays

var specChar = ['!', '?', '@', '#', "$", "<", ">", "&", "-"];
var lowerPass = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperPass = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numPass = ["1","2","3","4","5","6","7","8","9","0"];

var lengthChoice;
var passLength;

//function to prompt user for specific data
function generatePassword() {

  //prompt user here
  confirm("Would you like to generate a new password?")
  //create createpass array here / master array
  createPass = [];

  lengthChoice = true;

  //conditional statement for pw length
  while (lengthChoice) {
    passLength = prompt("How many characters would you like your password to be? Select between 8 to 128 characters.");
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Please enter a valid amount of characters.");
    } else {
      lengthChoice = false;
      passLength;
    }
  }

  charChoice = true;

  while (charChoice) {
    passChar = confirm("Would you like any special characters in your password?");
    if (passChar) {
      createPass.push(specChar);
      charChoice = false;
    } else {
      console.log(createPass);
      break;
    }
  }

  lowerChoice = true;

  while (lowerChoice) {
    passLower = confirm("Would you like any lowercase characters in your password?");
    if (passLower) {
      createPass.push(lowerPass);
      lowerChoice = false;
    } else {
      console.log(createPass);
      break;
    }
  }

  upperChoice = true;

  while (upperChoice) {
    passUpper = confirm("Would you like any uppercase characters in your password?");
    if (passUpper) {
      createPass.push(upperPass);
      upperChoice = false;
    } else {
      console.log(createPass);
      break;
    }
  }

  var myPassword = "";
  console.log(createPass);
  var firstIndexArray;
  for(var i=0; i<passLength;i++){
    //index location of the first array in createPass
    //if i is less than the length of the createpass array (first array) - validation to grab at least one character of character options requested for
    if(i < createPass.length){
      firstIndexArray=i;
    }
    //Then pick random character choices for the rest
    else{
      firstIndexArray= Math.floor(Math.random() * ((createPass.length-1) - 0 + 1)) + 0;
    }
    
    var valueInsideSecArr = createPass[firstIndexArray][Math.floor(Math.random() * ((createPass[firstIndexArray].length-1) - 0 + 1)) + 0];

    myPassword += valueInsideSecArr
  }

return myPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //displays code on screen
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
