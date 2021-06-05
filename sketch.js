var path, pathimg;
var boy, boyimg;
var wall1,wall2;
function preload(){
  //pre-load images
  pathimg=loadImage("path.png")
  boyimg=loadAnimation("Runner-1.png","Runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage("path",pathimg)

  path.velocityY=5;
  boy=createSprite(200,200)
  boy.addAnimation("boy",boyimg)
  boy.scale=0.1

  wall1=createSprite(5,200,10,400)
  wall2=createSprite(385,200,10,400)
  wall1.visible=false
  wall2.visible=false
}

function draw() {
  background(0);
  boy.x=mouseX;
  boy.y=mouseY;
  if(path.y>400){
    path.y=height/2
  }
  boy.collide(wall1)
  boy.collide(wall2)
drawSprites();
}
