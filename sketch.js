var PLAY = 1;
var END = 0;
var gameState = PLAY;
var tile1,tile1Img

var score=0;
var boundary,boundaryImg

var sprite,sprite_img;
var slab,slabImg, slabG

function preload(){
tile1Img = loadImage("bg.jpg")
sprite_img = loadImage("pic.png")
sprite_img = loadImage("pic.png")
boundaryImg = loadImage("11.png")
slabImg = loadImage("box.png")

slabG = new Group()
}

function setup() {
  createCanvas(1600,950);

  // CREATE fLOOR
  for(var x=-1000; x < 2000; x+=400){
  for(var y=-1000; y< 920; y+=400){
 tile1 = createSprite(x,y)
 tile1.addImage(tile1Img)
 tile1.scale = 0.3

  }
}

//CREATE SLABS


  for(var x=-1200; x < displayWidth; x+=30){
    boundary = createSprite(x, -1200)
    boundary.addImage(boundaryImg)
  }
 sprite = createSprite(200,200);
 //sprite.setAnimation("bunny1_go_1");
 sprite.addImage(sprite_img)
  
  score = 0;
}

function draw() {
  //trex.debug = true;
  background("black");
  
  camera.x=sprite.x+50;
  camera.y=sprite.y;
  if (keyDown("right")) {
    sprite.x = sprite.x+5;
    sprite.mirrorX(1);
  }
  if (keyDown("left")) {
    sprite.x = sprite.x-5;
    sprite.mirrorX(-1);    
  }

  if (keyDown("up")) {
    sprite.y = sprite.y-5;
    sprite.mirrorX(1);
  }
  if (keyDown("down")) {
    sprite.y = sprite.y+5;
    sprite.mirrorX(-1);    
  }
  if (keyDown("A")) {
    camera.zoom = camera.zoom - 0.1;
  }
  if (keyDown("S")) {
    camera.zoom = camera.zoom + 0.1;
  } 
// //MAP VIEW
//   if (camera.isActive()) {
//     camera.x = World.mouseX;
//     camera.y = World.mouseY;
//   }

box1()
sprite.collide(slabG)
  drawSprites();
}

function box1(){
  if(frameCount < 30){
    slab = createSprite(random(-1000,1600),random(-1000,600))
    slab.addImage(slabImg)
    slab.scale =0.4
    slab.debug=true
 slab.velocityY =  0.0000000001
    slabG.add(slab)
    slab.collide(slab)
  }
}


