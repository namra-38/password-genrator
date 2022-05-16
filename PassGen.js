
let passwordArray = [">gdjUFgkvRTTVS", "eg<Wi@jPVkhw", "QYY?'1!|hdGIN", "NcR^DfghUZjh"]

let passwordOne = document.getElementById("pass-1");
let passwordTwo = document.getElementById("pass-2");
let passwordThree = document.getElementById("pass-3");
let passwordFour = document.getElementById("pass-4");


function generatePassword() {
  // for(let i = 0; i < passwordArray.length; i++){
    passwordOne.value = passwordArray[0]
    passwordTwo.value = passwordArray[1]
    passwordThree.value = passwordArray[2]
    passwordFour.value = passwordArray[3]
  // }
}

function copyText(){
  var copyTxt = document.getElementById("pass-1");
  navigator.clipboard.writeText(copyTxt.value);
}
// $('#pass-1').click(function () {
//     var copyText = document.getElementById("pass-1");
//     navigator.clipboard.writeText(copyText.value);
//     })


