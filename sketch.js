let hc_center,hc_left,hc_right,hc_opp;
let sc;
let bc;
let sat;
let bri;
let com_off;
let noff=0;

let unit
let myF;
let fullScreenBtn;

function preload(){
  myF = loadFont('assets/Lato-Thin.ttf')
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  colorMode(HSB);
  setColorN();
  sat = random(50,100)
  unit = width/3;
  
  fullScreenBtn = createButton('').size(20,20).position(width-30, height-30).mousePressed(pushFullscreen);
  fullScreenBtn.style("background-color", "black")
  fullScreenBtn.style("border", "none")
  fullScreenBtn.style("border-radius", "10px")
  fullScreenBtn.style("border-radius", "10px")
  
  //fullscreen(true);
  //pushFullscreen()
}

function pushFullscreen(){
  let fs = fullscreen();
  fullscreen(!fs)
}

function mouseReleased(){
  setColorN();
}

function setColorN(nOff){
  com_off = 20;
  hc_center = noise(nOff)*360;
  hc_left = hc_center -com_off;
  hc_right = hc_center +com_off;
  hc_opp =  abs( hc_center -180 );

  
}

function draw() {
  background(0);
  
  noStroke()
  fill(hc_center,sat,100,1)
  rect(unit,0, unit, height)
  
  fill(hc_left,sat,100,1)
  rect(0,0, unit, height)
  
  fill(hc_right,sat,100,1)
  rect(unit*2,0, unit, height)
  
  fill(hc_opp,sat,100,1)
  rect(unit,height/2, unit, height/2)
  
  noff += 0.003;
  setColorN(noff)

  levelAni(0,0,unit, hc_left,1,0, hc_right)
  levelAni(unit*2,0,unit, hc_right,1,0, hc_left)
  levelAni(unit,0,unit, hc_center,0.5,0, hc_opp)
  levelAni(unit,0,unit, hc_opp,0.5,height/2, hc_center)
  textPart();
}


function levelAni(x, y, w, h, off, yoff, cv){
  stroke(cv, sat, 100, 1)
  strokeWeight(height/3)
  strokeCap(SQUARE);
  mappedH = map(h, 0, 360, 0, height*off)
  let x1 = x;
  let x2 = x+w;
  let y1 = mappedH+yoff
  let y2 = mappedH+yoff
  line(x1, y1, x2, y2)
}

function textPart(){
  
  let fontSize = unit*0.4;
  fill(0)
  noStroke();
  textFont(myF);
  textSize(fontSize)
  text(round(hc_left), 10, fontSize);
  
  textFont(myF);
  textSize(fontSize)
  text(round(hc_center), unit+10, fontSize);

  
  textFont(myF);
  textSize(fontSize)
  text(round(hc_right), unit*2+10, fontSize);
  
  textFont(myF);
  textSize(fontSize)
  text(round(hc_opp), unit+10, height/2+fontSize);

}


function windowResized() {
  
  resizeCanvas(windowWidth, windowHeight);
  unit = width/3
}
