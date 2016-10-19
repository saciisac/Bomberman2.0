//VARIABLAR

var ctx;
var player1Y = 200;
var player1X= 5;
var player1VY = 0;
var player1VX= 0;
var player2Y = 300;
var player2VY = 0;
var player2X= 540;
var player2VX= 0;
var bomb1X= player1X;
var bomb1Y= player1Y;
var timerBomb1=-1;
var timerBomb2=-1;



function init() {

    var canvas = document.getElementById("canv");
    ctx = canvas.getContext("2d");
    
    createjs.Sound.registerSound("ljud/explosion.mp3", "boom");
    
    window.setInterval(update, 20)
}

function update() {
    //timer nedräkning
    if(timerBomb1>-1){
        timerBomb1=timerBomb1-1;
    }
    if(timerBomb2>-1){
        timerBomb2=timerBomb2-1
    }
    //bomb ljud
    if(timerBomb1==0){
        createjs.Sound.play("boom");
    }
    if(timerBomb2==0){
        createjs.Sound.play("boom");
    }
    
    //coordinates for players
    player1Y = player1Y + player1VY;
    player1X= player1X+ player1VX;
    player2Y = player2Y + player2VY;
    player2X = player2X + player2VX;

    //suddar 
    ctx.clearRect(0, 0, 600, 600);
   //målar ut bollen
   

    //player 2
    ctx.fillStyle = "red"
    ctx.fillRect(player2X , player2Y, 50, 50)
        //player 1 1
    ctx.fillStyle = "blue";
    ctx.fillRect(player1X, player1Y, 50, 50)

 
    //stoppa paddle 1
    if (player1Y <= 0) {
        player1Y = 0;
    }
    if (player1Y >= 550) {
        player1Y = 550;
    }
    if (player1X <= 0) {
        player1X = 0;
    }
    if (player1X >= 550) {
        player1X = 550;
    }
    //stoppa paddle 2
    if (player2Y <= 0) {
        player2Y = 0;
    }

    if (player2Y >= 550) {
        player2Y = 550;
    }
    
    if (player2X >= 550) {
        player2X = 550;
    }
    
    if (player2X <= 0) {
        player2X = 0;
    }
    //Bomb1
    if(timerBomb1>0){
        ctx.fillStyle="black";
        ctx.fillRect(player1X+15,player1Y+15,20,20);
    }
    //bomb2
    if(timerBomb2>0){
        ctx.fillStyle="black";
        ctx.fillRect(player2X+15,player2Y+15,20,20);
    }
}
//styra paddlarna(87 är w 83 är S) //vänsta paddle= paddle 1
function keyDown(e) {

    console.log(e.keyCode);
    //paddle 1 nedåt
    if (e.keyCode == 83) {

        player1VY = 6;
    }
    //paddle 1 upp
    if (e.keyCode == 87) {

        player1VY = -6;
    }
    //pleyer 1 höger
    if (e.keyCode == 68) {

        player1VX = 6;
    }
    //player1 vänster
    if (e.keyCode == 65) {

        player1VX = -6;
    }
    //paddle 2 ner
    if (e.keyCode == 40) {

        player2VY = 6;
    }
    //paddle 2 upp
    if (e.keyCode == 38) {

        player2VY = -6;
    }
    //paddle 2 vänster
   if (e.keyCode == 37) {
       
       player2VX = -6
   }

    //player1 2 höger
    if (e.keyCode == 39) {
       
       player2VX = 6
   }
    //bomb2
    if (e.keyCode == 33) {
       
       console.log("Booom player 2");
        timerBomb2=50;
         
   }
    //bomb1
    if (e.keyCode == 81) {
       
       console.log("Booom player 1");
        timerBomb1=50;
   }

}

function keyUp(f) {

    
    //paddle 1 nedåt
    if (f.keyCode == 83) {

        player1VY = 0;
    }
    //paddle 1 upp
    if (f.keyCode == 87) {

        player1VY = 0;
    }
    //player1 stopp höger
    if (f.keyCode == 68) {

        player1VX = 0;
    }
    if (f.keyCode == 65) {

        player1VX = 0;
    }
    //paddle 2 stopp ner
    if (f.keyCode == 40) {

        player2VY = 0;
    }
    //paddle 2 stopp upp
    if (f.keyCode == 38) {

        player2VY = 0;
    }
    //paddle 2 stopp höger
    if (f.keyCode == 37) {

        player2VX = 0;
    }
    
    //paddle 2 stopp vänster
    if (f.keyCode == 39) {

       player2VX = 0;
    }
    
    
}
