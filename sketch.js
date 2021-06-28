
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var bob01,bob02,bob03,bob04,bob05;
var roof,startBobX,startBobY,rope1,rope2
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   roof=new Roof(width/2,height/4,width/7,20);
   
   bobDiameter=50;
   startBobPositionX=width/2;
    startBobPositionY=height/4+500;
    bob01=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
   bob02=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
    bob03=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	 bob04=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
   bob05=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

   rope1=new Rope(bob01.body,roof.body,-bobDiameter*2,0)
   rope2=new Rope(bob02.body,roof.body,-bobDiameter*1,0)
   rope3=new Rope(bob03.body,roof.body,0,0)
   rope4=new Rope(bob04.body,roof.body,bobDiameter*1,0)
   rope5=new Rope(bob05.body,roof.body,bobDiameter*2,0)

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");


  roof.display();
  bob01.display();
  bob02.display();
  bob03.display();
  bob04.display();
  bob05.display();
  rope1.display();
  rope2.display();
  rope3.display();

  rope4.display();

  rope5.display();

  
  drawSprites();
 
}

function keyPressed(){

if(keyCode==UP_ARROW){
	Matter.Body.applyForce(bob01.body,bob01.body.position,{x:0,y:-45})
}

}

