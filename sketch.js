let hc_center,hc_left,hc_right,hc_opp;
let sc;
let bc;
let sat;
let bri;
let com_off;
let noff=0;

let unit
let myF;

function preload(){
  myF = loadFont('assets/Lato-Thin.ttf')
}

function setup() {
  
  
  createCanvas(windowWidth, windowHeight);
  
  colorMode(HSB);
  setColorN();
  sat = random(50,100)
  
  unit = width/3;
  
  setTimeout(function(){  fullscreen(true); }, 1000);
  
}

function mouseReleased(){
  setColorN();
}

function setColorN(nOff){
  com_off = 20;
  hc_center = noise(nOff)*360;
  hc_left = hc_center -com_off;
  hc_right = hc_center +com_off;
  hc_opp = hc_center -180;

  
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
  
  fill(abs(hc_opp),sat,100,1)
  rect(unit,height/2, unit, height/2)
  
  noff += 0.003;
  setColorN(noff)
  
  
  let fontSize = 65;
  fill(0)
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
