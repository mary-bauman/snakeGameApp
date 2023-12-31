//edges of the screen: 320, 350

//just declaring global variables
var snakeX = 1;
var snakeY = 1;
var dot1X = 1;
var dot1Y = 1;
var dot2X = 1;
var dot2Y = 1;
var dot3X = 1;
var dot3Y = 1;

var points = 0;

var snakeL = 60;
var snakeW = 60;

//if this is 1 the game is happening, otherwise it's 0
var game = 0;




//this checks conditions

function checkEdge() {
  //this will check to see if the snake has touched the edge of the screen
  if ((snakeX <= 0) || (snakeY <= 0) || (snakeX >= 320-60) || (snakeY >= 350-60)){
    setScreen("loseScreen");
    points = 0;
    console.log("big loser");
    game = 0;
    
  //this checks if the snake is too small
  if (snakeL < 5 || snakeW < 5) {
    setScreen("loseScreen");
    points = 0;
    console.log("big loser");
    game = 0; }
  }
  
}
function checkDot(){
  //this will be to check if the snake is on a dot,
  
  //dots are 30 by 30
  //snake is 60 by 60
  if ((Math.abs(snakeX-dot1X) <=snakeW) && (Math.abs(snakeY-dot1Y)<=snakeL)){
  points += 1;
  setText("pointNum", points);
  dot1X = randomNumber(30,290);
  dot1Y = randomNumber(30,320);
  setPosition("dot1", dot1X, dot1Y);
  snakeW += randomNumber(1,10);
  snakeL += randomNumber(1,10);
  setSize("snake2", snakeW, snakeL);}
  
    if ((Math.abs(snakeX-dot2X) <=snakeW) && (Math.abs(snakeY-dot2Y)<=snakeL)){
  points += 1;
  setText("pointNum", points);
  dot2X = randomNumber(30,290);
  dot2Y = randomNumber(30,320);
  setPosition("dot2", dot2X, dot2Y); 
  snakeW += randomNumber(1,10);
  snakeL += randomNumber(1,10);
  setSize("snake2", snakeW, snakeL); }
  
    if ((Math.abs(snakeX-dot3X) <=snakeW) && (Math.abs(snakeY-dot3Y)<=snakeL)){
  points += 1;
  setText("pointNum", points);
  dot3X = randomNumber(30,290);
  dot3Y = randomNumber(30,320);
  setPosition("dot3", dot3X, dot3Y);
  snakeW += randomNumber(1,10);
  snakeL += randomNumber(1,10);
  setSize("snake2", snakeW, snakeL);}
  
}
  
function checkScore() {
  if (points >= 10) {
    setScreen("winScreen");
    console.log("big winner");
    game = 0;
    points = 0;
  }

}
function checkGame() {
  game = 1;
  constant();
  checkEdge();
  checkDot();
  checkScore();
}








//rules of the keypad
onEvent("down", "mousemove", function( ) {
  snakeY += randomNumber(1,6);
  setPosition("snake2", snakeX, snakeY);
    checkGame();
  });
  //this checks all the conditions

onEvent("up", "mousemove", function( ) {
  snakeY -= randomNumber(1,6);
  setPosition("snake2", snakeX, snakeY);
  checkGame();
  });
onEvent("right", "mousemove", function( ) {
  snakeX += randomNumber(1,6);
  setPosition("snake2", snakeX, snakeY);
  checkGame();
  });
onEvent("left", "mousemove", function( ) {
  snakeX -= randomNumber(1,6);
  setPosition("snake2", snakeX, snakeY);
  checkGame();
  });





//this starts the actual game settup


function deleteGameOp() {
  //this just deletes the start up buttons
  deleteElement("easy");
  deleteElement("medium");
  deleteElement("hard");
  deleteElement("welcome");
  game = 1;
  
}



//dotNum lets you set how many dots
function setDots(dotNum) {
  
  game = 1;
  constant();
  
  //snake is 60 by 60
  snakeX = randomNumber(60,260);
  snakeY = randomNumber(60,290);
  showElement("snake2");
  setPosition("snake2",snakeX, snakeY);
  
  
  if (dotNum == 3) {
    dot3X = randomNumber(30,290);
    dot3Y = randomNumber(30,320);
    setPosition("dot3", dot3X, dot3Y);
    showElement("dot3");
  }
  else {
    deleteElement("dot3");
  }
  if (dotNum >= 2) {
    dot2X = randomNumber(30,290);
    dot2Y = randomNumber(30,320);
    setPosition("dot2", dot2X, dot2Y);
    showElement("dot2");
  }
  else {
    deleteElement("dot2");
  }
  if (dotNum >= 1) {
    dot1X = randomNumber(30,290);
    dot1Y = randomNumber(30,320);
    setPosition("dot1", dot1X, dot1Y);
    showElement("dot1");
  }
  else {
    deleteElement("dot1");
  }
  
    deleteGameOp();
  
  
  //just to check
  console.log(snakeX);
  console.log(snakeY);
  console.log(dot1X);
  console.log(dot1Y);
  console.log(dot2X);
  console.log(dot2Y);
  console.log(dot3X);
  console.log(dot3Y);

}






//sets the number of dots and gets rid of the buttons
onEvent("easy", "click", function( ) {
   setDots(3);
});
onEvent("medium", "click", function( ) {
   setDots(2);
});
onEvent("hard", "click", function( ) {
   setDots(1);
});
 
  
//need to set the constant motion + shrinking of the snake

function constant() {
    timedLoop(1000, function(){
      snakeW -= 0.03;
      snakeL -= 0.03;
      setSize("snake2", snakeW, snakeL);
      
      snakeX += randomNumber(-1,1);
      snakeY += randomNumber(-1,1);
      setPosition("snake2", snakeX, snakeY);
      
      checkEdge();
      
      if (game==0) {
       stopTimedLoop();
}});

}



//win and lose screen

onEvent("playAgain", "click", function( ) {

  
  
  setScreen("gameScreen");
  snakeX = randomNumber(60,260);
  snakeY = randomNumber(60,290);
  setPosition("snake2",snakeX, snakeY);
  setText("pointNum", points);
  snakeW = 60;
  snakeL = 60;
  setSize("snake2", snakeW, snakeL);
  game = 1;
  
});
onEvent("playAgain2", "click", function( ) {
  

  setScreen("gameScreen");
  snakeX = randomNumber(60,260);
  snakeY = randomNumber(60,290);
  setPosition("snake2",snakeX, snakeY);
  setText("pointNum", points);
  snakeW = 60;
  snakeL = 60;
  setSize("snake2", snakeW, snakeL);
  game = 1;
});
