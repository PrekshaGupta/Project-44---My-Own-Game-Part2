var player;
var mazePart1, mazePart2, mazePart3, mazePart4, mazePart5;
var mazePart6, mazePart7, mazePart8, mazePart9, mazePart10;
var mazePart11, mazePart12, mazePart13, mazePart14, mazePart15;
var mazePart16, mazePart17, mazePart18, mazePart19, mazePart20;
var mazePart21, mazePart22, mazePart23, mazePart24, mazePart25;
var mazePart26, mazePart27, mazePart28, mazePart29, mazePart30;
var mazePart31, mazePart32, mazePart33, mazePart34, mazePart35;
var mazePart36, mazePart37, mazePart38, mazePart39, mazePart40;

function setup() {
  createCanvas(600,600);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);

  Maze();
  drawSprites();
}

function Maze(){
  mazePart1 = createSprite(300, 70, 540, 12);
  mazePart2 = createSprite(300, 530, 540, 12);
  mazePart3 = createSprite(30, 269, 12, 410);
  mazePart4 = createSprite(570, 209, 12, 290);
  mazePart5 = createSprite(570, 471, 12, 130);
  mazePart6 = createSprite(140, 500, 10, 60);
  mazePart7 = createSprite(280, 500, 10, 60);
  mazePart8 = createSprite(210, 450, 10, 60);
  mazePart9 = createSprite(420, 500, 10, 60);
  mazePart10 = createSprite(390, 475, 60, 10);
  mazePart11 = createSprite(535, 475, 60, 10);
  mazePart12 = createSprite(355, 420, 10, 120);
  mazePart13 = createSprite(250, 420, 210, 10);
  mazePart14 = createSprite(90, 445, 10, 60);
  mazePart15 = createSprite(60, 420, 60, 10);
  mazePart16 = createSprite(460, 420, 60, 10);
  mazePart17 = createSprite(490, 390, 10, 70);
  mazePart18 = createSprite(530, 350, 90, 10);
  mazePart19 = createSprite(380, 360, 60, 10);
  mazePart20 = createSprite(150, 360, 120, 10);
  mazePart21 = createSprite(280, 300, 10, 240);
  mazePart22 = createSprite(150, 295, 10, 120);
  mazePart23 = createSprite(65, 300, 60, 10);
  mazePart24 = createSprite(115, 240, 60, 10);
  mazePart25 = createSprite(90, 210, 10, 60);
  mazePart26 = createSprite(65, 180, 60, 10);
  mazePart27 = createSprite(280, 300, 120, 10);
  mazePart28 = createSprite(405, 325, 10, 70);
  mazePart29 = createSprite(440, 295, 60, 10);
  mazePart30 = createSprite(475, 240, 10, 120);
  mazePart31 = createSprite(535, 130, 60, 10);
  mazePart32 = createSprite(115, 130, 60, 10);
  mazePart33 = createSprite(145, 155, 10, 60);
  mazePart34 = createSprite(175, 180, 60, 10);
  mazePart35 = createSprite(210, 160, 10, 170);
  mazePart36 = createSprite(280, 105, 10, 60);
  mazePart37 = createSprite(305, 180, 60, 10);
  mazePart38 = createSprite(340, 155, 10, 60);
  mazePart39 = createSprite(405, 155, 10, 160);
  mazePart40 = createSprite(375, 230, 60, 10);
}