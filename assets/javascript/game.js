 /* variable initialization */
 var win=0;
 var lose=0;
 var count=9;
 var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
 var computerChoose="";
 var userChoose="";

 /* for New game */
 function init() {
     count=9;
     userChoose="";
 }

 /* choice of computer */
 function random() {
     var computerIndex=Math.floor(Math.random()*alphabet.length);
     computerChoose=alphabet[computerIndex];
 }

 /*rewrite all information at the end of game */
 function write(){
     document.getElementById("win").textContent=win;
     document.getElementById("lose").textContent=lose;
     document.getElementById("count").textContent=count;
     document.getElementById("count").textContent=count;
     document.getElementById("guess").textContent=userChoose;
 }

 /*start with computer's choice */
 random();

 /*if you press keyboard, */
 document.onkeyup=function(event) {
     var userKey=event.key;   //get the information of key which is pressing.
     if(alphabet.indexOf(userKey)>=0) {    //if you press alphabet,
         document.getElementById("wrong").textContent=""; 
         userChoose=userChoose+userKey+", ";   //collection of my keys during the current game.
         count--;
         if(userKey.toLowerCase()===computerChoose) { //if you win, new games start.
             win++;
             init();
             random();
             write();
         } else if (count===0) { //if you lose, new games start.
             lose++;
             init();
             random();
             write();
         } else { //continue the current game while count is up to 0.
             document.getElementById("count").textContent=count;
             document.getElementById("guess").textContent=userChoose;
         }
     } else { //if you didn't press alphabet,
         document.getElementById("wrong").textContent="Wrong Input!! You should input Alpahbet(a-z)";
     }
 }