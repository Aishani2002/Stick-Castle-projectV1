class Coneoftower {
    constructor(x1, y1 ,x2 ,y2 ,x3 ,y3 ) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.triangle(x1, y1 ,x2 ,y2 ,x3 ,y3 ,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
  
    }
  };