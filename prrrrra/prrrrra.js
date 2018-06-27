
function setup() {
createCanvas (windowWidth,windowHeight);
background('#44ffca');
fill(random(255),random(255),random(255),45);
}
var x=1536/2,y=732/2,speed1=5,speed2=5,c=0;
function draw() {
  //background('#44ffca');
  c++;
  noStroke();
  ellipse(x,y,100,100);
  
  if(c==40)
  {
    c=0;
    fill(random(255),random(255),random(255),45);
  }
  if(x>width-50)speed1*=-1;
  if(x<50)speed1*=-1;
  if(y>height-50)speed2*=-1;
  if(y<50)speed2*=-1;
  x+=speed1;
  y+=speed2;
  
} 
function mousePressed() {
  clear();
  background ('#44ffca');
}
