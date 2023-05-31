function setup() {
    createCanvas(400, 400);
    colorMode(HSB);
  }
  
  function draw() {
    background(0, 0, 100, 0.01);
    stroke(215, 10, 70); //variable that will change the paint color
    strokeWeight(3);
    
    if (mouseIsPressed) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }