var wall,thickness;
var speed, bullet, weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,15,5);
  bullet.shapeColor=color("white")
  wall=createSprite(1500,200,thickness,height/2)
  wall.shapeColor=color("white")
  thickness=random(22,83)
  weight=random(30,52)
  speed=random(223,321)
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

function draw() {
  background("black");
  bullet.velocityX=speed;
  drawSprites();
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed/(thickness * thickness* thickness);


    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}