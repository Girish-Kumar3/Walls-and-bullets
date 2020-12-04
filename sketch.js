var fixedRect, movingRect;
var GameObject1,GameObject2,GameObject3,GameObject4; 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
fixedRect.velocityY=5;

  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
movingRect.velocityY=-5;

  GameObject1=createSprite(100,100,50,50)
  GameObject1.shapeColor="green";

  GameObject2=createSprite(200,100,50,50)
  GameObject2.shapeColor="green";

  GameObject3=createSprite(300,100,50,50)
  GameObject3.shapeColor="green";

  GameObject4=createSprite(400,100,50,50)
  GameObject4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  /*if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }*/

  
  Bounceoff(movingRect,fixedRect);

  drawSprites();
}



function Bounceoff(Object1,Object2){
  if (Object1.x - Object2.x < Object2.width/2 + Object1.width/2 
    && Object2.x - Object1.x < Object2.width/2 + Object1.width/2) 
    { Object1.velocityX = Object1.velocityX * (-1);
      Object2.velocityX = Object2.velocityX * (-1); 
    }
  if (Object1.y - Object2.y < Object2.height/2 + Object1.height/2 
    && Object2.y - Object1.y < Object2.height/2 + Object1.height/2)
    { Object1.velocityY = Object1.velocityY * (-1);
      Object2.velocityY = Object2.velocityY * (-1); }
}
