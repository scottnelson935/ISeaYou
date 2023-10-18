let remInPixels;
let textXScale = 4;
let textYScale = 8;
let indent = 65;
let newLine = 70;
let cnv;
let textPosVariance = 3;
let textPosVariance2 = 3;
let textPosVariance3 = 3;
let textPosVariance4 = 3;
let textPosVariance5 = 3;
let textPosVariance6 = 3;
let textPosVariance7 = 3;
let textPosVariance8 = 3;
let textPosVariance9 = 3;
let textVariances = [];
const numLines = 9;
let lineHeight;

let origTextSize = 3;

let spaceText = "Save canvas";
let spaceChar = "␣";

let savedCanvases = [];

let userDrawings;
let poemBuffer;
let tempBuffer;

// let poem = 'paso a paso\n\tpasó\n\t\tem paz\nen amore\nebb alone\nenamored\nabalone\nenamored\ncomo mar';

function setup() {
  let div3 = document.getElementById('div3');
  remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('div3');  // assign parent to the canvas
  colorMode(HSB);
  textAlign(CENTER, CENTER);
  // console.log("canvas created!");
  // noCursor();
  //not quite working yet
  for (let i = 0; i < numLines; i++) {
    textVariances.push(0);  // Initializing each variance to 0
  }

  userDrawings = createGraphics(windowWidth, windowHeight);
  poemBuffer = createGraphics(windowWidth, windowHeight);
  
  userDrawings.colorMode(HSB);

  drawPoemToBuffer();

  tempBuffer = createGraphics(windowWidth, windowHeight);

}

function windowResized() {
  let div3 = document.getElementById('div3');
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === 32) {
    // clear();
    storeCanvas2();
    console.log("canvasStored!");
    // drawingGraphics.clear(); // Clear user drawings too
    // drawPoem();
  }
}

function draw() {
  // console.log('check');
  // background(0, 0, 100, 0.01);
  // background(0, 0, 100, 0.05); // really transparent

  background(0, 0, 100, 0.025);

  // draws line at cursor
  push();
  stroke(215, 10, 70, 0.01); //variable that will change the paint color
  strokeWeight(3);
  if (mouseIsPressed) {
    // console.log('mouse');
    userDrawings.colorMode(HSB);
    userDrawings.line(mouseX + 10, mouseY + 10, pmouseX + 10, pmouseY + 10);
  }

  image(userDrawings, 0, 0);
  pop();

  drawSavedCanvases();


  drawPoemToBuffer();
  image(poemBuffer, 0, 0);


  // drawPoem2();

  

  //not quite working yet
  // for (let i = 0; i < numLines; i++) {
  //   textVariances[i] += random(-1, 1);
  // }
  textPosVariance = textPosVariance + (random(-0.6, 0.6));
  textPosVariance2 = textPosVariance2 + (random(-0.6, 0.6));
  textPosVariance3 = textPosVariance3 + (random(-0.6, 0.6));
  textPosVariance4 = textPosVariance4 + (random(-0.6, 0.6));
  textPosVariance5 = textPosVariance5 + (random(-0.6, 0.6));
  textPosVariance6 = textPosVariance6 + (random(-0.6, 0.6));
  textPosVariance7 = textPosVariance7 + (random(-0.6, 0.6));
  textPosVariance8 = textPosVariance8 + (random(-0.6, 0.6));
  textPosVariance9 = textPosVariance9 + (random(-0.6, 0.6));

  

  origTextSize = origTextSize + (random(-0.2, 0.2))
  push();
  noStroke();
  textAlign(LEFT, TOP);
  textFont('EB Garamond')
  fill(210, 11, 83);
  textSize(1.5 * remInPixels);
  // lineHeight = 1 * remInPixels * 1.5;
  text("←  Back to video, sketch stays intact", 30, windowHeight - 50);
  push();
  textSize(1.5 * remInPixels);
  scale(2, 1);
  text(spaceChar, 19, windowHeight - 30);
  pop();
  textSize(1.5 * remInPixels)
  text(spaceText, 63, windowHeight - 27);
  pop();
  

}

