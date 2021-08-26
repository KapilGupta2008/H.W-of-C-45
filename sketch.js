var striker_img , arrow_img , board_img , red_img , yellow_img;

var wood1 , wood2 , wood3 , wood4 ;

var  borders , arrow , striker;

var token1 ; 
var token2 , token3 , token4 , token5 ;
var tok;

function preload(){
striker_img = loadImage("striker.png");

arrow_img = loadAnimation("arrow1.png" , "arrow2.png" , "arrow3.png");

board_img = loadImage("board.png");

red_img = loadImage("red.png");

yellow_img = loadImage("yellow.png");

}

function setup(){
createCanvas(400,400);

//groups

borders = new Group;

tok = new Group;

/*borders
   |
   |
   |
  \|/
     */
wood1 = createSprite(200,0,400,52);
wood1.shapeColor = ("#6F4D31");
borders.add(wood1);

wood2 = createSprite(200,400,400,52);
wood2.shapeColor = ("#6F4D31");
borders.add(wood2);

wood3 = createSprite(0,200,52,400);
wood3.shapeColor = ("#6F4D31");
borders.add(wood3);

wood4 = createSprite(400,200,52,400);
wood4.shapeColor = ("#6F4D31");
borders.add(wood4);

//create arrow

arrow = createSprite(200,250)
arrow.addAnimation("arrow",arrow_img);
arrow.scale = 0.3;
arrow.rotateToDirection = true;
arrow.visible = false;
arrow.pause();

//create striker

striker = createSprite(200,310);
striker.addImage("striker",striker_img);
striker.scale = 0.1;
striker.rotation = 270;
striker.debug = true;
striker.setCollider("circle",0,0,110)

//create tokens

token1 = createSprite(200,200);
token1.addImage(yellow_img);
token1.scale = 0.1;
token1.setCollider("circle",0,0,80);
tok.add(token1);

token2 = createSprite(200,177);
token2.addImage(red_img);
token2.scale = 0.1;
token2.setCollider("circle",0,0,80);
tok.add(token2);

token3 = createSprite(200,222);
token3.addImage(red_img);
token3.scale = 0.1;
token3.setCollider("circle",0,0,80);
tok.add(token3);

token4 = createSprite(222,200);
token4.addImage(red_img);
token4.scale = 0.1;
token4.setCollider("circle",0,0,80);
tok.add(token4);

token5 = createSprite(177,200);
token5.addImage(red_img);
token5.scale = 0.1;
token5.setCollider("circle",0,0,80);
tok.add(token5);


}

function draw(){
background(board_img);
tok.bounce(borders);
tok.bounce(striker);
striker.bounce(borders);
striker.bounce(tok);


drawSprites();
}





