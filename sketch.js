const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground; 
var division1; 
var division2; 
var division3; 
var division4; 
var division5; 
var division6; 

var particles = [];
var plinkos =[];




function setup() {
  createCanvas(485,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,790,480,20);
  division1 = new Division(05,650,10,300);
  division2 = new Division(100,650,10,300);
  division3 = new Division(195,650,10,300);
  division4 = new Division(290,650,10,300);
  division5 = new Division(385,650,10,300);
  division6 = new Division(480,650,10,300);

  for (var j =40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j =15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for (var j =40; j <=width -10; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for (var j =15; j <=width; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background(0);
  Engine.update(engine);  
  
  if(frameCount % 30 === 0){
    particle = new Particle(random(120, 500), 0, 7, random(0, 360));
    particles.push(particle);
  }
 for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();

  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }


  drawSprites();
}