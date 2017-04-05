 "use strict"


 var activePlayer = true;

 if (activePlayer) {
     var divplayer1 = document.getElementById("divplayer1");
     var divplayer2 = document.getElementById("divplayer2");
     var circle1 = document.getElementById("circle2");
     var circle2 = document.getElementById("circle2");
     divplayer2.style.backgroungColor = "red";
     divplayer1.style.backgroungColor = "white";
     circle2.style.backgroungColor = "red";
     circle1.style.backgroungColor = "white";

 }

 function rollDice() {
     var die1 = document.getElementById("die1");
     var die2 = document.getElementById("die2");
     var currentScore1 = document.getElementById("currentScore1");



     var d1 = Math.floor(Math.random() * 6) + 1;
     var d2 = Math.floor(Math.random() * 6) + 1;
     die1.innerHTML = d1;
     die2.innerHTML = d2;
     var diceTotal = d1 + d2;
     var num = currentScore1.innerHTML
     var num2 = parseInt(num);

     var num2 = num2 + diceTotal;
     currentScore1.innerHTML = num2;
     console.log(num2);

 }


 // if(!isNaN(currentScore1.innerHTML)){
 //    eval(currentScore1.innerHTML);
 // }
 function holdPlayer() {

     var activePlayer = false;

 }
