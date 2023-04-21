

var player;
var borda;
var pratileira1,pratileira2,pratileira3;

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  player = createSprite(850,280,50,50);
  player.shapeColor = "red";
  
  borda = createEdgeSprites()

pratileira1 = createSprite(580,130,400,120)
pratileira2 = createSprite(580,410,400,120)
pratileira3 = createSprite (180,270,120,400)


}

function draw() {
  background(0); 
if (keyDown(LEFT_ARROW)){
  player.x -=10
}
if (keyDown(RIGHT_ARROW)){
  player.x +=10
}
if(keyDown(UP_ARROW)){
  player.y -=10
}
if(keyDown(DOWN_ARROW)){
  player.y +=10
}
 player.collide(borda)

player.collide(pratileira1)
player.collide(pratileira2)
player.collide(pratileira3)



  drawSprites();
}
  
