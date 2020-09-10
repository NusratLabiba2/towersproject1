const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var polygon, sling;
var box1, box2, box3, box4, box5, box6, box7
var box8, box9, box10, box11, box12;
var box13, box14, box15;
var box16;

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;

  stand = new Ground(350, 220, 140, 10);

  //first level
  box1 = new Box(260, 240, 30, 40);
  box2 = new Box(290, 240, 30, 40);
  box3 = new Box(320, 240, 30, 40);
  box4 = new Box(350, 240, 30, 40);
  box5 = new Box(380, 240, 30, 40);
  box6 = new Box(410, 240, 30, 40);
  box7 = new Box(440, 240, 30, 40);

  //second level
  box8 = new Box(290, 200, 30, 40);
  box9 = new Box(320, 200, 30, 40);
  box10 = new Box(350, 200, 30, 40);
  box11 = new Box(380, 200, 30, 40);
  box12 = new Box(410, 200, 30, 40);

  //third level
  box13 = new Box(320, 160, 30, 40);
  box14 = new Box(350, 160, 30, 40);
  box15 = new Box(380, 160, 30, 40);

  //top
  box16 = new Box(350, 120, 30, 40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  sling = new SlingShot(polygon.body, {x:50, y:200});
}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  stand.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  sling.fly();
}