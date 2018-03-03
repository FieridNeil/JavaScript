class Fruit{
  constructor(xpos, ypos){
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = 10;
  }

  Show(){
    noStroke();
    fill(125, 255, 255);
    rect(this.xpos, this.ypos, this.size, this.size);
  }

  RandInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive

  }

  GenerateNew(){
    var ran = [50, 40, 30, 50];
    this.xpos = (this.RandInt(10, width-10) % 10) * ran[this.RandInt(0, ran.length - 1)];
    this.ypos = (this.RandInt(10, height-10) % 10) * ran[this.RandInt(0, ran.length - 1)];

  }

}
