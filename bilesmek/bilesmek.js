let bubbles=[];

function setup() {
createCanvas (windowWidth,windowHeight);
for(let i=0;i<130;i++){
 let x=random(width);
 let y=random(height);
 let r=random (15,40);
 bubbles[i]=new Bubble(x,y,r);
}
}

function draw() {
  background (0);
  
  for(let b of bubbles){
    b.move();
    let ov=false;
    for(let other of bubbles)
    {
      if(b!==other && b.intersects(other)==true) ov=true;
    }
    if(ov==true)b.show1();
    else b.show2();
  }
  
}
class Bubble {
  constructor(x,y,r)
  {
    this.x=x;
    this.y=y;
    this.r=r;
  }
  move()
  {
    this.x+=random(-3,3);
    this.y+=random(-3,3);
  }
  show1()
  {
   stroke(255,0,0);
   strokeWeight(3);
   noFill();
   ellipse(this.x,this.y,this.r*2);
  }
   show2()
  {
   stroke(255);
   strokeWeight(3);
   noFill();
   ellipse(this.x,this.y,this.r*2);
  }
  intersects(other)
  {
    if(other.r+this.r>dist(this.x,this.y,other.x,other.y))
    return true; 
    else return false;
  }  
 
}
