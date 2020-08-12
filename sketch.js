const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var score=0;

function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(350,300,300,20);
    ground2=new Ground(800,200,200,20);

    box1=new Box(260,260,30,40);
    box3=new Box(292,260,30,40);
    box4=new Box(324,260,30,40);
    box5=new Box(356,260,30,40);
    box6=new Box(388,260,30,40);
    box7=new Box(420,260,30,40);
    

    box8=new Box(292,250,30,40);
    box9=new Box(324,250,30,40);
    box10=new Box(356,250,30,40);
    box11=new Box(388,250,30,40);

    box12=new Box(324,240,30,40);
    box13=new Box(356,240,30,40);

    b1=new B(752,170,30,40);
    b2=new B(782,170,30,40);
    b3=new B(796,170,30,40);
    b4=new B(818,170,30,40);
    b5=new B(830,170,30,40);
   
    b6=new B(782,150,30,40);
    b7=new B(796,150,30,40);
    b8=new B(818,150,30,40);

    b9=new B(796,130,30,40);
    polygon=new Polygon(150,100,25);
    slingshot=new Slingshot(polygon.body,{x:150,y:90});

}

function draw() {
  Engine.update(engine);
  textSize(35);
  fill("black");
  text("SCORE  " + score, 900, 50);
  background(255,255,255);  
  ground1.display();
  ground2.display();
  box1.display();
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
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  box1.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();

 
  polygon.display();
  slingshot.display();

  
}
function keyPressed(){
  if(keyCode === 32){
     Matter.Body.setPosition(polygon.body,{x:100,y:150});
     slingshot.attach(polygon.body);
  }
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }
  
  
  
  function mouseReleased(){
  slingshot.fly();
  }
  