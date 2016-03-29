console.log("Bank");

// var checkYourBalance = document.getElementById("savings-button");

var depositInput = document.querySelectorAll('#depositInput');
var depositButton = document.querySelectorAll('#deposit');

var withdrawInput = document.querySelectorAll('#withdrawInput');
var withdrawButton= document.querySelectorAll('#withdraw');

var startingBalance = 2400;
var display = document.querySelectorAll('#savings')

drawBalance();

depositButton[0].addEventListener('click', function() {
  var amount = depositInput[0].value;
  console.log(amount);
  var isNumber = checkInput(amount);
  console.log(isNumber);
  if (isNumber === true) {
    startingBalance += Number(amount);
    drawBalance()
  } else {
    display[0].value = 'Error';

  }

})

withdrawButton[0].addEventListener('click', function() {
  var amount = withdrawInput[0].value;
  if (startingBalance - amount > 0) {
  console.log(typeof startingBalance);
  console.log(typeof amount);
  startingBalance -= Number(amount);
  drawBalance()
}
  else {
    alert("You don't have sufficient funds.")
  }
})

function drawBalance() {
  display[0].value = startingBalance;
}

function checkInput(value) {
  if (value == Number(value)) {
    return true;
  } else {
    return false;
  }
}

// If the amount they are trying to withdraw is bigger
// than startingBalance give error otherwise you can

// whatIsTheBalance[0].addEventListener('click', function() {
//  startingBalance += 50;
//  drawBalance()
//  console.log(startingBalance)
// })
