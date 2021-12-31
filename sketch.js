const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,gift,giftSprite,giftImg,mc,mcImg,message;

function preload(){
  giftImg=loadImage("GImg1.jpg");
  bg=loadGif("FW.gif");
  mcImg=loadImage("MC1.jpg");
  font=loadFont("Font.otf");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic : true
  }
  ground = Bodies.rectangle(windowWidth/2,windowHeight-(windowHeight/20),windowWidth,10,options);
  World.add(world,ground);
  console.log(ground.position.x);

  var gift_options = {
    restitution : 0
}
  gift = Bodies.rectangle(windowWidth/2,20,227,210,gift_options);
  World.add(world,gift);

  giftSprite=createSprite(0,0,10,10);
  giftSprite.addImage(giftImg);
giftSprite.scale=0.6;
  groundSprite=createSprite(0,0,10,10);
  groundSprite.visible=false;
 
  mc=createSprite(windowWidth/2,windowHeight-(windowHeight/19),1,1);
  mc.addImage(mcImg);
  mc.visible=false;
  mc.scale=0.6;
}

function draw() {
  background("#000000");  
  Engine.update(engine);
  //gift.position.x=mouseX;
  //gift.position.y=mouseY;
  giftSprite.x = gift.position.x;
  giftSprite.y = gift.position.y;
  giftSprite.width = gift.width;
  giftSprite.height = gift.height;
  groundSprite.x = ground.position.x;
  groundSprite.y = ground.position.y;
  groundSprite.width=windowWidth;
  groundSprite.height=10;
  rectMode(CENTER);
  fill("red");
  rect(ground.position.x,ground.position.y,windowWidth,10);

  if (giftSprite.isTouching(groundSprite)) {
    giftSprite.visible=false;
    background(bg);
    mc.velocityY=-2.5;
    mc.visible=true;
fill("white");
    textSize(26);
    text("Developed by Hrithik Ram Sudhakaran",0,windowHeight-10);
    if(mc.y<windowHeight-(windowHeight/2)){
      mc.velocityY=0;
    }
     }
   
  drawSprites();
}
