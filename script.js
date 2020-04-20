//assign arrays

var specChar = ['!', '?'];
var lowerPass = ['a', 'b', 'c'];// "qwertyuiopasdfghjklzxcvbnm";
var upperPass = ['A', 'B', 'C'];
var numPass = ["1", "2"];


var lengthChoice;
var passLength;

// //<========Validaton Code==========>
// var createPass = [];
//  console.log(createPass);
//  createPass.push(specChar);
//  console.log(createPass);
//  console.log(createPass[0]);
//  createPass.push(lowerPass);
//  console.log(createPass);
//  console.log(createPass[1][0])

//  for(var i=0;i<passLength;i++){
//   if(i<createPass.length){
//     createPass[i][Math.floor(math.random(createPass[i].length))]
//   }
//   else{
//     createPass[Math.random(createPass.length-1)][Math.random(createPass[0].length-1)]
//  }
//  }

//<========Validaton Code ends==========>


// Function to prompt user for password options
//function getPasswordOptions()

//fx to prompt user for specific data
function generatePassword() {

  //prompt user here
  confirm("Would you like to generate a new password?")
  //create createpass array here / master array
  createPass = [];
  //randomly select data from createpass to make your final pw




  lengthChoice = true;

  //conditional statement for pw length
  while (lengthChoice) {
    passLength = prompt("How many characters would you like your password to be? Select between 8 to 128 characters.");
    if (passLength < 8 || passLength > 129 || isNaN(passLength)) {
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

//<==============Not sure how to generate random password or validate==============>
  var password = "";
  for(var i=0; i<passLength;i++){
    // password = createPass[Math.floor(math.random(createPass.length-1))];
    password = password + createPass[Math.floor(math.random() * (createPass.length-1))];
    console.log(password)
  }

return password

}

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