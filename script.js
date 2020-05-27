let getRandomNumber = function(start, range) {
  let getRandom = Math.floor((Math.random() * range) + 
  start);
  while(getRandom > range) {
    getRandom = Math.floor((Math.random() * range) +
    start);
  }
  return getRandom;
}
console.log(getRandomNumber(8, 128));

var x= "012345789!@#$%^&*()_-+=[];:.?/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function generate() {
    var password='';
    for (let index = 1; index <= 10; index++) {
        var c =Math.floor((Math.random()*x.length)+0);
        password+= x.charAt(c);
    }
    console.log(password);
    document.getElementById('pass').innerHTML=`<h1>${password}</h1>`;
}

var userName = prompt("Hello, Whats Your Name?");
alert("Welcome Would you like a new password? " + userName);
var confirmCharacters = prompt("Pick a number between 8 - 128 Characters");

var upperCase = "upperCase";
var lowerCase = "lowerCase";
var numbers = "numbers";
var symbols = "symbols";

if (confirmCharacters) {
   alert(upperCase + " " + lowerCase + " "  + numbers + " " + symbols); 
}
else {
  alert("No Password For You");
}
var confirmUppercase = confirm("Would You like UpperCase values?");
var confirmLowercase = confirm("Would You like LowerCase values?");
var confirmNumbers = confirm("Would You like Numbers");
var confirmSymbols = confirm("Would You like Symbols?");


      
    
  
    














