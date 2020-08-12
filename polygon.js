class Polygon {
    constructor(x, y, r) {
      var options = {
          isStatic: false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,r, options);
      this.r=r;
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      push();
      fill("orange");
      stroke("black");
      strokeWeight(2);
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y,this.r*2);
      pop();
    }
  }
    