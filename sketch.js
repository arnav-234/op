
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

block2= new block1(150,275,30,40)
block3= new block1(180,275,30,40)
block4= new block1(210,275,30,40)
block5= new block1(240,275,30,40)
block6= new block1(270,275,30,40)
block7= new block1(300,275,30,40)

block8= new block1(330,235,30,40)
block9= new block1(360,235,30,40)
block10= new block1(390,235,30,40)
block11= new block1(420,235,30,40)
block12= new block1(450,235,30,40)

block13= new block1(360,195,30,40)
block14= new block1(390,195,30,40)
block15= new block1(420,195,30,40)

block16= new block1(390,155,30,40)

}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  
}