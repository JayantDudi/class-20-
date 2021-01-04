var fixedRectangle , movingRectangle;


function setup() {
  createCanvas(800,400);
  
  fixedRectangle=createSprite(200,200,30,30);
  fixedRectangle.shapeColor="green";
  movingRectangle=createSprite(500,200,30,30);
  movingRectangle.shapeColor="green";
  
}

function draw() {
  background("pink"); 
  
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;

  var centreX=movingRectangle.width/2+fixedRectangle.width/2;
  var centreY=movingRectangle.height/2+fixedRectangle.height/2;


  if(movingRectangle.x-fixedRectangle.x < centreX && 
    fixedRectangle.x-movingRectangle.x < centreX && 
    movingRectangle.y-fixedRectangle.y < centreY &&
    fixedRectangle.y-movingRectangle.y < centreY
    ){
    movingRectangle.shapeColor="blue";
    fixedRectangle.shapeColor="red";
  } else { 
    movingRectangle.shapeColor="green";
    fixedRectangle.shapeColor="green";

  }



  drawSprites();

}

