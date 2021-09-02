const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base;
var bridge;
function setup() {
  createCanvas(windowWidth, windowHeight);

  base = new Base (200,690,600,20);
  bridge=new Bridge(200,100,600,20);
 bridge=new Bridge(300,200,600,20)
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

}

function draw() {
  background(51);

  base . display ();
  bridge. show ();
  Engine.update(engine);
drawSprites()
}
