var ghost;
function setup() {
  createCanvas(500,700);
  ghost = createSprite(150,200,20,20);
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW) ) { 
ghost.position.x= ghost.position.x+2;
  } 
drawSprites ();
}