function drawPoem2() {
  // clear();
  push();
  noStroke();
  textFont('EB Garamond');
  textSize(3 * remInPixels);
  //paso a paso
  fill(226, 50, 75, 0.022);
  text('paso a paso', (windowWidth / 2) - (newLine * 4), (windowHeight / 2) - (indent * 4));
  fill(217, 15, 62, 0.018);
  text('paso a paso', (windowWidth / 2) - (newLine * 4) - textPosVariance, (windowHeight / 2) - (indent * 4) - textPosVariance);
  fill(212, 28, 47, 0.022);
  text('paso a paso', (windowWidth / 2) - (newLine * 4) + textPosVariance, (windowHeight / 2) - (indent * 4) - textPosVariance);
  fill(230, 10, 70, 0.018);
  text('paso a paso', (windowWidth / 2) - (newLine * 4) - textPosVariance, (windowHeight / 2) - (indent * 4) + textPosVariance);
  fill(213, 8, 82, 0.018);
  text('paso a paso', (windowWidth / 2) - (newLine * 4) + textPosVariance, (windowHeight / 2) - (indent * 4) + textPosVariance);

  //pasó
  fill(226, 50, 75, 0.022);
  text('pasó', (windowWidth / 2) - (newLine * 3), (windowHeight / 2) - (indent * 3));
  fill(217, 15, 62, 0.018);
  text('pasó', (windowWidth / 2) - (newLine * 3) - textPosVariance2, (windowHeight / 2) - (indent * 3) - textPosVariance2);
  fill(212, 28, 47, 0.022);
  text('pasó', (windowWidth / 2) - (newLine * 3) + textPosVariance2, (windowHeight / 2) - (indent * 3) - textPosVariance2);
  fill(230, 10, 70, 0.018);
  text('pasó', (windowWidth / 2) - (newLine * 3) - textPosVariance2, (windowHeight / 2) - (indent * 3) + textPosVariance2);
  fill(213, 8, 82, 0.018);
  text('pasó', (windowWidth / 2) - (newLine * 3) + textPosVariance2, (windowHeight / 2) - (indent * 3) + textPosVariance2);
  
  //em paz
  fill(226, 50, 75, 0.022);
  text('em paz', (windowWidth / 2) - (newLine * 2), (windowHeight / 2) - (indent * 2));
  fill(217, 15, 62, 0.018);
  text('em paz', (windowWidth / 2) - (newLine * 2) - textPosVariance3, (windowHeight / 2) - (indent * 2) - textPosVariance3);
  fill(212, 28, 47, 0.022);
  text('em paz', (windowWidth / 2) - (newLine * 2) + textPosVariance3, (windowHeight / 2) - (indent * 2) - textPosVariance3);
  fill(230, 10, 70, 0.018);
  text('em paz', (windowWidth / 2) - (newLine * 2) - textPosVariance3, (windowHeight / 2) - (indent * 2) + textPosVariance3);
  fill(213, 8, 82, 0.018);
  text('em paz', (windowWidth / 2) - (newLine * 2) + textPosVariance3, (windowHeight / 2) - (indent * 2) + textPosVariance3);
  
  //en a more
  fill(226, 50, 75, 0.022);
  text('en a more', (windowWidth / 2) - (newLine), (windowHeight / 2) - (indent));
  fill(217, 15, 62, 0.018);
  text('en a more', (windowWidth / 2) - (newLine) - textPosVariance4, (windowHeight / 2) - (indent) - textPosVariance4);
  fill(212, 28, 47, 0.022);
  text('en a more', (windowWidth / 2) - (newLine) + textPosVariance4, (windowHeight / 2) - (indent) - textPosVariance4);
  fill(230, 10, 70, 0.018);
  text('en a more', (windowWidth / 2) - (newLine) - textPosVariance4, (windowHeight / 2) - (indent) + textPosVariance4);
  fill(213, 8, 82, 0.018);
  text('en a more', (windowWidth / 2) - (newLine) + textPosVariance4, (windowHeight / 2) - (indent) + textPosVariance4);  
  
  //ebb alone
  fill(226, 50, 75, 0.022);
  text('ebb alone', (windowWidth / 2), (windowHeight / 2));
  fill(217, 15, 62, 0.018);
  text('ebb alone', (windowWidth / 2) - textPosVariance5, (windowHeight / 2) - textPosVariance5);
  fill(212, 28, 47, 0.022);
  text('ebb alone', (windowWidth / 2) + textPosVariance5, (windowHeight / 2) - textPosVariance5);
  fill(230, 10, 70, 0.018);
  text('ebb alone', (windowWidth / 2) - textPosVariance5, (windowHeight / 2) + textPosVariance5);
  fill(213, 8, 82, 0.018);
  text('ebb alone', (windowWidth / 2) + textPosVariance5, (windowHeight / 2) + textPosVariance5);

  //enamored
  fill(226, 50, 75, 0.022);
  text('enamored', (windowWidth / 2) + newLine, (windowHeight / 2) + indent);
  fill(217, 15, 62, 0.018);
  text('enamored', (windowWidth / 2) + newLine - textPosVariance6, (windowHeight / 2) + indent - textPosVariance6);
  fill(212, 28, 47, 0.022);
  text('enamored', (windowWidth / 2) + newLine + textPosVariance6, (windowHeight / 2) + indent - textPosVariance6);
  fill(230, 10, 70, 0.018);
  text('enamored', (windowWidth / 2) + newLine - textPosVariance6, (windowHeight / 2) + indent + textPosVariance6);
  fill(213, 8, 82, 0.018);
  text('enamored', (windowWidth / 2) + newLine + textPosVariance6, (windowHeight / 2) + indent + textPosVariance6);

  //abalone
  fill(226, 50, 75, 0.022);
  text('abalone', (windowWidth / 2) + (newLine * 2), (windowHeight / 2) + (indent * 2));
  fill(217, 15, 62, 0.018);
  text('abalone', (windowWidth / 2) + (newLine * 2) - textPosVariance7, (windowHeight / 2) + (indent * 2) - textPosVariance7);
  fill(212, 28, 47, 0.022);
  text('abalone', (windowWidth / 2) + (newLine * 2) + textPosVariance7, (windowHeight / 2) + (indent * 2) - textPosVariance7);
  fill(230, 10, 70, 0.018);
  text('abalone', (windowWidth / 2) + (newLine * 2) - textPosVariance7, (windowHeight / 2) + (indent * 2) + textPosVariance7);
  fill(213, 8, 82, 0.018);
  text('abalone', (windowWidth / 2) + (newLine * 2) + textPosVariance7, (windowHeight / 2) + (indent * 2) + textPosVariance7);
  
  //enamored
  fill(226, 50, 75, 0.022);
  text('enamored', (windowWidth / 2) + (newLine * 3), (windowHeight / 2) + (indent * 3));
  fill(217, 15, 62, 0.018);
  text('enamored', (windowWidth / 2) + (newLine * 3) - textPosVariance8, (windowHeight / 2) + (indent * 3) - textPosVariance8);
  fill(212, 28, 47, 0.022);
  text('enamored', (windowWidth / 2) + (newLine * 3) + textPosVariance8, (windowHeight / 2) + (indent * 3) - textPosVariance8);
  fill(230, 10, 70, 0.018);
  text('enamored', (windowWidth / 2) + (newLine * 3) - textPosVariance8, (windowHeight / 2) + (indent * 3) + textPosVariance8);
  fill(213, 8, 82, 0.018);
  text('enamored', (windowWidth / 2) + (newLine * 3) + textPosVariance8, (windowHeight / 2) + (indent * 3) + textPosVariance8);
  
  //como mar
  fill(226, 50, 75, 0.022);
  text('como mar', (windowWidth / 2) + (newLine * 4), (windowHeight / 2) + (indent * 4));
  fill(217, 15, 62, 0.018);
  text('como mar', (windowWidth / 2) + (newLine * 4) - textPosVariance9, (windowHeight / 2) + (indent * 4) - textPosVariance9);
  fill(212, 28, 47, 0.022);
  text('como mar', (windowWidth / 2) + (newLine * 4) + textPosVariance9, (windowHeight / 2) + (indent * 4) - textPosVariance9);
  fill(230, 10, 70, 0.018);
  text('como mar', (windowWidth / 2) + (newLine * 4) - textPosVariance9, (windowHeight / 2) + (indent * 4) + textPosVariance9);
  fill(213, 8, 82, 0.018);
  text('como mar', (windowWidth / 2) + (newLine * 4) + textPosVariance9, (windowHeight / 2) + (indent * 4) + textPosVariance9);
  pop();
}

