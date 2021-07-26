var garden,rabbit;
var gardenImg, rabbitImg;
var LeafsGroup, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  orangeImg = loadImage("orangeLeaf.png")
  redImg = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  LeafsGroup = createGroup();
  orangeGroup = createGroup();
  redGroup = createGroup();
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  spawnLeafs();
  spawnOrange();
  spawnRed();
  drawSprites();
}

function spawnLeafs() {
  var n = Math.round(random(20,140))
  if (frameCount % n === 0) {
    var leaf = createSprite(200,10,40,10);
    leaf.x = Math.round(random(1,400));
    leaf.addImage(leafImg);
    leaf.scale = 0.1;
    leaf.velocityY = 3;
    leaf.lifetime = 200;
    LeafsGroup.add(leaf);
  }
}

function spawnOrange() {
  var n = Math.round(random(40,70))
  if (frameCount % n === 0) {
    var orange = createSprite(200,10,40,10);
    orange.x = Math.round(random(1,400));
    orange.addImage(orangeImg);
    orange.scale = 0.1;
    orange.velocityY = 3;
    orange.lifetime = 200;
    orangeGroup.add(orange);
  }
}

function spawnRed() {
  var n = Math.round(random(10,210))
  if (frameCount % n === 0) {
    var red = createSprite(200,10,40,10);
    red.x = Math.round(random(1,400));
    red.addImage(redImg);
    red.scale = 0.08;
    red.velocityY = 6;
    red.lifetime = 200;
    redGroup.add(red);
  }
}