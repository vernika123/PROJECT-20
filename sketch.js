var catimg
var bgimg
var mouseimg 
function preload() {
    //load the images here
    bgimg = loadImage ("images/garden.png")
    catimg = loadAnimation ( "images/cat2.png" , "images/cat3.png")
    mouseimg = loadAnimation ( "images/mouse2.png" , "images/mouse3.png")
    catimg1 = loadImage ("images/cat1.png")
    catimg4 = loadImage ("images/cat4.png")
    mouseimg1 = loadImage ("images/mouse1.png")
    mouseimg4 = loadImage ("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat =  createSprite ( 870,600)
    cat.addAnimation ("catSitting", catimg1 )
    cat.scale = 0.2

    mouse = createSprite (200,600)
    mouse.addAnimation ("mousestanding", mouseimg1)
mouse.scale= 0.2
}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
if (cat.x - mouse.x< (cat.width-mouse.width)/2) {
    cat.velocityX = 0 
    cat.addAnimation ("catLastImage", catimg4 )
    cat.changeAnimation ("catLastImage")
    cat.x= 300
    cat.scale = 0.2 

    mouse.addAnimation ("mouseLastImage", mouseimg4 )
    mouse.changeAnimation ("mouseLastImage")
mouse.scale = 0.2

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW ) {
    mouse.addAnimation ("mouseteasing", mouseimg)
    mouse.changeAnimation ( "mouseteasing")
    mouse.frameDelay = 25;

    cat.velocityX = -5
 cat.addAnimation ("catrunning", catimg)
 cat.changeAnimation ("catrunning")

    
}

}