function drawPoemToBuffer() {
  poemBuffer.clear();
  poemBuffer.push();
  poemBuffer.colorMode(HSB);
  poemBuffer.noStroke();
  poemBuffer.textAlign(CENTER, CENTER);
  poemBuffer.textFont('EB Garamond');
  poemBuffer.textSize(3 * remInPixels);
  //paso a paso
  poemBuffer.fill(226, 50, 75, 0.022);
  poemBuffer.text('paso a paso', (windowWidth / 2) - (newLine * 4), (windowHeight / 2) - (indent * 4));
  poemBuffer.fill(217, 15, 62, 0.018);
  poemBuffer.text('paso a paso', (windowWidth / 2) - (newLine * 4) - textPosVariance, (windowHeight / 2) - (indent * 4) - textPosVariance);
  poemBuffer.fill(212, 28, 47, 0.022);
  poemBuffer.text('paso a paso', (windowWidth / 2) - (newLine * 4) + textPosVariance, (windowHeight / 2) - (indent * 4) - textPosVariance);
  poemBuffer.fill(230, 10, 70, 0.018);
  poemBuffer.text('paso a paso', (windowWidth / 2) - (newLine * 4) - textPosVariance, (windowHeight / 2) - (indent * 4) + textPosVariance);
  poemBuffer.fill(213, 8, 82, 0.018);
  poemBuffer.text('paso a paso', (windowWidth / 2) - (newLine * 4) + textPosVariance, (windowHeight / 2) - (indent * 4) + textPosVariance);

  //pasó
  poemBuffer.fill(226, 50, 75, 0.022);
  poemBuffer.text('pasó', (windowWidth / 2) - (newLine * 3), (windowHeight / 2) - (indent * 3));
  poemBuffer.fill(217, 15, 62, 0.018);
  poemBuffer.text('pasó', (windowWidth / 2) - (newLine * 3) - textPosVariance2, (windowHeight / 2) - (indent * 3) - textPosVariance2);
  poemBuffer.fill(212, 28, 47, 0.022);
  poemBuffer.text('pasó', (windowWidth / 2) - (newLine * 3) + textPosVariance2, (windowHeight / 2) - (indent * 3) - textPosVariance2);
  poemBuffer.fill(230, 10, 70, 0.018);
  poemBuffer.text('pasó', (windowWidth / 2) - (newLine * 3) - textPosVariance2, (windowHeight / 2) - (indent * 3) + textPosVariance2);
  poemBuffer.fill(213, 8, 82, 0.018);
  poemBuffer.text('pasó', (windowWidth / 2) - (newLine * 3) + textPosVariance2, (windowHeight / 2) - (indent * 3) + textPosVariance2);
  
  //em paz
  poemBuffer.fill(226, 50, 75, 0.022);
  poemBuffer.text('em paz', (windowWidth / 2) - (newLine * 2), (windowHeight / 2) - (indent * 2));
  poemBuffer.fill(217, 15, 62, 0.018);
  poemBuffer.text('em paz', (windowWidth / 2) - (newLine * 2) - textPosVariance3, (windowHeight / 2) - (indent * 2) - textPosVariance3);
  poemBuffer.fill(212, 28, 47, 0.022);
  poemBuffer.text('em paz', (windowWidth / 2) - (newLine * 2) + textPosVariance3, (windowHeight / 2) - (indent * 2) - textPosVariance3);
  poemBuffer.fill(230, 10, 70, 0.018);
  poemBuffer.text('em paz', (windowWidth / 2) - (newLine * 2) - textPosVariance3, (windowHeight / 2) - (indent * 2) + textPosVariance3);
  poemBuffer.fill(213, 8, 82, 0.018);
  poemBuffer.text('em paz', (windowWidth / 2) - (newLine * 2) + textPosVariance3, (windowHeight / 2) - (indent * 2) + textPosVariance3);
  
  //en a more
  poemBuffer.fill(226, 50, 75, 0.022);
  poemBuffer.text('en a more', (windowWidth / 2) - (newLine), (windowHeight / 2) - (indent));
  poemBuffer.fill(217, 15, 62, 0.018);
  poemBuffer.text('en a more', (windowWidth / 2) - (newLine) - textPosVariance4, (windowHeight / 2) - (indent) - textPosVariance4);
  poemBuffer.fill(212, 28, 47, 0.022);
  poemBuffer.text('en a more', (windowWidth / 2) - (newLine) + textPosVariance4, (windowHeight / 2) - (indent) - textPosVariance4);
  poemBuffer.fill(230, 10, 70, 0.018);
  poemBuffer.text('en a more', (windowWidth / 2) - (newLine) - textPosVariance4, (windowHeight / 2) - (indent) + textPosVariance4);
  poemBuffer.fill(213, 8, 82, 0.018);
  poemBuffer.text('en a more', (windowWidth / 2) - (newLine) + textPosVariance4, (windowHeight / 2) - (indent) + textPosVariance4);  
  
  //ebb alone
  poemBuffer.fill(226, 50, 75, 0.022);
  poemBuffer.text('ebb alone', (windowWidth / 2), (windowHeight / 2));
  poemBuffer.fill(217, 15, 62, 0.018);
  poemBuffer.text('ebb alone', (windowWidth / 2) - textPosVariance5, (windowHeight / 2) - textPosVariance5);
  poemBuffer.fill(212, 28, 47, 0.022);
  poemBuffer.text('ebb alone', (windowWidth / 2) + textPosVariance5, (windowHeight / 2) - textPosVariance5);
  poemBuffer.fill(230, 10, 70, 0.018);
  poemBuffer.text('ebb alone', (windowWidth / 2) - textPosVariance5, (windowHeight / 2) + textPosVariance5);
  poemBuffer.fill(213, 8, 82, 0.018);
  poemBuffer.text('ebb alone', (windowWidth / 2) + textPosVariance5, (windowHeight / 2) + textPosVariance5);

  //enamored
  poemBuffer.fill(226, 50, 75, 0.022);
  poemBuffer.text('enamored', (windowWidth / 2) + newLine, (windowHeight / 2) + indent);
  poemBuffer.fill(217, 15, 62, 0.018);
  poemBuffer.text('enamored', (windowWidth / 2) + newLine - textPosVariance6, (windowHeight / 2) + indent - textPosVariance6);
  poemBuffer.fill(212, 28, 47, 0.022);
  poemBuffer.text('enamored', (windowWidth / 2) + newLine + textPosVariance6, (windowHeight / 2) + indent - textPosVariance6);
  poemBuffer.fill(230, 10, 70, 0.018);
  poemBuffer.text('enamored', (windowWidth / 2) + newLine - textPosVariance6, (windowHeight / 2) + indent + textPosVariance6);
  poemBuffer.fill(213, 8, 82, 0.018);
  poemBuffer.text('enamored', (windowWidth / 2) + newLine + textPosVariance6, (windowHeight / 2) + indent + textPosVariance6);

  //abalone
  poemBuffer.fill(226, 50, 75, 0.022);
  poemBuffer.text('abalone', (windowWidth / 2) + (newLine * 2), (windowHeight / 2) + (indent * 2));
  poemBuffer.fill(217, 15, 62, 0.018);
  poemBuffer.text('abalone', (windowWidth / 2) + (newLine * 2) - textPosVariance7, (windowHeight / 2) + (indent * 2) - textPosVariance7);
  poemBuffer.fill(212, 28, 47, 0.022);
  poemBuffer.text('abalone', (windowWidth / 2) + (newLine * 2) + textPosVariance7, (windowHeight / 2) + (indent * 2) - textPosVariance7);
  poemBuffer.fill(230, 10, 70, 0.018);
  poemBuffer.text('abalone', (windowWidth / 2) + (newLine * 2) - textPosVariance7, (windowHeight / 2) + (indent * 2) + textPosVariance7);
  poemBuffer.fill(213, 8, 82, 0.018);
  poemBuffer.text('abalone', (windowWidth / 2) + (newLine * 2) + textPosVariance7, (windowHeight / 2) + (indent * 2) + textPosVariance7);
  
  //enamored
  poemBuffer.fill(226, 50, 75, 0.022);
  poemBuffer.text('enamored', (windowWidth / 2) + (newLine * 3), (windowHeight / 2) + (indent * 3));
  poemBuffer.fill(217, 15, 62, 0.018);
  poemBuffer.text('enamored', (windowWidth / 2) + (newLine * 3) - textPosVariance8, (windowHeight / 2) + (indent * 3) - textPosVariance8);
  poemBuffer.fill(212, 28, 47, 0.022);
  poemBuffer.text('enamored', (windowWidth / 2) + (newLine * 3) + textPosVariance8, (windowHeight / 2) + (indent * 3) - textPosVariance8);
  poemBuffer.fill(230, 10, 70, 0.018);
  poemBuffer.text('enamored', (windowWidth / 2) + (newLine * 3) - textPosVariance8, (windowHeight / 2) + (indent * 3) + textPosVariance8);
  poemBuffer.fill(213, 8, 82, 0.018);
  poemBuffer.text('enamored', (windowWidth / 2) + (newLine * 3) + textPosVariance8, (windowHeight / 2) + (indent * 3) + textPosVariance8);
  
  //como mar
  poemBuffer.fill(226, 50, 75, 0.022);
  poemBuffer.text('como mar', (windowWidth / 2) + (newLine * 4), (windowHeight / 2) + (indent * 4));
  poemBuffer.fill(217, 15, 62, 0.018);
  poemBuffer.text('como mar', (windowWidth / 2) + (newLine * 4) - textPosVariance9, (windowHeight / 2) + (indent * 4) - textPosVariance9);
  poemBuffer.fill(212, 28, 47, 0.022);
  poemBuffer.text('como mar', (windowWidth / 2) + (newLine * 4) + textPosVariance9, (windowHeight / 2) + (indent * 4) - textPosVariance9);
  poemBuffer.fill(230, 10, 70, 0.018);
  poemBuffer.text('como mar', (windowWidth / 2) + (newLine * 4) - textPosVariance9, (windowHeight / 2) + (indent * 4) + textPosVariance9);
  poemBuffer.fill(213, 8, 82, 0.018);
  poemBuffer.text('como mar', (windowWidth / 2) + (newLine * 4) + textPosVariance9, (windowHeight / 2) + (indent * 4) + textPosVariance9);
  poemBuffer.pop();
}

