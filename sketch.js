let timer;

let inc = 0.01;
let start = 0;
let windowSizeX = 600
let windowSizeY = 600
let circleSize = 20


function setup() {

  if(windowWidth < 700) {
    windowSizeX = 350
    windowSizeY = 350
    circleSize = 10
  }

  createCanvas(windowSizeX, windowSizeY);

  console.log (windowSizeY)
  

  background(0);
  timer = millis();
}

function draw() {
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
  
  start += inc;
  
  saveSketch()
}

function saveSketch() {
      if (millis() - timer >= 15000) {
    // Restart the sketch by resetting the timer
    timer = millis();
    noLoop()
    const today = new Date();

    // Extract the year, month, and day components
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const day = today.getDate().toString().padStart(2, '0');

    // Generate a filename with the sketch name, date, and '.jpg' extension
    const filename = `${year}_${month}_${day}_SketchName`;

    // Save the canvas as a jpg with the generated filename
    // saveCanvas(filename, 'jpg');
  }
}




