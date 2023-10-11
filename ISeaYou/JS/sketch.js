let remInPixels;
let textXScale = 4;
let textYScale = 8;
let indent = 75;
let newLine = 80;
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
let spaceChar = "␣ ";

let savedCanvases = [];

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
}

function windowResized() {
  let div3 = document.getElementById('div3');
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === 32) {
    // clear();
    storeCanvas();
    console.log("canvasStored!");
    // drawingGraphics.clear(); // Clear user drawings too
    // drawPoem();
  }
}

function draw() {
  // console.log('check');
  // background(0, 0, 100, 0.01);
  // background(0, 0, 100, 0.05); // really transparent

  drawPoem2();

  drawSavedCanvases();

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

  // draws line at cursor
  push();
  stroke(215, 10, 70); //variable that will change the paint color
  strokeWeight(3);
  if (mouseIsPressed) {
    // console.log('mouse');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  pop();

  origTextSize = origTextSize + (random(-0.2, 0.2))
  push();
  noStroke();
  textAlign(LEFT, TOP);
  textFont('EB Garamond')
  fill(210, 11, 83);
  textSize(1.5 * remInPixels);
  // lineHeight = 1 * remInPixels * 1.5;
  text("←  Back to video, sketch stays intact", 30, windowHeight - 50);
  textSize(1.5 * remInPixels);
  text(spaceChar, 32, windowHeight - 30);
  textSize(1.5 * remInPixels)
  text(spaceText, 63, windowHeight - 27);
  pop();
  background(0, 0, 100, 0.025);

}

function drawPoem2() {
  // clear();
  push();
  noStroke();
  textFont('EB Garamond');
  textSize(3 * remInPixels);
  fill(226, 50, 75, 0.022);
  text('paso a paso', (windowWidth / textXScale), (windowHeight / textYScale));
  fill(217, 15, 62, 0.018);
  text('paso a paso', (windowWidth / textXScale) - textPosVariance, (windowHeight / textYScale) - textPosVariance);
  fill(212, 28, 47, 0.022);
  text('paso a paso', (windowWidth / textXScale) + textPosVariance, (windowHeight / textYScale) - textPosVariance);
  fill(230, 10, 70, 0.018);
  text('paso a paso', (windowWidth / textXScale) - textPosVariance, (windowHeight / textYScale) + textPosVariance);
  fill(213, 8, 82, 0.018);
  text('paso a paso', (windowWidth / textXScale) + textPosVariance, (windowHeight / textYScale) + textPosVariance);

  fill(226, 50, 75, 0.022);
  text('pasó', (windowWidth / textXScale) + indent, (windowHeight / textYScale) + newLine);
  fill(217, 15, 62, 0.018);
  text('pasó', (windowWidth / textXScale) + indent - textPosVariance2, (windowHeight / textYScale) + newLine - textPosVariance2);
  fill(212, 28, 47, 0.022);
  text('pasó', (windowWidth / textXScale) + indent + textPosVariance2, (windowHeight / textYScale) + newLine - textPosVariance2);
  fill(230, 10, 70, 0.018);
  text('pasó', (windowWidth / textXScale) + indent - textPosVariance2, (windowHeight / textYScale) + newLine + textPosVariance2);
  fill(213, 8, 82, 0.018);
  text('pasó', (windowWidth / textXScale) + indent + textPosVariance2, (windowHeight / textYScale) + newLine + textPosVariance2);

  fill(226, 50, 75, 0.022);
  text('em paz', (windowWidth / textXScale) + 2 * indent, (windowHeight / textYScale) + 2 * newLine);
  fill(217, 15, 62, 0.018);
  text('em paz', (windowWidth / textXScale) + 2 * indent - textPosVariance3, (windowHeight / textYScale) + (2 * newLine) - textPosVariance3);
  fill(212, 28, 47, 0.022);
  text('em paz', (windowWidth / textXScale) + 2 * indent + textPosVariance3, (windowHeight / textYScale) + (2 * newLine) - textPosVariance3);
  fill(230, 10, 70, 0.018);
  text('em paz', (windowWidth / textXScale) + 2 * indent - textPosVariance3, (windowHeight / textYScale) + (2 * newLine) + textPosVariance3);
  fill(213, 8, 82, 0.018);
  text('em paz', (windowWidth / textXScale) + 2 * indent + textPosVariance3, (windowHeight / textYScale) + (2 * newLine) + textPosVariance3);

  fill(226, 50, 75, 0.022);
  text('en a more', (windowWidth / textXScale) + 3 * indent, (windowHeight / textYScale) + (3 * newLine));
  fill(217, 15, 62, 0.018);
  text('en a more', (windowWidth / textXScale) + 3 * indent - textPosVariance4, (windowHeight / textYScale) + (3 * newLine) - textPosVariance4);
  fill(212, 28, 47, 0.022);
  text('en a more', (windowWidth / textXScale) + 3 * indent + textPosVariance4, (windowHeight / textYScale) + (3 * newLine) - textPosVariance4);
  fill(230, 10, 70, 0.018);
  text('en a more', (windowWidth / textXScale) + 3 * indent - textPosVariance4, (windowHeight / textYScale) + (3 * newLine) + textPosVariance4);
  fill(213, 8, 82, 0.018);
  text('en a more', (windowWidth / textXScale) + 3 * indent + textPosVariance4, (windowHeight / textYScale) + (3 * newLine) + textPosVariance4);

  fill(226, 50, 75, 0.022);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent, (windowHeight / textYScale) + (4 * newLine));
  fill(217, 15, 62, 0.018);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent - textPosVariance5, (windowHeight / textYScale) + (4 * newLine) - textPosVariance5);
  fill(212, 28, 47, 0.022);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent + textPosVariance5, (windowHeight / textYScale) + (4 * newLine) - textPosVariance5);
  fill(230, 10, 70, 0.018);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent - textPosVariance5, (windowHeight / textYScale) + (4 * newLine) + textPosVariance5);
  fill(213, 8, 82, 0.018);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent + textPosVariance5, (windowHeight / textYScale) + (4 * newLine) + textPosVariance5);

  fill(226, 50, 75, 0.022);
  text('enamored', (windowWidth / textXScale) + 5 * indent, (windowHeight / textYScale) + (5 * newLine));
  fill(217, 15, 62, 0.018);
  text('enamored', (windowWidth / textXScale) + 5 * indent - textPosVariance6, (windowHeight / textYScale) + (5 * newLine) - textPosVariance6);
  fill(212, 28, 47, 0.022);
  text('enamored', (windowWidth / textXScale) + 5 * indent + textPosVariance6, (windowHeight / textYScale) + (5 * newLine) - textPosVariance6);
  fill(230, 10, 70, 0.018);
  text('enamored', (windowWidth / textXScale) + 5 * indent - textPosVariance6, (windowHeight / textYScale) + (5 * newLine) + textPosVariance6);
  fill(213, 8, 82, 0.018);
  text('enamored', (windowWidth / textXScale) + 5 * indent + textPosVariance6, (windowHeight / textYScale) + (5 * newLine) + textPosVariance6);

  fill(226, 50, 75, 0.022);
  text('abalone', (windowWidth / textXScale) + 6 * indent, (windowHeight / textYScale) + (6 * newLine));
  fill(217, 15, 62, 0.018);
  text('abalone', (windowWidth / textXScale) + 6 * indent - textPosVariance7, (windowHeight / textYScale) + (6 * newLine) - textPosVariance7);
  fill(212, 28, 47, 0.022);
  text('abalone', (windowWidth / textXScale) + 6 * indent + textPosVariance7, (windowHeight / textYScale) + (6 * newLine) - textPosVariance7);
  fill(230, 10, 70, 0.018);
  text('abalone', (windowWidth / textXScale) + 6 * indent - textPosVariance7, (windowHeight / textYScale) + (6 * newLine) + textPosVariance7);
  fill(213, 8, 82, 0.018);
  text('abalone', (windowWidth / textXScale) + 6 * indent + textPosVariance7, (windowHeight / textYScale) + (6 * newLine) + textPosVariance7);

  fill(226, 50, 75, 0.022);
  text('enamored', (windowWidth / textXScale) + 7 * indent, (windowHeight / textYScale) + (7 * newLine));
  fill(217, 15, 62, 0.018);
  text('enamored', (windowWidth / textXScale) + 7 * indent - textPosVariance8, (windowHeight / textYScale) + (7 * newLine) - textPosVariance8);
  fill(212, 28, 47, 0.022);
  text('enamored', (windowWidth / textXScale) + 7 * indent + textPosVariance8, (windowHeight / textYScale) + (7 * newLine) - textPosVariance8);
  fill(230, 10, 70, 0.018);
  text('enamored', (windowWidth / textXScale) + 7 * indent - textPosVariance8, (windowHeight / textYScale) + (7 * newLine) + textPosVariance8);
  fill(213, 8, 82, 0.018);
  text('enamored', (windowWidth / textXScale) + 7 * indent + textPosVariance8, (windowHeight / textYScale) + (7 * newLine) + textPosVariance8);

  fill(226, 50, 75, 0.022); // sort of a turquoise
  text('como mar', (windowWidth / textXScale) + 8 * indent, (windowHeight / textYScale) + (8 * newLine));
  fill(217, 15, 62, 0.018); // one of the greys
  text('como mar', (windowWidth / textXScale) + 8 * indent - textPosVariance9, (windowHeight / textYScale) + (8 * newLine) - textPosVariance9);
  fill(212, 28, 47, 0.022); // one of the darker colors
  text('como mar', (windowWidth / textXScale) + 8 * indent + textPosVariance9, (windowHeight / textYScale) + (8 * newLine) - textPosVariance9);
  fill(230, 10, 70, 0.018); // one of the greys
  text('como mar', (windowWidth / textXScale) + 8 * indent - textPosVariance9, (windowHeight / textYScale) + (8 * newLine) + textPosVariance9);
  fill(213, 8, 82, 0.018); // one of the greys?
  text('como mar', (windowWidth / textXScale) + 8 * indent + textPosVariance9, (windowHeight / textYScale) + (8 * newLine) + textPosVariance9);
  pop();
}