function storeCanvas2() {

  tempBuffer.background(255, 0.025);
  tempBuffer.image(userDrawings, 0, 0);

  let img = userDrawings.get();
  savedCanvases.push(img);

  while (savedCanvases.length > 15) {
    savedCanvases.shift();
  }

  userDrawings.clear();
}

//working but testing out new method
function storeCanvas() {
  let canvasData = cnv.elt.toDataURL("image/png");
  loadImage(canvasData, img => {
    savedCanvases.push(img);

    while (savedCanvases.length > 15) {
      savedCanvases.shift();
    }
  });
  // let img = createImage(cnv.width, cnv.height);
  // img.src = canvasData;
  // savedCanvases.push(img);

  // If you only want to keep 10-15 images:
  // while (savedCanvases.length > 15) {
  //   savedCanvases.shift(); // Remove the oldest drawing
  // }
}

//working but testing out new method
function drawSavedCanvases() {
  for (let i = 0; i < savedCanvases.length; i++) {
    // Calculate transparency and scale based on the canvas's position in the array
    let transparency = map(i, 0, savedCanvases.length, 50, 255); // Adjust the range as needed
    let scaleFactor;
    
    if (savedCanvases.length === 1) {
      scaleFactor = 0.9;
    } else if (savedCanvases.length === 2) {
      scaleFactor = 0.8;
    } else if (savedCanvases.length === 3) {
      scaleFactor = 0.75;
    } else if (savedCanvases.length === 4) {
      scaleFactor = 0.7;
    } else if (savedCanvases.length === 5) {
      scaleFactor = 0.65;
    } else if (savedCanvases.length === 6) {
      scaleFactor = 0.6;
    } else if (savedCanvases.length === 7) {
      scaleFactor = 0.55;
    } else if (savedCanvases.length === 8) {
      scaleFactor = 0.5;
    } else if (savedCanvases.length === 9) {
      scaleFactor = 0.45;
    } else if (savedCanvases.length === 10) {
      scaleFactor = 0.4;
    } else if (savedCanvases.length === 11) {
      scaleFactor = 0.37;
    } else if (savedCanvases.length === 12) {
      scaleFactor = 0.34;
    } else if (savedCanvases.length === 13) {
      scaleFactor = 0.31;
    } else if (savedCanvases.length === 14) {
      scaleFactor = 0.28;
    } else if (savedCanvases.length === 15) {
      scaleFactor = 0.25;
    } else {
      scaleFactor = map (i, 0, savedCanvases.length - 1, 0.3, 1);
    }

    // Apply the transparency
    tint(255, transparency);

    // Apply the scale and draw the image
    push();
    translate(width / 2, height / 2);  // Center the scaling effect
    scale(scaleFactor);
    // let offsetX = (width * (1 - scaleFactor)) / 2;
    // let offsetY = (height * (1 - scaleFactor)) / 2;
    image(savedCanvases[i], - savedCanvases[i].width / 2, - savedCanvases[i].height / 2);  // Draw the image with its center aligned to the current translated point    // console.log(transparency, scaleFactor);
    pop();
  }
}

