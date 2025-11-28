function setup() {
  createCanvas(600, 400);
  background(255, 226, 127); // 노랑 배경

  // 머리 (뒤)
  noStroke();
  fill(40, 30, 20); // 짙은 갈색/검정
  ellipse(300, 220, 220, 260);

  // 얼굴
  fill(255, 230, 210); // 밝은 살색
  ellipse(300, 200, 160, 190);

  // 눈
  noFill();
  stroke(40, 20, 20);
  strokeWeight(3);
  arc(265, 190, 40, 15, 0, PI);  // 왼쪽 눈웃음
  arc(335, 190, 40, 15, 0, PI);  // 오른쪽 눈웃음

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

  // 코 (심플한 점)
  stroke(100);
  strokeWeight(3);
  point(300, 210);

  // 입 (웃는 곡선)
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


   // 선글라스 (머리 위, 뒤집힌 느낌)
  stroke(0);
  strokeWeight(4);
  fill(40); // 어두운 회색 렌즈

  // 렌즈 (뒤집힌 타원)
  ellipse(265, 115, 60, 25); // 왼쪽 렌즈
  ellipse(335, 115, 60, 25); // 오른쪽 렌즈

  // 브릿지 (위쪽 연결)
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(300, 110, 40, 20, 0, PI);

  // 다리(귀 쪽으로 꼽히는 느낌)
  line(235, 115, 220, 160); // 왼쪽 다리 → 왼쪽 귀 방향
  line(365, 115, 380, 160); // 오른쪽 다리 → 오른쪽 귀 방향


  // 티셔츠
  noStroke();
  fill(255);
  rect(230, 300, 150, 80, 20);

  // 하트
  fill(220, 0, 50);
  noStroke();
  ellipse(340, 320, 16, 16);   // 왼쪽 원
  ellipse(355, 320, 16, 16);   // 오른쪽 원
  triangle(331, 320, 365, 320, 347, 343); // 밑부분 삼각형
  
    // 목
  noStroke();
  fill(255, 230, 210); // 얼굴과 같은 피부색
  rect(275, 270, 50, 40, 10);   // 목 기둥
  ellipse(300, 310, 50, 20);    // 목 아래 둥근 경계
}
