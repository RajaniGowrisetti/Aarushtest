var bg, bgImg;
var hero, heroImg;
var bullet, bulletImg, bulletGroup;
var shoot = 0;
var npc, ncpImg, npcGroup;
var score = 0;

function preload(){
    bgImg = loadImage("city.jpeg");
    heroImg = loadImage("hero.png");
    bulletImg = loadImage("bullet.png");
    npcImg = loadImage("npc.png")
}

function setup(){
    createCanvas(1200,900);

     bg = createSprite(1100,350);
     bg.addImage(bgImg);
     bg.scale = 2.4; 
     
     hero = createSprite(50,630);
     hero.addImage(heroImg);
     hero.scale = 0.7;

     bulletGroup = new Group;
      npcGroup = new Group;
     

      score  = 0  ;
stroke("red");
fill("red");
textSize(25);

     bg.velocityX = -3;
}


function draw(){
    background(0);

    if(bg.x< 325){
        bg.x = bg.width/1;
    }
    
    
  shoot = shoot-1
  if(keyDown("space") && shoot <0){
  bullet = createSprite(hero.x,hero.y);
  bullet.addImage(bulletImg);
  bullet.velocityX = 5 ;
  bulletGroup.add(bullet);
  shoot = bullet.x;
  bullet.scale = 0.25;
  }
  

  if(bulletGroup.isTouching(npcGroup)){
    score = score+10;
    npcGroup.destoryEach();
  }


  if(npcGroup.isTouching(hero)){
    gameState =END 
  }
  
/*if(keyDown("UP_ARROW")){
    hero.y = hero.y - 4;
  
  }
  if(keyDown("DOWN_ARROW")){
    hero.y = hero.y + 4;
  
  }*/

  hero.y = World.mouseY;
  spawnNpcs();
    drawSprites();

    text("Score:"+score,300,50);
}

function spawnNpcs(){
    if(World.frameCount % 150 === 0){
        npc =createSprite(1100,500);
        npc.addImage(deerImg);
 npc.velocityX =-2;
       // deer.y =Math.round(random(550,50));
        npcGroup.add(npc);
        npc.scale = 0.25
    }
}