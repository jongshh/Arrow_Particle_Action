let balls = [];
let gravity = 0.005;


function setup() {
  createCanvas(800, 800); 
  //ball = new Walker();
  
   console.log("위쪽/아래쪽 화살표 : 중력 제어 | 좌/우 화살표 : 입자 막대의 기울기 | 마우스 클릭 : 새로운 입자/ 입자 막대 생성 | 엔터 : 입자 흔들기 | 컨트롤/쉬프트 : 입자 막대의 규모 조정하기 ")
}


function draw() {
  background(1);
  
  for (let ball of balls) {
  ball.update();
  ball.display();
  ball.bound();
  ball.gravity();
  ball.tackle();
  ball.Linebound();
  ball.keycontrol();

  if (mouseIsPressed) {
    
  }
  }
  
      if (keyIsDown(UP_ARROW)){
    gravity -= 0.001;
    }
  if (keyIsDown(DOWN_ARROW)){
    gravity += 0.001;
    }
  
  

    push();
    noStroke();
    fill(255);
    textSize(35);
    text("Arrow, Particle, and Action", width/2-200, 40);
    textSize(15);
    text("Gravity Level : "+nf(gravity*100,1,2), width/2-60, 70)
    pop();
  
  
 
}

function mousePressed() {
  let ball = new Walker();
  balls.push(ball);
}