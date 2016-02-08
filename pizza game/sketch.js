var x = 500; 
var y = 450; 
var position=0;
var speed = 3;
var xpos = 0;
var ypos = 0;


function setup () {
  createCanvas(1000,600);
 

}

function pepperoni (x,y) {
  
    for (var x = 0; x < width; x = x + 50) {
    fill(255,0,0);
    ellipse(x,y,25,25);
    }  
}


function draw () {
  
  background(0);
  fill(184,134,11);
  strokeWeight(0);
  ellipse(x+50, y+50, 200,75); 
  fill(255,215,0);
  ellipse(x+50, y+50, 170, 50);
   
    if (keyIsPressed && keyCode === RIGHT_ARROW) {
            x = x + 10;  
    } 
    if (keyIsPressed && keyCode === LEFT_ARROW) {
            x = x - 10;
    }  
    
    
    pepperoni(200,position-30);
    if (position > height || position < 0) {
       speed = speed * -1;

    } 
    
    position = position + speed ;
}
 