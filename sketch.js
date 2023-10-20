let timer
let inc = 0.01
let start = 0
let canvasSizeX = 600
let canvasSizeY = 600
let circleSize = 20

function setup() {
  //Using JS for mobile devise media query
  if(windowWidth < 768) {
    canvasSizeX = 350
    canvasSizeY = 350
    circleSize = 10
  }
  createCanvas(canvasSizeX, canvasSizeY);
  background(0)
  timer = millis()
  // buildButton()
  let button = document.getElementById('generateButton');

// Add an onclick event handler
button.onclick = function() {
  buttonClicked(); // Call your p5.js function
};
}

function draw() {
  buildShape()
  start += inc;
  saveSketch()
}

//Helper functions below

// function buildButton() {
//   let button = createButton('Create New Drawing')
//   button.style("font-family", "Roboto");
//   button.position(10, 10)
//   // button.position(10, 800)
//   button.mousePressed(buttonClicked)
// }

function buttonClicked() {
  clear()
  loop()
}

function buildShape() {
  beginShape(POINTS);
  let xoff = start;
  let yoff = start + 10
  stroke(color(random(0, 255), random(0, 255), random(0, 255)));
  strokeWeight(circleSize)
  let y = map(noise(xoff), 0, 1, 0, height)
  let x = map(noise(yoff), 0, 1, 0, width)
  vertex(x, y);
  xoff += inc;
  endShape();
}

function saveSketch() {
  if (millis() - timer >= 15000) {
    // Restart the sketch by resetting the timer
    timer = millis();
    noLoop()
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const day = today.getDate().toString().padStart(2, '0');
    const filename = `${year}_${month}_${day}_SketchName`;

    // Save the canvas as a jpg with the generated filename
    // saveCanvas(filename, 'jpg');
  }
}




