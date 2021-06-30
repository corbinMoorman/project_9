var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red = createButton("red");
  btn_red.position(10, 200);
  btn_red.mousePressed(bg_red);
  btn_green = createButton("green")
  btn_green.position(90,200)
  btn_green.mousePressed(bg_green)
}

function draw() {
  background(r,g,b);
}
function bg_red(){
  r = 255;
  g = 0
  b = 0 
}
function bg_green(){
  r = 0
  g = 300
  b = 0
}
