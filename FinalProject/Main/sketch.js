var state = 0; //Main variable, tracks the state the screen is in.

function setup() {
  createCanvas(1000, 600); //Canvas
  background(05); //Background color (off-black)
  screenOff(); 
  stroke(10);
  fill(55); //Main medium gray
  rect(800, 255, 150, 90); //T Symbol Background
  fill(10);
  stroke(10);
  rect(830, 280, 90, 10); //T Symbol 1
  rect(870, 290, 10, 55); //T Symbol 2
}

//screenOn function draws all the assorted stuff on the screen when it's on.
function screenOn() {
  strokeWeight(1);
  stroke(10);
  fill(55);
  rect(75, 75, 660, 450); //Screen 
  fill(10);
  rect(75, 150, 510, 250); //Graph screen 
  rect(75, 350, 450, 25); //Very Low BG  
  fill(55);
  rect(75, 450, 220, 75); //Lock button 1
  rect(295, 450, 220, 75); //Lock button 2
  rect(515, 450, 220, 75); //Lock button 3
  rect(75, 75, 660, 75); //Top Bar
  rect(75, 375, 150, 25); //Insulin Event Line 1
  rect(225, 375, 150, 25); //Insulin Event Line 2 
  rect(375, 375, 150, 25); //Insulin Event Line 3  
  rect(75, 300, 450, 50); //Normal Range
  fill(80);
  rect(605, 285, 110, 130); //Time Scale Button
  fill(240); //Off-White
  rect(640, 253, 40, 10); //Trend Indicator 1
  triangle(670, 245, 690, 258, 670, 271); //Trend Indicator 2
  fill('green');
  rect(85, 85, 100, 30); //Battery Bar 5
  fill('lightgreen');  
  rect(85, 85, 80, 30); //Battery Bar 4
  rect(85, 85, 60, 30); //Battery Bar 3
  rect(85, 85, 40, 30); //Battery Bar 2
  rect(85, 85, 20, 30); //Battery Bar 1
  fill('blue');
  rect(625, 85, 100, 30); //Insulin Bar 5
  fill('lightblue');
  rect(625, 85, 80, 30); //Insulin Bar 4
  rect(625, 85, 60, 30); //Insulin Bar 3
  rect(625, 85, 40, 30); //Insulin Bar 2
  rect(625, 85, 20, 30); //Insulin Bar 1 
  strokeWeight(3);
  stroke('red');
  line(77, 350, 525, 350); //Red Line
  stroke('yellow');
  line(77, 300, 525, 300); //Yellow Line  
  fill(10)
  stroke(55);
  strokeWeight(1);  
  rect(525, 150, 60, 250); //BG Scale 
  fill(150);
  stroke(10);
  strokeWeight(0);
  rect(76, 450, 219, 7); //Lock button 1 indicator Bar
  rect(295, 450, 220, 7); //Lock button 2 indicator Bar
  rect(515, 450, 219, 7); //Lock button 3 indicator Bar 
  strokeWeight(1);
  
  fill(240);
  textAlign(CENTER, CENTER); //Most text
  textSize(46);
  text('1', 185, 487.5);
  text('2', 405, 487.5);
  text('3', 625, 487.5);
  text('103', 660, 190);
  let time = hour() + ':' + minute() + ' PM'; //my partner leaned over my shoulder and said it would be cool if the clock said actual time. It turned out to be pretty simple so here it is. It will always say PM though, apologies about that.
  text(time, 405, 100);
  text('3', 660, 325);
  textSize(35);
  text('HRS', 660, 370)
  textSize(20);
  text('12 u', 400, 425);
  let date = day() + ' Dec 2024'; //This one's here courtesy of the good idea fairy. I really don't want to be writing out calculations and else/if loops for more accurately displaying time/date, so it's always gonna be December 2024 here. Maybe that will turn out to be very profound, i don't know.
  text(date, 405, 130);
  fill(150);
  text('mg/dL', 660, 220);
  textSize(25);
  text('INSULIN ON BOARD', 210, 425);
  
  textSize(20);
  textAlign(CENTER, TOP); //Text of the graph bar and battery/reservoir values
  text('400', 555, 160);
  text('350', 555, 190);
  text('300', 555, 220);
  text('250', 555, 250);
  text('200', 555, 280);
  text('150', 555, 310);
  text('100', 555, 340);
  text('50', 555, 370);
  fill('lightgreen');  
  text('75%', 135, 120);
  fill('lightblue');
  text('215 u', 675, 120);
} 

