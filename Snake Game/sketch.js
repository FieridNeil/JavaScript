var snake;
var fruit;

function setup(){
  createCanvas(500,500);
  frameRate(10);
  var xpos = 50; /*round(random(10, width - 10));*/
  var ypos = 50; /*round(random(10, height - 10));*/
  snake = new Snake(xpos,ypos);
  fruit = new Fruit(100,100);
}


function draw(){
  background(200);
  snake.Show();
  snake.Move();
  snake.Eat(fruit);
  fruit.Show();
}
