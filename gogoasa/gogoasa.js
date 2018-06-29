function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(255);
  rotateX(frameCount * 0.015);
  rotateY(frameCount * 0.015);
  
  torus(180,130);
}
