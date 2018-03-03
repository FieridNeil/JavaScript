class Snake {

  constructor(xpos, ypos){
    this.Setup();
  }

  Setup(){
    this.x = width/2;
    this.y = height/2;
    this.size = 10;
    this.movex = true;
    this.movey = false;
    this.xspeed = 1
    this.yspeed = 0;
    this.length = 1;
    this.body = [];
    this.gameOver = false;
  }

  Show(){
    stroke(1);
    fill(0, 255, 255);
    for(var i = 0; i < this.length; i++){
      rect(this.body[i].x, this.body[i].y, this.size, this.size);
    }
  }

  Move(){
    snake.GameOver();
    this.Dir();
    this.Collision();
    // If the length of the snake == the total, then shift the previous square position upward
    if(this.body.length === this.length){
      for(var i = 0; i < this.body.length-1; i++){
        this.body[i] = this.body[i+1];
      }
    }

    this.body[this.length - 1] = createVector(this.x, this.y);
    this.x += this.xspeed*this.size;
    this.y += this.yspeed*this.size;



  }

  Dir(){
    switch(keyCode){
      case UP_ARROW:
      if(!this.movey){
        this.yspeed = -1;
        this.xspeed = 0;
        this.movey = true;
        this.movex = false;
      }
        break;

      case DOWN_ARROW:
      if(!this.movey){
        this.yspeed = 1;
        this.xspeed = 0;
        this.movey = true;
        this.movex = false;
      }
        break;

      case LEFT_ARROW:
      if(!this.movex){
        this.xspeed = -1;
        this.yspeed = 0;
        this.movex = true;
        this.movey = false;
      }
        break;

      case RIGHT_ARROW:
      if(!this.movex){
        this.xspeed = 1;
        this.yspeed = 0;
        this.movex = true;
        this.movey = false;
      }
        break;

      case 32:
        this.xspeed = 0;
        this.yspeed = 0;
        break;
    }

  }

  Eat(fruit){
    var d = dist(this.x, this.y, fruit.xpos, fruit.ypos);
    if(d <= 5){
      fruit.GenerateNew();
      this.length++;
    }

  }

  Collision(){
    if(this.x <= -1 || this.x + this.size >= width + 1){
      this.gameOver = true;
    }else if(this.y <= -1 || this.y + this.size >= height + 1){
      this.gameOver = true;
    }

    // Collides with self
    for(var i = 0; i < this.body.length - 1; i++){
      var d = dist(this.x, this.y, this.body[i].x, this.body[i].y);
      if(d <= 5){
        this.gameOver = true;
      }
    }
  }

  GameOver(){
    if(this.gameOver){
      this.Setup();
      return true;
    }
    return false;
  }
}
