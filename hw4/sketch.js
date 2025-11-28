    // 연꽃 움직임 변수 선언
  let flowerMove = 0;
  let flowerSpeed = 0.2;
  
  // 물결 움직임 변수 선언
  let waveMove = 0;
  let waveSpeed = 0.5;

function setup() {
  createCanvas(600, 600);

}


function draw() {

  let ms = millis() % 10000;
  let progress = map(ms, 2000, 8000, 0, 1, true);
  
    // 배경
  let skyMorning = color(200, 230, 255);  // 원래 하늘색
  let skyNoon = color(255, 250, 210);   // 정오
  
  let changeSky = lerpColor(skyMorning, skyNoon, progress);
  background(changeSky);
  
  
  // 연꽃 움직임
  flowerMove = sin(frameCount * 0.05) * 5;
  
  // 물결 움직임
  waveMove = cos(frameCount * 0.05) * 10;
  
  // 태양
  let sunX = map(progress, 0, 1, 450, 300); 
  let sideColor1 = color(255, 200, 100, 120); // 태양 외곽 노란색
  let sideColor2 = color(255, 50, 50, 150); // 태양 외곽 붉은색
  
  let centerColor1 = color(255, 180, 70); 
  let centerColor2 = color(255, 100, 50);
  
  let changeSide = lerpColor(sideColor1, sideColor2, progress);   // 외곽
  let changeCenter = lerpColor(centerColor1, centerColor2, progress);  // 중심
  
  noStroke();
  fill(changeSide);
  ellipse(sunX, 130, 180 + (progress * 20), 120 + (progress * 20));  // 같이 커지고 움직이기
  
  fill(changeCenter);   // 태양 중심
  circle(sunX, 130, 90);

  
  
  
  // 산
  let value2 =map(sin(frameCount * 0.05), -1, 1, 0, 1);
  let mirage = sin(frameCount * 0.1) * 2; 

  noStroke();
  
  let mountainMorning = color(80, 120, 140);  //  원래 색
  let mountainNoon = color(60, 160, 100);   // 정오 초록색 
  fill(lerpColor(mountainMorning, mountainNoon, value2)); 
  triangle(40, 320, 180, 180 + mirage , 320, 320);
  
  let mountainMorning2 = color(60, 100, 120);  //  원래 색
  let mountainNoon2 = color(40, 140, 80);   // 정오 진초록색 
  fill(lerpColor(mountainMorning2, mountainNoon2, value2));
  triangle(200, 340, 360, 200 + (mirage * 0.8), 520, 340);
  
  let mountainMorning3 = color(60, 100, 120);  //  원래 색
  let mountainNoon3 = color(100, 180, 120);   // 정오 연두색 
  fill(lerpColor(mountainMorning3, mountainNoon3, value2));
  triangle(380, 330, 500, 220 + (mirage * 1.2), 600, 330);

  // 물
  fill(150, 190, 210, 220);
  rect(0, 320, width, 280);

  //물 위에 사각형 
  fill(210, 230, 240, 230); 
  square(60, 360, 80);
  fill(200, 220, 235, 230); 
  rect(160, 380, 110, 70);
  fill(220, 235, 245, 230); 
  rect(310, 350, 90, 50);
  fill(205, 225, 240, 230); 
  square(430, 390, 70);

  // 연꽃
  let petalSize = map(sin(frameCount * 0.1), -1, 1, 0 , 16);   // 꽃잎 크기 변화
  
  noStroke();
  
  // 꽃 1
  fill(70, 150, 120, 220); 
  ellipse(115, 414 + flowerMove, 60 + petalSize, 18); // 잎
  fill(255, 160, 170);     
  ellipse(115, 400 + flowerMove, 30 + petalSize, 18 + petalSize/2); // 꽃잎들
  ellipse(105, 402 + flowerMove, 24 + petalSize, 14 + petalSize/2);
  ellipse(125, 402 + flowerMove, 24 + petalSize, 14 + petalSize/2);
  ellipse(115, 397 + flowerMove, 22 + petalSize, 12 + petalSize/2);
  fill(255, 210, 220);     
  circle(115, 400, 8);       // 중심

  // 꽃 2
  fill(70, 150, 120, 220); 
  ellipse(215, 434+flowerMove, 60 + petalSize, 18);   // 잎 
  fill(240, 150, 190);     
  ellipse(215, 420+flowerMove, 30 + petalSize, 18 + petalSize/2);   // 꽃잎들
  ellipse(205, 422+flowerMove, 24 + petalSize, 14 + petalSize/2);
  ellipse(225, 422+flowerMove, 24 + petalSize, 14 + petalSize/2);
  ellipse(215, 417+flowerMove, 22 + petalSize, 12 + petalSize/2);
  fill(255, 225, 235);     
  circle(215, 420, 8);

  // 꽃 3 
  fill(70, 150, 120, 220); 
  ellipse(355, 424+flowerMove, 60 + petalSize, 18);
  fill(250, 170, 150);     
  ellipse(355, 410+flowerMove, 30 + petalSize, 18 + petalSize/2);
  ellipse(345, 412+flowerMove, 24 + petalSize, 14 + petalSize/2);
  ellipse(365, 412+flowerMove, 24 + petalSize, 14 + petalSize/2);
  ellipse(355, 407+flowerMove, 22 + petalSize, 12 + petalSize/2);
  fill(255, 225, 210);     
  circle(355, 410, 8);

  // 꽃 4 
  fill(70, 150, 120, 220); 
  ellipse(470, 444+flowerMove, 60 + petalSize, 18);
  fill(230, 145, 200);     
  ellipse(470, 430+flowerMove, 30 + petalSize, 18 + petalSize/2);
  ellipse(460, 432+flowerMove, 24 + petalSize, 14 + petalSize/2);
  ellipse(480, 432+flowerMove, 24 + petalSize, 14 + petalSize/2);
  ellipse(470, 427+flowerMove, 22 + petalSize, 12 + petalSize/2);
  fill(245, 210, 250);     
  circle(470, 430, 8);

  // 줄기
  stroke(40, 110, 120, 180);
  strokeWeight(2);
  line(115, 400, 115, 470);
  line(215, 420, 215, 480);
  line(355, 410, 355, 490);
  line(470, 430, 470, 500);

  // 물결
  stroke(255, 255, 255, 120);
  strokeWeight(1);
  // 물결 1
  line(80+waveMove, 520, 260+waveMove, 520);
  line(80+waveMove, 524, 260+waveMove, 524);
  line(80+waveMove, 528, 260+waveMove, 528);
  line(80+waveMove, 532, 260+waveMove, 532);
  line(80+waveMove, 536, 260+waveMove, 536);
  line(80+waveMove, 540, 260+waveMove, 540);
  // 물결 2
  line(260+waveMove, 540, 460+waveMove, 540);
  line(260+waveMove, 544, 460+waveMove, 544);
  line(260+waveMove, 548, 460+waveMove, 548);
  line(260+waveMove, 552, 460+waveMove, 552);
  line(260+waveMove, 556, 460+waveMove, 556);
  line(260+waveMove, 560, 460+waveMove, 560);
  // 물결 3
  line(420-waveMove, 520, 570-waveMove, 520);
  line(420-waveMove, 524, 570-waveMove, 524);
  line(420-waveMove, 528, 570-waveMove, 528);
  line(420-waveMove, 532, 570-waveMove, 532);
  line(420-waveMove, 536, 570-waveMove, 536);
  line(420-waveMove, 540, 570-waveMove, 540);

}

  function keyPressed() {
    if (key === 's') {
      saveGif('과제4.gif', 10);
    }
  }



