class Walker {
  
  constructor() {
    this.pos = createVector(width/2, height/2-100);
    this.vel = createVector(random(-8.8),random(0));
    this.acc = createVector(0,0.3);
  	this.w = 20;
    this.l = 20;
    this.r = 0;
    this.gf = 0.005;
    this.lw = 360;
  }
  
  update() {
    this.vel.add(this.acc);
    this.vel.mult(0.98);
    this.pos.add(this.vel);
    
    this.tax = mouseX;
    this.tay = mouseY;
    
    this.slp = abs((this.l - this.r) * 0.001);
    this.bd = dist(this.tax,this.tay,this.pos.x,this.pos.y);
    this.sop = (this.tay - this.tay + this.l) / (this.tax - this.tax + this.lw); 
    this.yloc = this.sop * this.bd
    
    //console.log(this.pos.y,this.bd,this.sop,this.yloc);
  }
  
  
  
  bound(){
    if (this.pos.x > width - this.w/2) {
      this.vel.x*=-1;
      this.pos.x = width - this.w/2;
      this.acc.x*=0.1
    } else if (this.pos.x < 0 + this.w/2) {
      this.pos.x = 0 + this.w/2;
      this.vel.x*=-1;
      this.acc.x*=0.1
    }

    if (this.pos.y > height - this.w/2) {
      this.vel.y*=-1;
      this.pos.y = height - this.w/2;
      this.acc.x*=0.9
    } else if (this.pos.y < 0 + this.w/2) {
      this.vel.y*=-1;
      this.pos.y = 0 + this.w/2;
      this.acc.x*=0.9
    }
  }
  
  Linebound(){
    
    //'/' type
    
   if(this.pos.x > this.tax-this.lw && this.pos.x < this.tax && this.pos.y < this.tay+this.slp*1000 && this.pos.y > this.tay){
     this.vel.x*=-0.9;
     this.vel.y*=-0.9;
     this.acc.y *= 0.9;
     this.pos.y = this.tay+this.yloc; 
     
      
      
     
    //Universal Line Rule 
    
      if (this.l > this.r){
        this.acc.x = this.acc.x - this.slp;
      }
      else if (this.r > this.l){
        this.acc.x = this.acc.x + this.slp;
      }
      else if(this.r = this.l){
        this.acc.x = this.acc.x;
      }
    }
    
    //console.log("\n Vel X : "+ nf(this.vel.x,4,2), "\n Vel Y : "+ nf(this.vel.y,4,2),"\n Acc X : "+ nf(this.acc.x,4,2),"\n Acc Y : "+nf(this.acc.y,4,2));
  }
  
  gravity(){
    
   if(this.pos.y < height - this.w/2){
      this.acc.add(0,this.gf);
    }
    else{
      this.acc.y *= 0.9;
    }
   if(this.pos.x > this.tax-this.lw && this.pos.x < this.tax && this.pos.y < this.tay+this.slp*1000 && this.pos.y > this.tay){
      this.acc.add(0,0);
    }
  }
  
  display() {
    fill(0)
    stroke(random(50,255),random(50,255),random(50,255),255)
    strokeWeight(4)
	ellipse(this.pos.x, this.pos.y, this.w);
  }
  
  tackle(){
    
    if(keyIsDown(ENTER)){
      this.vel.add(random(-10,10),random(-10,10));
      
    }
    
    stroke(255);
    //square(this.tax,this.tay,10);
    line(this.tax-this.lw,this.tay + this.l ,this.tax,this.tay + this.r);
  }
  
  keycontrol(){
    if (keyIsDown(UP_ARROW)){
    this.gf -= 0.001;
  }
  if (keyIsDown(DOWN_ARROW)){
    this.gf += 0.001;
  }
  if (keyIsDown(LEFT_ARROW)){
    this.l -= 1;
  }
  if (keyIsDown(RIGHT_ARROW)){
    this.l += 1;
  }
  if (keyIsDown(CONTROL)){
    this.lw -= 1;
  }
  if (keyIsDown(SHIFT)){
    this.lw += 1;
  }
  }
}