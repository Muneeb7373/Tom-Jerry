var tom, tomImg;
var jerry,jerryImg;
var background,backgroundImg;

function preload() {
    //load the images here
    backgroundImag = loadImage("garden.png");
   tomImg = loadAnimation("cat1.png","cat2.png","cat3.png","cat3.png","cat4.png");
   jerryImg = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background = createSprite(1000,800);
    background.addImage(backgroundImg);

    tom = createSprite(900,700,50,50)
    tom.addAnimation(tomImg);
    tom.scale=0.5;

    jerry = createSprite(100,700,50,50)
    jerry.addAnimation(jerryImg);
    jeyrr.scale=0.5;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(jerry)){
     tom.velocityX = 900;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode=== LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("tomImg");   
  }
  


}
