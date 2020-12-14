
function setup() {
  createCanvas(500, 550);
}

function draw() {
  background("#8165ac");
  fill("#c3966f");
  stroke("#bed62f");
  strokeWeight(5);
  ellipse(mouseX,mouseY,20,20);
  fill("red");
  stroke("pink");
  ellipse(200,300, 50,50);
  if (mouseX > 150 && mouseX < 250 && mouseY>250 && mouseY<350 )//if the mouse is over the box...
  { 
    fill("#c3966f");
    stroke("#bed62f");
    ellipse(200,300, 50,50);

  }

}







  
