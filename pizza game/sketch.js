var a = 500; 
var b = 450; 
var position=0;
var speed = 3;
var toppings = [];

function setup () {
  createCanvas(1000,600);
  for(var i = 0; i < 50; i++){
  toppings[i]= {
    x: random (0,width),
    y: random (-5000,0),
    display: function() {
      fill(255,0,0);
      ellipse(this.x,this.y,25,25);
    },
    
    move: function(){
      this.y = this.y+3;
     }
   }
  }
}
function draw () {
  background(0);
   fill(184,134,11);
  strokeWeight(0);
  ellipse(a+50, b+50, 200,75); 
  fill(255,215,0);
  ellipse(a+50, b+50, 170, 50);
  for (var i = 0; i < toppings.length; i++){
    toppings[i].move();
    toppings[i].display();
  }
  
  
    if (keyIsPressed && keyCode === RIGHT_ARROW) {
            a = a + 10;  
    } 
    if (keyIsPressed && keyCode === LEFT_ARROW) {
            a = a - 10;
    }  
}
 