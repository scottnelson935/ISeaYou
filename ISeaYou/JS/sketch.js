let remInPixels;

let textXScale = 4;
let textYScale = 8;
let indent = 50;
let newLine = 65;

// let poem = 'paso a paso\n\tpasó\n\t\tem paz\nen amore\nebb alone\nenamored\nabalone\nenamored\ncomo mar';

function setup() {
  let div3 = document.getElementById('div3');
  remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('div3');  // assign parent to the canvas
  colorMode(HSB);
  // console.log("canvas created!");
  drawPoem();


  // let lines = poem.split('\n');

  // for (let i = 0; o < lines.length; i++) {
  //   let indent = 0;

  //   if (lines[i].startsWith("\t")) {
  //     indent = 50;
  //     lines[i] = lines[i].replace('\t', "");
  //   }

  //   text(lines[i], 10 + indent, 20 + i * 20);
  // }

  // push();
  // noStroke();
  // textFont('Times New Roman')
  // fill(226, 11, 83);
  // textSize(3 * remInPixels);
  // text("paso a paso\npasó\nem paz\nen amore\nebb alone\nenamored\nabalone\nenamored\ncomo mar", (windowWidth / textXScale), (windowHeight / textYScale) + 40);
  // fill(217, 15, 62);
  // text("paso a paso\npasó\nem paz\nen amore\nebb alone\nenamored\nabalone\nenamored\ncomo mar", (windowWidth / textXScale) - 3, (windowHeight / textYScale) + 37);
  // fill(212, 28, 47);
  // text("paso a paso\npasó\nem paz\nen amore\nebb alone\nenamored\nabalone\nenamored\ncomo mar", (windowWidth / textXScale) + 3, (windowHeight / textYScale) + 37);
  // fill(230, 10, 70);
  // text("paso a paso\npasó\nem paz\nen amore\nebb alone\nenamored\nabalone\nenamored\ncomo mar", (windowWidth / textXScale) - 3, (windowHeight / textYScale) + 43);
  // fill(213, 8, 82);
  // text("paso a paso\npasó\nem paz\nen amore\nebb alone\nenamored\nabalone\nenamored\ncomo mar", (windowWidth / textXScale) + 3, (windowHeight / textYScale) + 45);
  // pop();
}

function windowResized() {
  let div3 = document.getElementById('div3');
  resizeCanvas(windowWidth, windowHeight);
  drawPoem();
}

function keyPressed() {
  if (keyCode === 32) {
    clear();
    drawPoem();
  }
}