// anything below here is either old or not ready yet

//not quite working yet
function drawTextWithVariance(txt, baseX, baseY, variances, colors) {
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(txt, baseX + variances[i], baseY + variances[i]);
  }
}

//not quite working yet
function drawPoem3() {
  push();
  noStroke();
  textFont('EB Garamond');
  textSize(3 * remInPixels);
  // An array for text variance for each repeat of the text
  textVariances = [
    textPosVariance,
    textPosVariance2,
    textPosVariance3,
    textPosVariance4,
    textPosVariance5,
    textPosVariance6,
    textPosVariance7,
    textPosVariance8,
    textPosVariance9
  ];
  let colors = [
    [226, 11, 83, 0.022],
    [217, 15, 62, 0.018],
    [212, 28, 47, 0.022],
    [230, 10, 70, 0.018],
    [213, 8, 82, 0.018]
    // ... Add more colors if needed
  ];
  let lines = [
    'paso a paso',
    'pasó',
    'em paz',
    'en amore',
    'ebb alone',
    'enamored',
    'abalone',
    'enamored',
    'como mar'
  ];
  for (let i = 0; i < lines.length; i++) {
    let baseX = (windowWidth / textXScale) + (i * indent);
    let baseY = (windowHeight / textYScale) + (i * newLine);
    drawTextWithVariance(lines[i], baseX, baseY, textVariances[i], colors);
  }
  pop();
}
// paso a paso
// pasó
// em paz
// en a more
// ebb alone
// enamored
// abalone
// enamored
// como mar