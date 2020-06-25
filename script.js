// VARIABLES
// ==========================================================================
var stringPwd = "";
var specialChar = "/+[(@!#$%^&*)(+=._-]{1,}/";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var randSpecial = 0;
var ranNumber = 0;
var i = 0;

// FUNCTIONS
//==========================================================================
function insertString(a, b, at) {
  var position = a;
  if (position !== -1) {
    return at.substr(0, position) + b + at.substr(position);
  }
  return "substring not found";
}

// Function Generate Special Character ===============================
function specialCharacter(specialChar) {
  var i = Math.floor(Math.random() * 25) + 1;
  if (i < 25) {
    return i;
  } else if (i > 24) return 24;
}

// Function Generate Upper Case Letter ===============================

function upperCaseLetter(upperCase) {
  var i = Math.floor(Math.random() * 24) + 1;
  if (i < 24) {
    return i;
  } else if (i > 23) return 23;
}

// Function Generate Lower Case Letter ===============================

function lowerCaseLetter(lowerCase) {
  var i = Math.floor(Math.random() * 24) + 1;
  if (i < 26) {
    return i;
  } else if (i > 25) return 26;
}

// Function Generate Number Character ===============================

function rannumbers(numbers) {
  var i = Math.floor(Math.random() * 9) + 1;
  if (i < 10) {
    return i;
  } else if (i > 9) return 9;
}

//Function Generate Preliminary Password ============================

function makePwd1(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  var ranNumber = 0;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
ranNumber = Math.random() * 20;
if (ranNumber < 12) {
  ranNumber = ranNumber + 8;
}

//Generating Special Character=================================================

function generateSpecial() {
  var j = specialCharacter(specialChar);
  stringPwd = insertString(j, specialChar[j], stringPwd);
}

//Function Generate Upper Case  ===========================================================
function generateUpperCase() {
  var j = upperCaseLetter(upperCase);
  stringPwd = insertString(j, upperCase[j], stringPwd);
}

//Functon Generate Lower Characters ======================================================

function generateLowerCase() {
  var j = lowerCaseLetter(lowerCase);
  stringPwd = insertString(j, lowerCase[j], stringPwd);
}

//Function Generate Number ===============================================================

function generateNumber() {
  var j = rannumbers(numbers);
  stringPwd = insertString(j, numbers[j], stringPwd);
}

stringPwd = makePwd1(ranNumber);
console.log("first pwd: ", stringPwd);

//prompt("starting program");

//alert(
//  "Generating a Password\nYour secure password will have at least one special character\nat least one Upper Case Letter, at least one Lower Case Letter\nand at least one number"
//);

var optionSpecial = prompt(
  "Do you want to include at least one Special Character? : "
);

if (optionSpecial === "y" || optionSpecial === "Y") {
  generateSpecial();
}

var optionUpperCase = prompt(
  "Do you want to include at least one Upper Case Character? : "
);

if (optionUpperCase === "y" || optionUpperCase === "Y") {
  generateUpperCase();
}

var optionLowerCase = prompt(
  "Do you want to include at least one Lower Case Character? : "
);

if (optionLowerCase === "y" || optionLowerCase === "Y") {
  generateUpperCase();
}

var optionNumber = prompt(
  "Do you want to include at least one Number Character? : "
);

if (optionNumber === "y" || optionNumber === "Y") {
  generateUpperCase();
}

//Generating Peliminary Password ====================================================

prompt("Your password is : ", stringPwd);

document.getElementById("result").innerHTML = stringPwd.toString();

//======================================================================
