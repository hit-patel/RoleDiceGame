 "use strict"


 var activePlayer = true;
 alert("player 1 is ready to roll hhhhhahahhh!!!!!!");
 var score1 = document.getElementById("score1");
 var score2 = document.getElementById("score2");
 var divplayer1 = document.getElementById("divplayer1");
 var divplayer2 = document.getElementById("divplayer2");
 var circle1 = document.getElementById("circle1");
 var circle2 = document.getElementById("circle2");
 var vertical = document.getElementById("vertical");
 var die1 = document.getElementById("die1");
 var die2 = document.getElementById("die2");
 var currentScore1 = document.getElementById("currentScore1");
 var currentScore2 = document.getElementById("currentScore2");




 function rollDice() {

     var d1 = Math.floor(Math.random() * 6) + 1;
     var d2 = Math.floor(Math.random() * 6) + 1;
     console.log(d1);
     die1.innerHTML = d1;
     die2.innerHTML = d2;
     var dice1 = parseInt(die1.innerHTML);
     var dice2 = parseInt(die2.innerHTML);
     var diceTotal = dice1 + dice2;
     checkDiceValue();


     if (activePlayer) {
         var num = currentScore1.innerHTML;
         console.log(num);
         var num2 = parseInt(num);

         if ((dice1 == 1) && (dice2 == 1)) {
             score1.innerHTML = 0;
             currentScore1.innerHTML = 0;
             divplayer2.style.background = "#80bfff";
             divplayer1.style.background = "white";
             circle2.style.background = "#4d4d00";
             circle1.style.background = "yellow";
             activePlayer = false;

         } else if ((dice1 == 1) || (dice2 == 1)) {

             currentScore1.innerHTML = 0;
             divplayer2.style.background = "#80bfff";
             divplayer1.style.background = "white";
             circle2.style.background = "#4d4d00";
             circle1.style.background = "yellow";
             activePlayer = false;

         } else {

             var num2 = num2 + diceTotal;
             currentScore1.innerHTML = num2;
             console.log(num2);
         }

     } else {
         var num3 = currentScore2.innerHTML
         var num4 = parseInt(num3);


         if (dice1 == 1 && dice2 == 1) {
             score2.innerHTML = 0;
             currentScore2.innerHTML = 0;
             divplayer2.style.background = "white";
             divplayer1.style.background = "#80bfff";
             circle2.style.background = "yellow";
             circle1.style.background = "#4d4d00";
             activePlayer = true;
         } else if (dice1 == 1 || dice2 == 1) {
             currentScore2.innerHTML = 0;
             divplayer2.style.background = "white";
             divplayer1.style.background = "#80bfff";
             circle2.style.background = "yellow";
             circle1.style.background = "#4d4d00";
             activePlayer = true;
         } else {

             var num4 = num4 + diceTotal;
             currentScore2.innerHTML = num4;
             console.log(num4);
         }
     }
 }

 function holdPlayer() {
     var localScore1 = parseInt(currentScore1.innerHTML);
     var localScore2 = parseInt(currentScore2.innerHTML);

     if (activePlayer) {
         var sumScore1 = parseInt(score1.innerHTML);
         var globleScore = localScore1 + sumScore1;
         score1.innerHTML = globleScore;
         die1.innerHTML = 0;
         die2.innerHTML = 0;
         currentScore1.innerHTML = 0;
         console.log(score1.innerHTML);
         divplayer2.style.background = "#80bfff";
         divplayer1.style.background = "white";
         circle2.style.background = "#4d4d00";
         circle1.style.background = "yellow";
         activePlayer = false;

     } else {

         var sumScore2 = parseInt(score2.innerHTML);
         var globleScore2 = localScore2 + sumScore2;
         score2.innerHTML = globleScore2;
         die1.innerHTML = 0;
         die2.innerHTML = 0;
         currentScore2.innerHTML = 0;
         divplayer2.style.background = "white";
         divplayer1.style.background = "#80bfff";
         circle2.style.background = "yellow";
         circle1.style.background = "#4d4d00";
         activePlayer = true;
     }
 }

 function checkDiceValue() {
     if (score1.innerHTML >= 100) {
         alert("player 1 is winner");
         location.reload();
     } else if (score2.innerHTML >= 100) {
         alert("player 2 is winner");
         location.reload();
     }

 }

 function refresh() {
     location.reload();
 }
