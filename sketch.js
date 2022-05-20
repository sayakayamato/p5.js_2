
var w = 400;
var h = 400;
var point1 = new Array(2);
var point2 = new Array(2);
var d;
var r = 200;
var seed1;
var seed2;
function setup() {
  createCanvas(w, h);
  background(255);//white
  d = TWO_PI / 360;
  seed1 = random();
  seed2 = random();
}

function draw() {
  push();
  translate(w / 2, h / 2);
  var n1 = noise(seed1 + 0.02 * frameCount) * r;
  var n2 = noise(seed2 + 0.02 * frameCount) * r;
  point1[0] = cos(d * frameCount) * n1;
  point1[1] = sin(d * frameCount) * n1;
  point2[0] = cos(d * frameCount + HALF_PI) * n2;
  point2[1] = sin(d * frameCount + HALF_PI) * n2;
  stroke(frameCount / 5);
  stroke(166, 56, 86);
  if(frameCount > 1250){
    noLoop();
  }
  line(point1[0],point1[1],point2[0],point2[1]);
  pop()
}
