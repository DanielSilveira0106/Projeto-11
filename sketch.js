var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

 path = createSprite(200,200) 
 path.addAnimation("pista",pathImg)




 boy=createSprite(200,320)
 boy.addAnimation("correndo",boyImg)
 boy.scale = 0.1
  
 leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible = false;


 
 rightBoundary=createSprite(400,200,100,800)
 rightBoundary.visible = false;
}


function draw() {
 background(0);
 path.velocityY = 4;


 boy.x = World.mouseX
 edges= createEdgeSprites();
 boy.collide(edges[3]);
 boy.collide(leftBoundary)
 boy.collide(rightBoundary)
 if (path.y>430) {
  path.y = 250   
 }


 



 drawSprites();

 }




