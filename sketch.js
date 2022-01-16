var trex, trex_running, edges;

var groundImage, ground;

var invisGround;

var r;

var cloud;
var cloudImage;

var cactus;
var cactus1;
var cactus2;
var cactus3;
var cactus4;
var cactus5;
var catcus6;

var score = 0;

function preload(){
 trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png")
 groundImage=loadImage("ground2.png")
 cloudImage=loadImage('cloud (1).png')
 cactus1=loadImage('obstacle1.png')
 cactus2=loadImage('obstacle2.png')
 cactus3=loadImage('obstacle3.png')
 cactus4=loadImage('obstacle4.png')
 cactus5=loadImage('obstacle5.png')
 cactus6=loadImage('obstacle6.png')
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex=createSprite(50,150,10,50);
  trex.addAnimation("running",trex_running);
  //adding scale and position to trex
  trex.scale=0.4;

  ground=createSprite(300,160,600,30);
  ground.addImage("ground", groundImage)
  ground.velocityX=-5;

  invisGround = createSprite(300,170,600,10);
  invisGround.visible = false;
  r=Math.round(random(10,100));
  console.log(r);
}


function draw(){
  //set background color 
  background("white");
  textSize(20);
  textFont("Roboto Mono");
  text("Score: "+score,500,20);
  
  score=score+Math.round(frameCount/80);
  //logging the y position of the trex
  
  //text(trex.y,);
  
  //jump when space key is pressed
  if(keyDown("space") && trex.y>140) {
    trex.velocityY=-8.5;
    
  }
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }

  trex.velocityY=trex.velocityY+0.5
  //stop trex from falling down
  trex.collide(invisGround);
  spawnClouds();
  spawnCactai(); 
  drawSprites();
 
}
function spawnClouds() {
  if(frameCount%60==0) {
    cloud=createSprite(600,r,10,10);
    cloud.velocityX=-5;
    cloud.addImage(cloudImage);
    cloud.lifetime=130;
    trex.depth=cloud.depth+1;

  }
}
function spawnCactai() {
  if(frameCount%60==0) {
    cactus=createSprite(600,150,10,10);
    cactus.velocityX=-4;
    cactus.scale=0.5;
    cactus.lifetime=200;
    var rand=Math.round(random(1,6));
    switch(rand) {
      case 1: cactus.addImage(cactus1);
          break;
      case 2: cactus.addImage(cactus2);
          break;
      case 3: cactus.addImage(cactus3);
          break;
      case 4: cactus.addImage(cactus4);
          break;
      case 5: cactus.addImage(cactus5);
          break;
      case 6: cactus.addImage(cactus6);
          break;
      default: break;
    }
  }

}