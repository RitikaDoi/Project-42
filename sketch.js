var bgImage;

var iss, issImage;

var hasDocked = false;

var spacecraft, spacecraft1Image, spacecraft2Image, spacecraft3Image, spacecraft4Image;

var InvisibleSprite;

var GameState = 0;
var PLAY = 0
var END = 1;

function preload()
{

  bgImage = loadImage("Docking-undocking/spacebg.jpg");

  issImage = loadAnimation("Docking-undocking/iss.png");

  spacecraft1Image = loadAnimation("Docking-undocking/spacecraft1.png");
  spacecraft2Image = loadAnimation("Docking-undocking/spacecraft2.png");
  spacecraft3Image = loadAnimation("Docking-undocking/spacecraft3.png");
  spacecraft4Image = loadAnimation("Docking-undocking/spacecraft4.png");

}

function setup() 
{
  
  createCanvas(1350,625);

  spacecraft = createSprite(675, 550);
  spacecraft.scale = 0.2;
  spacecraft.velocityX = 0;
  spacecraft.addAnimation("spacecraft1", spacecraft1Image);
  spacecraft.addAnimation("spacecraft2", spacecraft2Image);
  spacecraft.addAnimation("spacecraft3", spacecraft3Image);
  spacecraft.addAnimation("spacecraft4", spacecraft4Image);
  
  iss = createSprite(675, 250);
  iss.addAnimation("iss", issImage);
  iss.scale = 0.94;

  InvisibleSprite = createSprite(618, 275, 10, 2);
  InvisibleSprite.visible = false;

  spacecraft.x = (Math.round(random(50, 1300)));

}

function draw() 
{
  
  background(bgImage); 
  
if(GameState === 0)
{

  if(!hasDocked)
  {

    if(keyDown("left"))
    {

      spacecraft.changeAnimation("spacecraft3", spacecraft3Image);
      spacecraft.x = spacecraft.x - 5;

    }

    if(keyDown("right"))
    {

      spacecraft.changeAnimation("spacecraft4", spacecraft3Image);
      spacecraft.x = spacecraft.x + 5;

    }

    if(keyDown("down"))
    {

      spacecraft.changeAnimation("spacecraft2", spacecraft3Image);

    }

    if(keyDown("UP_ARROW"))
    {

      spacecraft.changeAnimation("spacecraft2", spacecraft3Image);
      spacecraft.y = spacecraft.y - 5;

    }

    if(spacecraft.isTouching(InvisibleSprite))
    {

      GameState = 1;

    }

  }
  
}

if(GameState === 1)
{

  hasDocked = true;
  ShowTextAfterDocking()

}

  drawSprites();

}

function ShowTextAfterDocking()
{

  textSize(50);
  fill("pink");
  text("Docking Successful!", 475, 520);

}