//screenOff function drapes a veil over (or under!) the screen components.
function screenOff() { 
  fill(15); //Off screen color (dark gray)
  rect(75, 75, 660, 450); //Off screen 
}

//mainMenu function hides the lock buttons and draws the OPTIONS and BOLUS buttons.
function mainMenu() {
  fill (55);
  strokeWeight(0);
  rect(76, 445, 658, 80); //A rectangle to hide the lock buttons
  fill (80);
  stroke(10);
  strokeWeight(1);  
  rect(115, 450, 270, 65); //OPTIONS button
  rect(425, 450, 270, 65); //BOLUS button
  textAlign(CENTER, CENTER);
  textSize(38);
  strokeWeight(0);
  fill('orange');
  text('SETTINGS', 250, 482.5); //OPTIONS text
  fill('lightblue');
  text('BOLUS', 560, 482.5); //BOLUS text
}

//mouseClicked function follows the lead of mousePressed and uses the state values mousePressed sets.
//The giant else-if tree is not elegant, but it works
function mouseClicked() {
  if (state == 1){ //Checking if state is 1
      screenOn(); //If so, the screen comes to life
      fill('lightgreen');
      stroke(0);
      strokeWeight(0);
      rect(76, 450, 219, 7); //A green line indicates which lock button is active
      } else {
        if (state == 2) { //Checking if state is 2
          fill('lightgreen');
          strokeWeight(0);
          rect(295, 450, 220, 7); //A green line indicates which lock button is active
          fill(150);
          strokeWeight(0);
          rect(76, 450, 220, 7); //A gray line replaces the previous button, now inactive
        } else {
          if (state == 3) { //Checking if state is 3
            fill('lightgreen');
            strokeWeight(0);
            rect(515, 450, 219, 7); //A green line indicates which lock button is active
            fill(150);
            strokeWeight(0);
            rect(295, 450, 220, 7); //A gray line replaces the previous button, now inactive
        } else {
          if (state == 4) { //Checking if state is 4
            mainMenu(); //If so, the main menu buttons are brought up
          } else {
            if (state == 0) { //Checking if state is naught
              screenOff(); //If so, the screen shuts down
            }
          }
        }
    }
  }
}

//This function controls the state variable by checking location of the mouse press and the value of said variable.
//The giant else-if tree is not elegant, but it works
function mousePressed() { 
  if ((800 < mouseX) && (mouseX < 950) && (255 < mouseY) && (mouseY < 345)) { //Checking if the mouse is in the right spot when it clicks.
    state = 1; //If so, state's 1
  } else {
    if ((75 < mouseX) && (mouseX < 295) && (450 < mouseY) && (mouseY < 525) && (state == 1)) { //Checking if the mouse is in the right spot when it clicks and if the state is 1.
      state = 2; //If so, state's 2
    } else {
      if ((295 < mouseX) && (mouseX < 515) && (450 < mouseY) && (mouseY < 525) && (state == 2)) { //Checking if the mouse is in the right spot when it clicks and if the state is 2.
        state = random([0, 1, 3]); //The main attraction of the show, perfect representation of the depths of my hatred for this accursed device that decides to shut down, or restart the unlock, or absolutely anything besides work as i want it to. The state is randomly decided to go to screenOff() function, the first button, or actually go to the last button and allow the user to unlock the damned thing to finally get to input a gigantic bolus in the middle of the night in the grips of equal parts rage and despair over the incredible heights the Mount Blood Glucose had achieved.
      } else {
        if ((515 < mouseX) && (mouseX < 735) && (450 < mouseY) && (mouseY < 525) && (state == 3)) { //Checking if the mouse is in the right spot when it clicks and if the state is 3.
          state = 4; //If so, state's 3
        } 
      }
    }
  }
}