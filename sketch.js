const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world;
var box1, box2;
var ground;
var car, wall;
var speed, weight;
function setup(){
createCanvas = (1600, 400);
engine = Engine.create();
world = engine.world

box1 = new Box(200, 300, 50, 50);
box2 = new Box(240, 100, 50, 150);
ground = new Ground(200, 390, 400, 20);

speed = random(55, 90);
weight = random(400, 1500);
car = createSprite(50, 200, 50, 50);
car.velocityX = speed;
wall = createSprite(1500, 200, 60, height/2);
if(wall.x-car.x < (car.width+wall.width)/2){
car.velocityX = 0;
var deformation = 0.5 *weight* speed* speed/22509;
if(deformation>180)
{
    car.shapecolor = color(255, 0, 0);
}
if(deformation<180 && deformation>100)
{
    car.shapecolor = color(230, 230, 0);
}
if(deformation<100)
{
    car.shapecolor = color(0, 255, 0);
}
}
}
function draw(){
background(0);
Engine.update(engine)
box1.display();
car.display();
wall.display();
box2.display();
ground.display();
}