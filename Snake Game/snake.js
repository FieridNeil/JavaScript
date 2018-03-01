class Snake {

  constructor(xpos, ypos){
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = 10;
    this.xspeed = 1
    this.yspeed = 0;
    this.length = 1;
    this.tail = [];
  }

  Show(){
    stroke(1);
    fill(0, 255, 255);
    for(var i = 0; i < this.length; i++){
      rect(this.xpos, this.ypos, this.size, this.size);
    }
  }

  Move(){
    this.xpos += this.xspeed*this.size;
    this.ypos += this.yspeed*this.size;

    this.Dir();
    this.Collision();

  }

  Dir(){

    switch(keyCode){
      case UP_ARROW:
        this.yspeed = -1;
        this.xspeed = 0;
        break;

      case DOWN_ARROW:
        this.yspeed = 1;
        this.xspeed = 0;
        break;

      case LEFT_ARROW:
        this.xspeed = -1;
        this.yspeed = 0;
        break;

      case RIGHT_ARROW:
        this.xspeed = 1;
        this.yspeed = 0;
        break;
    }
  }

  Eat(fruit){
    var d = dist(this.xpos, this.ypos, fruit.xpos, fruit.ypos);
    if(d <= 5){
      fruit.GenerateNew();
      this.Grow();
    }

  }

  Collision(){
    if(this.xpos <= -1 || this.xpos + this.size >= width + 1){
      this.xspeed = 0;
      this.yspeed = 0;
      console.log("Game Over");
    }else if(this.ypos <= -1 || this.ypos + this.size >= height + 1){
      this.yspeed = 0;
      this.xspeed = 0;
      console.log("Game Over");
    }
  }

  Grow(){
    this.length++;
    while(var i < this.length){

    }
  }
}
