let currentColor; //Initialization of the current color variable

function setup() {
  createCanvas(400, 400); //Working area
  background(220); //Background Color
  strokeWeight(3); //Menu Rectangles are initially drawn as thick black borders, then filled in with color at the draw function
  rect(378, 2, 20, 18); 
  rect(378, 22, 20, 18);
  rect(378, 42, 20, 18);
  rect(378, 62, 20, 18);
  rect(378, 82, 20, 18);
  strokeWeight(1);  //Return to standard border thickness
  currentColor = 'black' //Reset of the current color to black
}

function draw() {
  strokeWeight(0);  //Following code fills in the Menu Rectangles with color, starting with the top one and ending with the bottom.
  fill('white');
  rect(378, 2, 20, 18);
  fill('red');
  rect(378, 22, 20, 18);
  fill('lightgreen');
  rect(378, 42, 20, 18);
  fill('lightblue');
  rect(378, 62, 20, 18);
  fill(40);
  rect(378, 82, 20, 18);
  stroke('black');
  
  textAlign(CENTER, CENTER); //Drawing of the letter 'C', which stands for 'Clear'
  textSize(15);
  fill('black');
  text('C', 388, 12);
  strokeWeight(1);

  
  if (mouseIsPressed === true) { //Workhorse of the user drawing procedure, a Radius 5 circle is drawn whenever the mouse is pressed
      fill(currentColor); //Fill and stroke are taken from the current color variable
      stroke(currentColor);
      circle(mouseX, mouseY, 5);  //The circle is drawn at the mouse location    
  }
}

function mousePressed() { //This function controls the menu buttons by checking location of the mouse press
  
  if ((mouseX > 378) && (mouseY < 22)) { //The giant else-if tree is not elegant, but it works
    setup(); //The 'Clear' button just throws the program through the initial setup
  } else {
    if ((mouseX > 378) && (22 < mouseY) && (mouseY < 42)) {
      currentColor = 'red'; //Other buttons just assign a color to the current color variable
    } else {
      if ((mouseX > 378) && (42 < mouseY) && (mouseY < 62)) {
        currentColor = 'green';
      } else {
        if ((mouseX > 378) && (62 < mouseY) && (mouseY < 82)) {
          currentColor = 'blue';
        } else {
          if ((mouseX > 378) && (82 < mouseY) && (mouseY < 102)) {
            currentColor = 'black';
          }
        }
      }
    }
  }
}