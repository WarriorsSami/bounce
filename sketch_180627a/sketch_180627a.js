var x=100,speed=8;
var y=100,s=8;
function setup() {
createCanvas(windowWidth,windowHeight);
background (200, 255, 61);
}

function draw() {
background (200, 255, 61);
  ellipse(x,y,100,100);    
  fill (255, 0, 106);
  if(y>height-50)s*=-1;
  if(y<50)s*=-1;
  if(x>width-50)speed*=-1;
  if(x<50)speed*=-1;
  x=x+speed;
  y+=s;
  
}
