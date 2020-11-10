var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var score = 0;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  //set 2 for second stand
   //level one 
   blocks1 = new Block(640,175,30,40); 
   blocks2 = new Block(670,175,30,40); 
   blocks3 = new Block(700,175,30,40); 
   blocks4 = new Block(730,175,30,40); 
   blocks5 = new Block(760,175,30,40);
   
   //level two 
   blocks6 = new Block(670,135,30,40); 
   blocks7 = new Block(700,135,30,40); 
   blocks8 = new Block(730,135,30,40);
   
   //top
    blocks9 = new Block(700,95,30,40); 

   //polygon holder with slings 
    polygon = Bodies.circle(50,200,20);
     World.add(world,polygon); 
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

  text("SCORE ;" + score, 750,40);
}

function draw() {
  background(255,255,255);  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  drawSprites();

}
function keyPressed(){
  if(keyCode ===32){
    slingShot.attach(this.polygon);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}