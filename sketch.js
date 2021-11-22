const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground, ground2, ground4, ground3;
var fishNPC1, fishNPC2, fishNPC3;
var world, engine;
var playerFish;
var playerFishImg;
var backgroundimg;
var fishNPCimg;

function preload(){
  fishNPCimg = loadImage("./assets/Evilfish.png");
  backgroundimg = loadImage("./assets/Ocean.png");
  playerFishImg = loadImage("./assets/goodfish.png");
  

}

function setup() {
 
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create(); 
  world = engine.world;
  playerFish = createSprite(100,100,20,20);
  playerFish.addImage(playerFishImg);
  playerFish.scale = 0.1;
ground = new Ground(0,200,windowWidth,20);
ground2 = new Ground(0,450,windowWidth,20);
ground3 = new Ground(0,700,windowWidth,20);
ground4 = new Ground(0,920,windowWidth,20);


fishNPC1 = new FishAI(70,300);
fishNPC2 = new FishAI(70,600);
fishNPC3 = new FishAI(70,850);
}

function draw() {
  background(0); 
  image(backgroundimg,0,0,windowWidth,windowHeight);
  Engine.update(engine);
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();


  fishNPC1.display();
  fishNPC2.display();
  fishNPC3.display();
  handlePlayerControls();
  console.log(playerFish.position.x);
  drawSprites();
}

function handlePlayerControls() {
  if(keyIsDown(LEFT_ARROW)) {
    playerFish.position.x -= 5;
  }

  if(keyIsDown(RIGHT_ARROW)) {
    playerFish.position.x += 5;
  }
}

