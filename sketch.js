//class20: Collision Algoritim
//Developer: 


//Declare variables for game objects and behaviour indicators(FLAGS)
var movingObj, fixedObj;
var freeObj, keyObj;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {

}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(1200, 600);

  keyObj = createSprite(200,200,20,20);
  keyObj.shapeColor = "green";
  keyObj.debug = true;
  
  freeObj = createSprite(1200,0,20,20);
  freeObj.shapeColor = "white";
  freeObj.debug = true;

  movingObj = createSprite(400, 200, 50, 50);
  movingObj.shapeColor = "pink";
  movingObj.debug = true;

  fixedObj = createSprite(400, 100, 50, 80);
  fixedObj.shapeColor = "blue";
  fixedObj.debug = true;
}

function draw() {
  background(0);

  //Movement of movingObj with mouse
  movingObj.x = mouseX;
  movingObj.y = mouseY;

  //movements of keyObj
  if(keyDown(DOWN_ARROW)){
    keyObj.velocityY = 1;
    keyObj.y = keyObj.y + 10;
  }
  else if(keyDown(UP_ARROW)){
    keyObj.velocityY = -1;
    keyObj.y = keyObj.y - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
    keyObj.velocityX = 1;
    keyObj.x = keyObj.x + 10;
  }
  else if(keyDown(LEFT_ARROW)){
    keyObj.velocityX = -1;
    keyObj.x = keyObj.x - 10;
  }

  //velocity of freeObj
  freeObj.velocityX = -1
  freeObj.velocityY = 1;


//function call for ISTOUCHING Logic
  if (isTouching(keyObj,freeObj)) { 
    textSize(30);
    fill("red");
    text("TRUE", 200, 200);
  }
  else {
    textSize(30);
    fill("red");
    text("FALSE", 200, 200);
  }

  //functional call BOUNCEOFF 
  bounceOff(keyObj,freeObj);

  drawSprites();
}


