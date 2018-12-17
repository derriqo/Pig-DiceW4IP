var score = 0;
var maxScore = 100;
var rolls = 0;
var maxRolls = 10;

 function rollDice()
 {
    var a = Math.floor(Math.random()*6)
    var b = Math.floor(Math.random()*6)
 }

// function Player (one,two) {
//   this.oneName = one;
//   this.twoName = two;
// }


$(document).ready(function (){
 $("form#newplayer").click(function(event) {
 event.preventDefault();

 var inputtedOneName = $("input#player1").val();
 var inputtedTwoName = $("input#player2").val();

var newPlayer = new Player(inputtedOneName, inputtedTwoName);
$("ul#players").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

   $("input#new-first-name").val("");
   $("input#new-last-name").val("");
});
});
