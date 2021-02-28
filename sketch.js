const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;

var engine, world;

var platform1,platform2,platform3;

var gameState = 0;

var mainPlatform;

var boyImage,ballImage;

//var bulletsCount = 5;

var boy,ball;

var rope;

//var gunImage;

var b1,b2,b3,b4,b5,b6,b7;
var b11,b12,b13,b14,b15,b16,b17,b18;
var b21,b22,b23,b24,b25,b26,b27,b28;

var bullet;

function preload(){
 bg = loadImage("images/background.png");
 boyImage = loadImage("images/boy.png");
 ballImage = loadImage("images/ball.png");
}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  
  world = engine.world;

  if(gameState == 0){
  platform1 = new Platform(650,300,140,20);
  platform2 = new Platform(400,250,160,20);
  platform3 = new Platform(560,150,160,20);

  mainPlatform = new Platform(100,320,150,20);

  b1 = new Bottles(590,275);
  b2 = new Bottles(610,275);
  b3 = new Bottles(630,275);
  b4 = new Bottles(650,275);
  b5 = new Bottles(670,275);
  b6 = new Bottles(690,275);
  b7 = new Bottles(710,275);

  b11 = new Bottles(330,225);
  b12 = new Bottles(350,225);
  b13 = new Bottles(370,225);
  b14 = new Bottles(390,225);
  b15 = new Bottles(410,225);
  b16 = new Bottles(430,225);
  b17 = new Bottles(450,225);
  b18 = new Bottles(470,225);

  b21 = new Bottles(490,125);
  b22 = new Bottles(510,125);
  b23 = new Bottles(530,125);
  b24 = new Bottles(550,125);
  b25 = new Bottles(570,125);
  b26 = new Bottles(590,125);
  b27 = new Bottles(610,125);
  b28 = new Bottles(630,125);

  boy = Bodies.rectangle(100,260);

  World.add(world,boy);

  ball = Bodies.circle(100,220,50);

  World.add(world,ball)

rope = new Test(ball.body,{x : 100,y : 300});

  /*if(gameState == 0 && bulletsCount<0){
    for(var i=0; i<bulletsCount; i++){
    bullet = new Bullets(gun.position.x,gun.position.y);
    }
  }*/

  

  //gun = Bodies.rectangle(50,200);

  

  

  //bullet = new Bullets(gun.position.x,gun.position.y);
  }
}

function draw() {
  background(bg); 
  
  Engine.update(engine);

  platform1.display();
  platform2.display();
  platform3.display();

  mainPlatform.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();

  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();


  rope.display();


  /*for(var i = 0; i<bulletsCount; i++){
    bullet[i].display();
  }*/

  //image(gunImage,gun.position.x,gun.position.y,70,70);

  image(boyImage,boy.position.x,boy.position.y,120,120);

  image(ballImage,ball.position.x,ball.position.y,25,25)
  
  drawSprites();
}

/*function mouseDragged(){
  if (gameState == 0){
      Matter.Body.setPosition(gun, {x: gun.position.x , y: mouseY});
  }
}*/