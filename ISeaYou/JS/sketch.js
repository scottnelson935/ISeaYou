// 10/18/2023 - notes: add navigate buttons for mobile users;
//upload full video (with white fades in/out);
//fix the diamonding of the poems


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

let spaceText = "␣  Save canvas";
let spaceChar = "␣";

let savedCanvases = [];

let userDrawings;
let poemBuffer;
let tempBuffer;

let backButton;

let bgBuffer;
let bg;

// let poem = 'paso a paso\n\tpasó\n\t\tem paz\nen amore\nebb alone\nenamored\nabalone\nenamored\ncomo mar';

function setup() {
  // bg = loadImage("../Media/imageWashedOut.jpeg");

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

  bgBuffer = createGraphics(windowWidth, windowHeight);

  newLine = getDynamicSpacing(55, 500, 1200, windowHeight);
  indent = getDynamicSpacing(30, 500, 1200, windowWidth);
}

function windowResized() {
  let div3 = document.getElementById('div3');
  resizeCanvas(windowWidth, windowHeight);

  newLine = getDynamicSpacing(55, 500, 1200, windowHeight);
  indent = getDynamicSpacing(30, 500, 1200, windowWidth);
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

function getDynamicSpacing(baseSize, minWindowSize, maxWindowSize, windowSize) {
  // Maps the current windowSize from the range of minWindowSize to maxWindowSize to a range of 1 to 2
  let scaleFactor = map(windowSize, minWindowSize, maxWindowSize, 1, 2);
  // Ensures that the scaleFactor is never less than 1 (no downscaling below baseSize)
  scaleFactor = max(scaleFactor, 1);
  // The final size is the baseSize multiplied by the scaleFactor
  return baseSize * scaleFactor;
}

function draw() {
  // console.log('check');
  // background(0, 0, 100, 0.01);
  // background(0, 0, 100, 0.05); // really transparent
  // tint(0, 100, 50, 1);
  if (keyIsPressed && keyCode === 27) {
    background(255);
    image(savedCanvases[1], 0, 0);
    // image(userDrawings, 0, 0);
    // drawSavedCanvases();

  } else {
  background(0, 0, 100, 0.1); //used to be 0.025

  // draws line at cursor
  // push();
  userDrawings.colorMode(HSB);
  // stroke(215, 10, 70, 0.002); //variable that will change the paint color
  if (mouseIsPressed) {
    // console.log('mouse');
    userDrawings.colorMode(HSB);
    userDrawings.strokeWeight(3);
    // userDrawings.stroke(215, 10, 70, 50);
    userDrawings.stroke(215, 0, 90, 50);
    userDrawings.line(mouseX + 10, mouseY + 10, pmouseX + 10, pmouseY + 10);
  }

  // drawBG();
  // image(bgBuffer);  

  image(userDrawings, 0, 0);
  // pop();

  drawSavedCanvases();


  drawPoemToBuffer();
  image(poemBuffer, 0, 0);

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
  lineHeight = 1 * remInPixels * 1.5;
  text("←  Back to video, sketch stays intact", 30, windowHeight - 50);
  // push();
  // textSize(1.2 * remInPixels);
  // scale(1.5, 1);
  // text(spaceChar, 20, windowHeight - 30);
  // pop();
  textSize(1.5 * remInPixels)
  text(spaceText, 32, windowHeight - 27);
  pop();
  // rect(33, windowHeight - 50, 200, 20);
  // rect(33, windowHeight - 27, 130, 22);}
}
}

function mousePressed() {
  if (mouseX > 33 && mouseX < 30 + 200 &&
    mouseY > windowHeight - 50 && mouseY < windowHeight - 30) {
    transitionToPreviousDiv();
    console.log("divTransitionClick!");
  }

  if (mouseX > 33 && mouseX < 30 + 130 && mouseY > windowHeight - 27 && mouseY < windowHeight - 5) {
    storeCanvas2();
    console.log("canvasStored!");
  }

}

function storeCanvas2() {

  let img = userDrawings.get();
  savedCanvases.unshift(img);
  console.log(savedCanvases.length);

  while (savedCanvases.length > 15) {
    savedCanvases.pop();
  }

  userDrawings.clear();
}

//working but testing out new method
function drawSavedCanvases() {
  for (let i = 0; i < savedCanvases.length; i++) {
    // Calculate transparency and scale based on the canvas's position in the array
    let scaleFactor = [0.9, 0.8, 0.75, 0.7, 0.65, 0.55, 0.5, 0.45, 0.4, 0.37, 0.34, 0.31, 0.28, 0.25, 0.22];
    let transparency = 255 - (255/15 * i);
    // Apply the scale and draw the image


    push();
    translate(width / 2, height / 2);  // Center the scaling effect
    scale(scaleFactor[i]);
    // let offsetX = (width * (1 - scaleFactor)) / 2;
    // let offsetY = (height * (1 - scaleFactor)) / 2;
    // tint(255, 10);
    // tint(0, 0, 100, 1);
    image(savedCanvases[i], - savedCanvases[i].width / 2, - savedCanvases[i].height / 2);  // Draw the image with its center aligned to the current translated point    // console.log(transparency, scaleFactor);
    // background(0, 0, 100, 0.1);
    pop();
  }
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
  poemBuffer.fill(226, 50, 75, 0.05);
  poemBuffer.text('paso a paso', (windowWidth / 2) - (newLine * 4), (windowHeight / 2) - (indent * 4));
  poemBuffer.fill(217, 15, 62, 0.04);
  poemBuffer.text('paso a paso', (windowWidth / 2) - (newLine * 4) - textPosVariance, (windowHeight / 2) - (indent * 4) - textPosVariance2);
  poemBuffer.fill(212, 28, 47, 0.05);
  poemBuffer.text('paso a paso', (windowWidth / 2) - (newLine * 4) + textPosVariance3, (windowHeight / 2) - (indent * 4) - textPosVariance4);
  poemBuffer.fill(230, 10, 70, 0.04);
  poemBuffer.text('paso a paso', (windowWidth / 2) - (newLine * 4) - textPosVariance5, (windowHeight / 2) - (indent * 4) + textPosVariance6);
  poemBuffer.fill(213, 8, 82, 0.04);
  poemBuffer.text('paso a paso', (windowWidth / 2) - (newLine * 4) + textPosVariance7, (windowHeight / 2) - (indent * 4) + textPosVariance8);

  //pasó
  poemBuffer.fill(226, 50, 75, 0.05);
  poemBuffer.text('pasó', (windowWidth / 2) - (newLine * 3), (windowHeight / 2) - (indent * 3));
  poemBuffer.fill(217, 15, 62, 0.04);
  poemBuffer.text('pasó', (windowWidth / 2) - (newLine * 3) - textPosVariance2, (windowHeight / 2) - (indent * 3) - textPosVariance);
  poemBuffer.fill(212, 28, 47, 0.05);
  poemBuffer.text('pasó', (windowWidth / 2) - (newLine * 3) + textPosVariance9, (windowHeight / 2) - (indent * 3) - textPosVariance8);
  poemBuffer.fill(230, 10, 70, 0.04);
  poemBuffer.text('pasó', (windowWidth / 2) - (newLine * 3) - textPosVariance7, (windowHeight / 2) - (indent * 3) + textPosVariance6);
  poemBuffer.fill(213, 8, 82, 0.05);
  poemBuffer.text('pasó', (windowWidth / 2) - (newLine * 3) + textPosVariance5, (windowHeight / 2) - (indent * 3) + textPosVariance4);

  //em paz
  poemBuffer.fill(226, 50, 75, 0.05);
  poemBuffer.text('em paz', (windowWidth / 2) - (newLine * 2), (windowHeight / 2) - (indent * 2));
  poemBuffer.fill(217, 15, 62, 0.04);
  poemBuffer.text('em paz', (windowWidth / 2) - (newLine * 2) - textPosVariance3, (windowHeight / 2) - (indent * 2) - textPosVariance4);
  poemBuffer.fill(212, 28, 47, 0.05);
  poemBuffer.text('em paz', (windowWidth / 2) - (newLine * 2) + textPosVariance5, (windowHeight / 2) - (indent * 2) - textPosVariance6);
  poemBuffer.fill(230, 10, 70, 0.04);
  poemBuffer.text('em paz', (windowWidth / 2) - (newLine * 2) - textPosVariance7, (windowHeight / 2) - (indent * 2) + textPosVariance8);
  poemBuffer.fill(213, 8, 82, 0.04);
  poemBuffer.text('em paz', (windowWidth / 2) - (newLine * 2) + textPosVariance9, (windowHeight / 2) - (indent * 2) + textPosVariance);

  //en a more
  poemBuffer.fill(226, 50, 75, 0.05);
  poemBuffer.text('en a more', (windowWidth / 2) - (newLine), (windowHeight / 2) - (indent));
  poemBuffer.fill(217, 15, 62, 0.04);
  poemBuffer.text('en a more', (windowWidth / 2) - (newLine) - textPosVariance4, (windowHeight / 2) - (indent) - textPosVariance3);
  poemBuffer.fill(212, 28, 47, 0.05);
  poemBuffer.text('en a more', (windowWidth / 2) - (newLine) + textPosVariance2, (windowHeight / 2) - (indent) - textPosVariance);
  poemBuffer.fill(230, 10, 70, 0.04);
  poemBuffer.text('en a more', (windowWidth / 2) - (newLine) - textPosVariance9, (windowHeight / 2) - (indent) + textPosVariance8);
  poemBuffer.fill(213, 8, 82, 0.04);
  poemBuffer.text('en a more', (windowWidth / 2) - (newLine) + textPosVariance7, (windowHeight / 2) - (indent) + textPosVariance6);

  //ebb alone
  poemBuffer.fill(226, 50, 75, 0.05);
  poemBuffer.text('ebb alone', (windowWidth / 2), (windowHeight / 2));
  poemBuffer.fill(217, 15, 62, 0.04);
  poemBuffer.text('ebb alone', (windowWidth / 2) - textPosVariance5, (windowHeight / 2) - textPosVariance6);
  poemBuffer.fill(212, 28, 47, 0.05);
  poemBuffer.text('ebb alone', (windowWidth / 2) + textPosVariance7, (windowHeight / 2) - textPosVariance8);
  poemBuffer.fill(230, 10, 70, 0.04);
  poemBuffer.text('ebb alone', (windowWidth / 2) - textPosVariance9, (windowHeight / 2) + textPosVariance);
  poemBuffer.fill(213, 8, 82, 0.04);
  poemBuffer.text('ebb alone', (windowWidth / 2) + textPosVariance2, (windowHeight / 2) + textPosVariance3);

  //enamored
  poemBuffer.fill(226, 50, 75, 0.05);
  poemBuffer.text('enamored', (windowWidth / 2) + newLine, (windowHeight / 2) + indent);
  poemBuffer.fill(217, 15, 62, 0.04);
  poemBuffer.text('enamored', (windowWidth / 2) + newLine - textPosVariance6, (windowHeight / 2) + indent - textPosVariance5);
  poemBuffer.fill(212, 28, 47, 0.05);
  poemBuffer.text('enamored', (windowWidth / 2) + newLine + textPosVariance4, (windowHeight / 2) + indent - textPosVariance3);
  poemBuffer.fill(230, 10, 70, 0.04);
  poemBuffer.text('enamored', (windowWidth / 2) + newLine - textPosVariance2, (windowHeight / 2) + indent + textPosVariance);
  poemBuffer.fill(213, 8, 82, 0.04);
  poemBuffer.text('enamored', (windowWidth / 2) + newLine + textPosVariance9, (windowHeight / 2) + indent + textPosVariance8);

  //abalone
  poemBuffer.fill(226, 50, 75, 0.05);
  poemBuffer.text('abalone', (windowWidth / 2) + (newLine * 2), (windowHeight / 2) + (indent * 2));
  poemBuffer.fill(217, 15, 62, 0.04);
  poemBuffer.text('abalone', (windowWidth / 2) + (newLine * 2) - textPosVariance7, (windowHeight / 2) + (indent * 2) - textPosVariance8);
  poemBuffer.fill(212, 28, 47, 0.05);
  poemBuffer.text('abalone', (windowWidth / 2) + (newLine * 2) + textPosVariance9, (windowHeight / 2) + (indent * 2) - textPosVariance);
  poemBuffer.fill(230, 10, 70, 0.04);
  poemBuffer.text('abalone', (windowWidth / 2) + (newLine * 2) - textPosVariance2, (windowHeight / 2) + (indent * 2) + textPosVariance3);
  poemBuffer.fill(213, 8, 82, 0.04);
  poemBuffer.text('abalone', (windowWidth / 2) + (newLine * 2) + textPosVariance4, (windowHeight / 2) + (indent * 2) + textPosVariance5);

  //enamored
  poemBuffer.fill(226, 50, 75, 0.05);
  poemBuffer.text('enamored', (windowWidth / 2) + (newLine * 3), (windowHeight / 2) + (indent * 3));
  poemBuffer.fill(217, 15, 62, 0.04);
  poemBuffer.text('enamored', (windowWidth / 2) + (newLine * 3) - textPosVariance8, (windowHeight / 2) + (indent * 3) - textPosVariance7);
  poemBuffer.fill(212, 28, 47, 0.05);
  poemBuffer.text('enamored', (windowWidth / 2) + (newLine * 3) + textPosVariance6, (windowHeight / 2) + (indent * 3) - textPosVariance5);
  poemBuffer.fill(230, 10, 70, 0.04);
  poemBuffer.text('enamored', (windowWidth / 2) + (newLine * 3) - textPosVariance4, (windowHeight / 2) + (indent * 3) + textPosVariance3);
  poemBuffer.fill(213, 8, 82, 0.04);
  poemBuffer.text('enamored', (windowWidth / 2) + (newLine * 3) + textPosVariance2, (windowHeight / 2) + (indent * 3) + textPosVariance);

  //como mar
  poemBuffer.fill(226, 50, 75, 0.05);
  poemBuffer.text('como mar', (windowWidth / 2) + (newLine * 4), (windowHeight / 2) + (indent * 4));
  poemBuffer.fill(217, 15, 62, 0.04);
  poemBuffer.text('como mar', (windowWidth / 2) + (newLine * 4) - textPosVariance9, (windowHeight / 2) + (indent * 4) - textPosVariance);
  poemBuffer.fill(212, 28, 47, 0.05);
  poemBuffer.text('como mar', (windowWidth / 2) + (newLine * 4) + textPosVariance2, (windowHeight / 2) + (indent * 4) - textPosVariance3);
  poemBuffer.fill(230, 10, 70, 0.04);
  poemBuffer.text('como mar', (windowWidth / 2) + (newLine * 4) - textPosVariance4, (windowHeight / 2) + (indent * 4) + textPosVariance5);
  poemBuffer.fill(213, 8, 82, 0.04);
  poemBuffer.text('como mar', (windowWidth / 2) + (newLine * 4) + textPosVariance6, (windowHeight / 2) + (indent * 4) + textPosVariance7);
  poemBuffer.pop();
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
