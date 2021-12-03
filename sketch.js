
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}
function draw() 
{

  if(box.y<15)
  {
    box.y=15

  }

  if(box.y>385)
  {
    box.y=385

  }

if(box.x<15)
  {
    box.x=15

  }

  if(box.x>385)
  {
    box.x=385

  }


  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  if(keyIsDown(RIGHT_ARROW))
  {
     background("red");
     box.position.x = box.position.x +5;

  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.position.x = box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    box.position.y = box.position.y -5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.position.y = box.position.y +5;

  }


  
  drawSprites();
}

