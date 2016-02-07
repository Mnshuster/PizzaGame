var x = 500; 
var y = 450; 


function setup () {
  createCanvas(1000,600);
 
  
}

function draw () {
  background(0);
  fill(184,134,11);
  strokeWeight(0);
  ellipse(x+50, y+50, 200,75); 
  fill(255,215,0)
  ellipse(x+50, y+50, 170, 50)
   
    if (keyIsPressed && keyCode === RIGHT_ARROW) {
            x = x + 10;  
    } 
    if (keyIsPressed && keyCode === LEFT_ARROW) {
            x = x - 10;
    } 
}
