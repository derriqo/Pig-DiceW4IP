// Business Logic

function PigDice(diceSides) {

  this.diceSides = diceSides;

  this.roll = function() {
    return Math.round(Math.random() * this.diceSides) + 1;

  }

}

// User Logic
$(document).ready(function() {
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  var button = document.getElementById('droll');

  $("#droll").click(function() {
    var result = new PigDice(6)
    printNumber(result.roll());
  })
});
