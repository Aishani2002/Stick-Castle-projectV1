// b refers to base of the tower and c refers to the conw on top of the respective numbered tower.
var btower1,btower2,btower3;
var ctower1,ctower2,ctower3;
//var bminitower1,bminitower2;
 //var cminitower1,cminitower2

 function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

}


function draw() {
  background(255,255,255);  

  btower1 = new BaseClass (400,380,50,200);
  btower2 = new BaseClass (370,380,40,150);
  btower3 = new BaseClass (430,380,40,150);
  ctower1 = new Coneoftower(400,80,375,180,425,180);
  ctower2 = new Coneoftower (370,150,350,230,390,230);
  ctower3 = new Coneoftower (430,150,410,230,450,230);
    
  btower1.display();
  btower2.display()
  btower3.display();
  ctower1.display();
  ctower2.display();
  ctower3.display();
}