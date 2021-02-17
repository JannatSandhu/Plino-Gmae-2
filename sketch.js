const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particle=null;

var divisionHeight = 300;

function setup() {
  createCanvas(800, 800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  groundd = new Ground(400, 790, 800, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));

  }
  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }


  
 
  Engine.update(engine);
}

function draw() {
  background(0, 0, 0);
  //drawSprites();

  Engine.update(engine);
  console.log(score)

 if (particle!=null){
   particle.display();
  if (particle.body.position.y > 760) {
    if (particle.body.position.x < 300) {
      score = score + 500;
      particle = null
    }


    else if (particle.body.position.x < 600 && particle.body.position.x > 301) {
      score = score + 100;
      particle = null

    }

    else if (particle.body.position.x < 900 && particle.body.position.x > 601) {
      score - score + 200;
      particle = null

    }
    }
  }

  for (var j = 0; j < plinkos.length; j++) {

    plinkos[j].display();
  }

 
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
 if(frameCount%200===0){
  particle = new Particle(random(10,300),0,10);
 }


  groundd.display();
  textSize(20);
  text("Score:" + score, 20, 40);
  fill("white");
  textSize(20);
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
}