function storeCanvas() {
  let canvasData = cnv.elt.toDataURL("image/png");
  let img = createImage(canvas.width, canvas.height);
  img.src = canvasData;
  savedCanvases.push(img);

  // If you only want to keep 10-15 images:
  while (savedCanvases.length > 15) {
    savedCanvases.shift(); // Remove the oldest drawing
  }
}

function drawSavedCanvases() {
  for (let i = 0; i < savedCanvases.length; i++) {
    // Calculate transparency and scale based on the canvas's position in the array
    let transparency = map(i, 0, savedCanvases.length, 50, 255); // Adjust the range as needed
    let scaleFactor = map(i, 0, savedCanvases.length, 0.3, 1);   // Adjust the range as needed

    // Apply the transparency
    tint(255, transparency);

    // Apply the scale and draw the image
    push();
    translate(width / 2, height / 2);  // Center the scaling effect
    scale(scaleFactor);
    let offsetX = (width * (1 - scaleFactor)) / 2;
    let offsetY = (height * (1 - scaleFactor)) / 2;
    image(savedCanvases[i], -width / 2 + offsetX, -height / 2 + offsetY);  // Offset by half to center
    // console.log(transparency, scaleFactor);
    pop();
  }
}

//not quite working yet
function drawTextWithVariance(txt, baseX, baseY, variances, colors) {
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(txt, baseX + variances[i], baseY + variances[i]);
  }
}


