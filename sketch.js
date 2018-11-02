var angle = 0;
var r = 255;
var g = 255;
var b = 153; 

function setup() {
  createCanvas(windowWidth, 400);
  background(143,188,143);
  noStroke();
  fill(0, 102);
}

function draw() {
  // Draw only when mouse is pressed
  fill(255);
  if (mouseIsPressed === true) {
    angle += 5;
    var val = cos(radians(angle)) * 12.0;
    for (var a = 0; a < 360; a += 75) {
      var xoff = cos(radians(a)) * val;
      var yoff = sin(radians(a)) * val;
      fill(r,g,b);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(255);
    ellipse(mouseX, mouseY, 2, 2);
  }

  rect(width-100,height- 50,100,50);
  fill(0);
  textSize(32);
  text('save', width-100,height- 25);

  fill(255,99,71);
  rect(width-200,height- 50,100,50);
  
  fill(219,112,147);
  rect(width-300,height- 50,100,50);

  fill(230,230,250);
  rect(width-400,height- 50,100,50);

  fill(255,255,153);
  rect(width-500,height- 50,100,50);
  

  //console.log(c);
}

function mouseClicked(){
  if(mouseX>width-100 && mouseX<width){
    if (mouseY>height- 50 && mouseY<height) {
      save('myCanvas.jpg');
    }
  }
  if(mouseX>width-200 && mouseX<width-100){
    if (mouseY>height- 50 && mouseY<height) {
      r = 255;
      g = 99;
      b = 71;
    }
  }
  if(mouseX>width-300 && mouseX<width-200){
    if (mouseY>height- 50 && mouseY<height) {
      r = 219;
      g = 112;
      b = 147;
    }
  }

  if(mouseX>width-400 && mouseX<width-300){
    if (mouseY>height- 50 && mouseY<height) {
      r = 230;
      g = 230;
      b = 250;
    }
  }

  if(mouseX>width-500 && mouseX<width-400){
    if (mouseY>height- 50 && mouseY<height) {
      r = 255;
      g = 255;
      b = 153;
    }
  }
}
//save('myCanvas.jpg');