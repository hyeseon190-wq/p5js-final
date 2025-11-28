
let timeOfDay = 0;  // 마우스 변수
let eyeChange = 0;  // 키보드 변수

function setup() {
  createCanvas(600, 400);
}


function draw() {
  if (timeOfDay === 0) {   // 0번: 낮 (노랑)
    background(255, 226, 127);
  } 
     else if (timeOfDay === 1) {   // 1번: 저녁 (하늘색)
     background(135, 206, 235); 
  } 
     else if (timeOfDay === 2) {   // 2번: 밤 (남색)
     background(40, 40, 120); 
  } 
     else if (timeOfDay === 3) {   // 3번: 반짝반짝
     background(40, 40, 120); 
     for (let i = 0; i < 50; i++) {
      stroke(255, 255, 200, random(150, 255)); 
      strokeWeight(random(1, 3));  
      point(random(width), random(height));  
    }
  }
  
  // 과제2- 
  // 머리 (뒤)
  noStroke();
  fill(40, 30, 20); 
  ellipse(300, 220, 220, 260);

  // 얼굴
  fill(255, 230, 210); 
  ellipse(300, 200, 160, 190);

  // 눈
  stroke(40, 20, 20);
  strokeWeight(3);

  if (eyeChange === 1) {    // 1: 눈웃음
    noFill();
    arc(265, 190, 40, 15, PI, TWO_PI);
    arc(335, 190, 40, 15, PI, TWO_PI);
  }
  
  else if (eyeChange === 2) {     // 2: 동그란 눈
    fill(255);
    strokeWeight(2);
    ellipse(265, 190, 25, 25);
    ellipse(335, 190, 25, 25);
    
    noStroke();
    fill(0);
    circle(265, 190, 15);
    circle(335, 190, 15);
  }
  
  else if (eyeChange === 3) {   //3: 눈물
    fill(255);
    strokeWeight(2);
    ellipse(265, 190, 25, 25);
    ellipse(335, 190, 25, 25);
    
    noStroke();
    fill(0);
    circle(265, 190, 15);
    circle(335, 190, 15);
    
    noStroke();
    fill(100, 150, 255, 180); 
    ellipse(265, 210 + random(-1, 1), 8, 12); 
    ellipse(335, 210 + random(-1, 1), 8, 12); 
  }
  
  else {   // 0: 기본 
  noFill();
  arc(265, 190, 40, 15, 0, PI);
  arc(335, 190, 40, 15, 0, PI);
  }

  // 볼 터치
  noStroke();
  fill(255, 180, 180, 150);
  ellipse(250, 210, 25, 15);
  ellipse(350, 210, 25, 15);

  // 눈썹
  stroke(40, 20, 20);
  strokeWeight(4);
  line(240, 165, 285, 170);
  line(315, 170, 360, 165);

  // 코 
  stroke(100);
  strokeWeight(3);
  point(300, 210);

  // 입 
  noFill();
  stroke(200, 80, 100);
  strokeWeight(3);
  arc(300, 240, 50, 25, 0, PI);

  // 귀
  noStroke();
  fill(255, 230, 210);
  ellipse(220, 200, 20, 28);
  ellipse(380, 200, 20, 28);

  // 앞머리
  fill(40, 30, 20);
  arc(300, 160, 180, 120, PI, TWO_PI);

 // 선글라스 
  stroke(0);
  strokeWeight(4);
  fill(40); // 

  ellipse(265, 115, 60, 25); 
  ellipse(335, 115, 60, 25); 

  // 브릿지
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(300, 110, 40, 20, 0, PI);

  // 다리
  line(235, 115, 220, 160); 
  line(365, 115, 380, 160); 


  // 티셔츠
  noStroke();
  fill(255);
  rect(230, 300, 150, 80, 20);


  // 하트
  fill(220, 0, 50);
  noStroke();
  ellipse(340, 320, 16, 16);   
  ellipse(355, 320, 16, 16);   
  triangle(331, 320, 365, 320, 347, 343); 

  // 목
  noStroke();
  fill(255, 230, 210);
  rect(275, 270, 50, 40, 10);   // 목 기둥
  
  // 마우스 
  stroke(255, 255, 255, 180);
  strokeWeight(5);
  line(mouseX, mouseY - 10, mouseX, mouseY + 10);
  line(mouseX - 10, mouseY, mouseX + 10, mouseY);
  line(mouseX - 7, mouseY + 7, mouseX + 7, mouseY - 7);
  line(mouseX - 7, mouseY - 7, mouseX + 7, mouseY + 7);
  
  
  //배경에
  if (timeOfDay === 0 || timeOfDay === 1 || timeOfDay === 2) {
    for (let i = 0; i < 10; i++) {
      if (i % 2 === 0) {
        fill(255, 180, 180, 200);
        circle(random(width), random(height), random(5, 15));
    }
      else {
        fill(180, 255, 180, 200);
        circle(random(width), random(height), random(5, 15));
      }
    } 
  }
 }  


// 마우스 인터랙션
function mousePressed() {
  timeOfDay = timeOfDay + 1;

  if (timeOfDay > 3) {
    timeOfDay = 0;
  }
}

// 키보드 인터랙션
function keyPressed() {
  if (keyCode === ENTER) {
    eyeChange = eyeChange + 1;
    
    if (eyeChange > 3) {
      eyeChange = 0;
    }
  }
  else if (key === 's') {
    saveGif('과제3', 10);
  }
}