// anything below here is either old or not ready yet



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

function drawPoem() {
  // clear();
  push();
  noStroke();
  textFont('EB Garamond');
  textSize(3 * remInPixels);
  fill(226, 11, 83, 0.022);
  text('paso a paso', (windowWidth / textXScale), (windowHeight / textYScale));
  fill(217, 15, 62, 0.018);
  text('paso a paso', (windowWidth / textXScale) - 3, (windowHeight / textYScale) - 3);
  fill(212, 28, 47, 0.022);
  text('paso a paso', (windowWidth / textXScale) + 3, (windowHeight / textYScale) - 3);
  fill(230, 10, 70, 0.018);
  text('paso a paso', (windowWidth / textXScale) - 3, (windowHeight / textYScale) + 3);
  fill(213, 8, 82, 0.018);
  text('paso a paso', (windowWidth / textXScale) + 3, (windowHeight / textYScale) + 3);

  fill(226, 11, 83, 0.022);
  text('pasó', (windowWidth / textXScale) + indent, (windowHeight / textYScale) + newLine);
  fill(217, 15, 62, 0.018);
  text('pasó', (windowWidth / textXScale) + indent - 3, (windowHeight / textYScale) + newLine - 3);
  fill(212, 28, 47, 0.022);
  text('pasó', (windowWidth / textXScale) + indent + 3, (windowHeight / textYScale) + newLine - 3);
  fill(230, 10, 70, 0.018);
  text('pasó', (windowWidth / textXScale) + indent - 3, (windowHeight / textYScale) + newLine + 3);
  fill(213, 8, 82, 0.018);
  text('pasó', (windowWidth / textXScale) + indent + 3, (windowHeight / textYScale) + newLine + 3);

  fill(226, 11, 83, 0.022);
  text('em paz', (windowWidth / textXScale) + 2 * indent, (windowHeight / textYScale) + 2 * newLine);
  fill(217, 15, 62, 0.018);
  text('em paz', (windowWidth / textXScale) + 2 * indent - 3, (windowHeight / textYScale) + (2 * newLine) - 3);
  fill(212, 28, 47, 0.022);
  text('em paz', (windowWidth / textXScale) + 2 * indent + 3, (windowHeight / textYScale) + (2 * newLine) - 3);
  fill(230, 10, 70, 0.018);
  text('em paz', (windowWidth / textXScale) + 2 * indent - 3, (windowHeight / textYScale) + (2 * newLine) + 3);
  fill(213, 8, 82, 0.018);
  text('em paz', (windowWidth / textXScale) + 2 * indent + 3, (windowHeight / textYScale) + (2 * newLine) + 3);

  fill(226, 11, 83, 0.022);
  text('en amore', (windowWidth / textXScale) + 3 * indent, (windowHeight / textYScale) + (3 * newLine));
  fill(217, 15, 62, 0.018);
  text('en amore', (windowWidth / textXScale) + 3 * indent - 3, (windowHeight / textYScale) + (3 * newLine) - 3);
  fill(212, 28, 47, 0.022);
  text('en amore', (windowWidth / textXScale) + 3 * indent + 3, (windowHeight / textYScale) + (3 * newLine) - 3);
  fill(230, 10, 70, 0.018);
  text('en amore', (windowWidth / textXScale) + 3 * indent - 3, (windowHeight / textYScale) + (3 * newLine) + 3);
  fill(213, 8, 82, 0.018);
  text('en amore', (windowWidth / textXScale) + 3 * indent + 3, (windowHeight / textYScale) + (3 * newLine) + 3);

  fill(226, 11, 83, 0.022);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent, (windowHeight / textYScale) + (4 * newLine));
  fill(217, 15, 62, 0.018);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent - 3, (windowHeight / textYScale) + (4 * newLine) - 3);
  fill(212, 28, 47, 0.022);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent + 3, (windowHeight / textYScale) + (4 * newLine) - 3);
  fill(230, 10, 70, 0.018);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent - 3, (windowHeight / textYScale) + (4 * newLine) + 3);
  fill(213, 8, 82, 0.018);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent + 3, (windowHeight / textYScale) + (4 * newLine) + 3);

  fill(226, 11, 83, 0.022);
  text('enamored', (windowWidth / textXScale) + 5 * indent, (windowHeight / textYScale) + (5 * newLine));
  fill(217, 15, 62, 0.018);
  text('enamored', (windowWidth / textXScale) + 5 * indent - 3, (windowHeight / textYScale) + (5 * newLine) - 3);
  fill(212, 28, 47, 0.022);
  text('enamored', (windowWidth / textXScale) + 5 * indent + 3, (windowHeight / textYScale) + (5 * newLine) - 3);
  fill(230, 10, 70, 0.018);
  text('enamored', (windowWidth / textXScale) + 5 * indent - 3, (windowHeight / textYScale) + (5 * newLine) + 3);
  fill(213, 8, 82, 0.018);
  text('enamored', (windowWidth / textXScale) + 5 * indent + 3, (windowHeight / textYScale) + (5 * newLine) + 3);

  fill(226, 11, 83, 0.022);
  text('abalone', (windowWidth / textXScale) + 6 * indent, (windowHeight / textYScale) + (6 * newLine));
  fill(217, 15, 62, 0.018);
  text('abalone', (windowWidth / textXScale) + 6 * indent - 3, (windowHeight / textYScale) + (6 * newLine) - 3);
  fill(212, 28, 47, 0.022);
  text('abalone', (windowWidth / textXScale) + 6 * indent + 3, (windowHeight / textYScale) + (6 * newLine) - 3);
  fill(230, 10, 70, 0.018);
  text('abalone', (windowWidth / textXScale) + 6 * indent - 3, (windowHeight / textYScale) + (6 * newLine) + 3);
  fill(213, 8, 82, 0.018);
  text('abalone', (windowWidth / textXScale) + 6 * indent + 3, (windowHeight / textYScale) + (6 * newLine) + 3);

  fill(226, 11, 83, 0.022);
  text('enamored', (windowWidth / textXScale) + 7 * indent, (windowHeight / textYScale) + (7 * newLine));
  fill(217, 15, 62, 0.018);
  text('enamored', (windowWidth / textXScale) + 7 * indent - 3, (windowHeight / textYScale) + (7 * newLine) - 3);
  fill(212, 28, 47, 0.022);
  text('enamored', (windowWidth / textXScale) + 7 * indent + 3, (windowHeight / textYScale) + (7 * newLine) - 3);
  fill(230, 10, 70, 0.018);
  text('enamored', (windowWidth / textXScale) + 7 * indent - 3, (windowHeight / textYScale) + (7 * newLine) + 3);
  fill(213, 8, 82, 0.018);
  text('enamored', (windowWidth / textXScale) + 7 * indent + 3, (windowHeight / textYScale) + (7 * newLine) + 3);

  fill(226, 11, 83, 0.022); // sort of a turquoise
  text('como mar', (windowWidth / textXScale) + 8 * indent, (windowHeight / textYScale) + (8 * newLine));
  fill(217, 15, 62, 0.018); // one of the greys
  text('como mar', (windowWidth / textXScale) + 8 * indent - 3, (windowHeight / textYScale) + (8 * newLine) - 3);
  fill(212, 28, 47, 0.022); // one of the darker colors
  text('como mar', (windowWidth / textXScale) + 8 * indent + 3, (windowHeight / textYScale) + (8 * newLine) - 3);
  fill(230, 10, 70, 0.018); // one of the greys
  text('como mar', (windowWidth / textXScale) + 8 * indent - 3, (windowHeight / textYScale) + (8 * newLine) + 3);
  fill(213, 8, 82, 0.018); // one of the greys?
  text('como mar', (windowWidth / textXScale) + 8 * indent + 3, (windowHeight / textYScale) + (8 * newLine) + 3);
  pop();
}
// paso a paso
// pasó
// em paz
// en amore
// ebb alone
// enamored
// abalone
// enamored
// como mar
