var cat
var mouse
var mousepng
var catpng
var gardenpng

function preload() {
    //load the images here
    mousepng = loadImage("images/mouse1.png")
    catpng = loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png")
    gardenpng = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,700,50,50)
    cat.addAnimation("cat1.png",catpng)
    cat.scale = 0.2

    mouse = createSprite(200,700,50,50)
    mouse.addImage("mouse1.png",mousepng)
    mouse.scale = 0.2
}

function draw() {

    background(gardenpng);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x < mouse.x){
       cat.velocityX = 0
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === 65){
        cat.velocityX = -5
        cat.addAnimation("cat2.png","cat3.png")
    }
    else{
        cat.velocityX = 0
    }

}