function draw() {
  // console.log('check');
  // background(0, 0, 100, 0.01);
  // background(0, 0, 100, 0.05); // really transparent
  background(0, 0, 100, 0.04);
  stroke(215, 10, 70); //variable that will change the paint color
  strokeWeight(3);

  if (mouseIsPressed) {
    // console.log('mouse');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function drawPoem() {
  push();
  noStroke();
  textFont('Times New Roman')
  fill(226, 11, 83);
  textSize(3 * remInPixels);
  text('paso a paso', (windowWidth / textXScale), (windowHeight / textYScale));
  fill(217, 15, 62);
  text('paso a paso', (windowWidth / textXScale) - 3, (windowHeight / textYScale) - 3);
  fill(212, 28, 47);
  text('paso a paso', (windowWidth / textXScale) + 3, (windowHeight / textYScale) - 3);
  fill(230, 10, 70);
  text('paso a paso', (windowWidth / textXScale) - 3, (windowHeight / textYScale) + 3);
  fill(213, 8, 82);
  text('paso a paso', (windowWidth / textXScale) + 3, (windowHeight / textYScale) + 3);

  fill(226, 11, 83);
  text('pasó', (windowWidth / textXScale) + indent, (windowHeight / textYScale) + newLine);
  fill(217, 15, 62);
  text('pasó', (windowWidth / textXScale) + indent - 3, (windowHeight / textYScale) + newLine - 3);
  fill(212, 28, 47);
  text('pasó', (windowWidth / textXScale) + indent + 3, (windowHeight / textYScale) + newLine - 3);
  fill(230, 10, 70);
  text('pasó', (windowWidth / textXScale) + indent - 3, (windowHeight / textYScale) + newLine + 3);
  fill(213, 8, 82);
  text('pasó', (windowWidth / textXScale) + indent + 3, (windowHeight / textYScale) + newLine + 3);

  fill(226, 11, 83);
  text('em paz', (windowWidth / textXScale) + 2 * indent, (windowHeight / textYScale) + 2 * newLine);
  fill(217, 15, 62);
  text('em paz', (windowWidth / textXScale) + 2 * indent - 3, (windowHeight / textYScale) + (2 * newLine) - 3);
  fill(212, 28, 47);
  text('em paz', (windowWidth / textXScale) + 2 * indent + 3, (windowHeight / textYScale) + (2 * newLine) - 3);
  fill(230, 10, 70);
  text('em paz', (windowWidth / textXScale) + 2 * indent - 3, (windowHeight / textYScale) + (2 * newLine) + 3);
  fill(213, 8, 82);
  text('em paz', (windowWidth / textXScale) + 2 * indent + 3, (windowHeight / textYScale) + (2 * newLine) + 3);

  fill(226, 11, 83);
  text('en amore', (windowWidth / textXScale) + 3 * indent, (windowHeight / textYScale) + (3 * newLine));
  fill(217, 15, 62);
  text('en amore', (windowWidth / textXScale) + 3 * indent - 3, (windowHeight / textYScale) + (3 * newLine) - 3);
  fill(212, 28, 47);
  text('en amore', (windowWidth / textXScale) + 3 * indent + 3, (windowHeight / textYScale) + (3 * newLine) - 3);
  fill(230, 10, 70);
  text('en amore', (windowWidth / textXScale) + 3 * indent - 3, (windowHeight / textYScale) + (3 * newLine) + 3);
  fill(213, 8, 82);
  text('en amore', (windowWidth / textXScale) + 3 * indent + 3, (windowHeight / textYScale) + (3 * newLine) + 3);

  fill(226, 11, 83);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent, (windowHeight / textYScale) + (4 * newLine));
  fill(217, 15, 62);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent - 3, (windowHeight / textYScale) + (4 * newLine) - 3);
  fill(212, 28, 47);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent + 3, (windowHeight / textYScale) + (4 * newLine) - 3);
  fill(230, 10, 70);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent - 3, (windowHeight / textYScale) + (4 * newLine) + 3);
  fill(213, 8, 82);
  text('ebb alone', (windowWidth / textXScale) + 4 * indent + 3, (windowHeight / textYScale) + (4 * newLine) + 3);

  fill(226, 11, 83);
  text('enamored', (windowWidth / textXScale) + 5 * indent, (windowHeight / textYScale) + (5 * newLine));
  fill(217, 15, 62);
  text('enamored', (windowWidth / textXScale) + 5 * indent - 3, (windowHeight / textYScale) + (5 * newLine) - 3);
  fill(212, 28, 47);
  text('enamored', (windowWidth / textXScale) + 5 * indent + 3, (windowHeight / textYScale) + (5 * newLine) - 3);
  fill(230, 10, 70);
  text('enamored', (windowWidth / textXScale) + 5 * indent - 3, (windowHeight / textYScale) + (5 * newLine) + 3);
  fill(213, 8, 82);
  text('enamored', (windowWidth / textXScale) + 5 * indent + 3, (windowHeight / textYScale) + (5 * newLine) + 3);

  fill(226, 11, 83);
  text('abalone', (windowWidth / textXScale) + 6 * indent, (windowHeight / textYScale) + (6 * newLine));
  fill(217, 15, 62);
  text('abalone', (windowWidth / textXScale) + 6 * indent - 3, (windowHeight / textYScale) + (6 * newLine) - 3);
  fill(212, 28, 47);
  text('abalone', (windowWidth / textXScale) + 6 * indent + 3, (windowHeight / textYScale) + (6 * newLine) - 3);
  fill(230, 10, 70);
  text('abalone', (windowWidth / textXScale) + 6 * indent - 3, (windowHeight / textYScale) + (6 * newLine) + 3);
  fill(213, 8, 82);
  text('abalone', (windowWidth / textXScale) + 6 * indent + 3, (windowHeight / textYScale) + (6 * newLine) + 3);

  fill(226, 11, 83);
  text('enamored', (windowWidth / textXScale) + 7 * indent, (windowHeight / textYScale) + (7 * newLine));
  fill(217, 15, 62);
  text('enamored', (windowWidth / textXScale) + 7 * indent - 3, (windowHeight / textYScale) + (7 * newLine) - 3);
  fill(212, 28, 47);
  text('enamored', (windowWidth / textXScale) + 7 * indent + 3, (windowHeight / textYScale) + (7 * newLine) - 3);
  fill(230, 10, 70);
  text('enamored', (windowWidth / textXScale) + 7 * indent - 3, (windowHeight / textYScale) + (7 * newLine) + 3);
  fill(213, 8, 82);
  text('enamored', (windowWidth / textXScale) + 7 * indent + 3, (windowHeight / textYScale) + (7 * newLine) + 3);

  fill(226, 11, 83);
  text('como mar', (windowWidth / textXScale) + 8 * indent, (windowHeight / textYScale) + (8 * newLine));
  fill(217, 15, 62);
  text('como mar', (windowWidth / textXScale) + 8 * indent - 3, (windowHeight / textYScale) + (8 * newLine) - 3);
  fill(212, 28, 47);
  text('como mar', (windowWidth / textXScale) + 8 * indent + 3, (windowHeight / textYScale) + (8 * newLine) - 3);
  fill(230, 10, 70);
  text('como mar', (windowWidth / textXScale) + 8 * indent - 3, (windowHeight / textYScale) + (8 * newLine) + 3);
  fill(213, 8, 82);
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
