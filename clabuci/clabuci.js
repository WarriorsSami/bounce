function setup() {
createCanvas(windowWidth,windowHeight);
}
var bubbles =[];
function draw() {
  background(0);
  for (let j=0;j<bubbles.length;j++)
  {
    bubbles[j].show();
    bubbles[j].move();
    if(bubbles[j].y<0)bubbles.splice(j,1);
  }
}
class bubble{
  constructor (x,y,r)
  {
    this.x=x;
    this.y=y;
    this.r=r;
  }
  move(){
   this.x+=random(-1.5,1.5);
   this.y+=random(-5,1.5);
  }
  show(){
   fill(103, 160, 252,80);
   strokeWeight(4);
   stroke(83, 137, 224);
   ellipse(this.x,this.y,this.r);
  }
  
}
function mouseDragged(){
  
  var r=100;
 var b=new bubble(mouseX,mouseY,r);
 bubbles.push(b);
}
function mouseWheel (){
  bubbles.splice(0,bubbles.length);
 
}
