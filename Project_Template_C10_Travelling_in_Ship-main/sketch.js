var ship,shiprunning,sea,backgrounddimg


function preload(){
  shiprunning = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  backgrounddimg = loadImage("sea.png")
}

function setup(){
  createCanvas(800,400)
  sea = createSprite(400,200)
  sea.scale = 0.7
  sea.addImage(backgrounddimg)
  ship = createSprite(400,250)
  ship.scale = 0.3
  ship.addAnimation("anim",shiprunning)
  sea.velocityX = -10
}



function draw(){
  background("white")
  drawSprites()
  if (sea.x < 0){
    sea.x = sea.width/2
  }

}

