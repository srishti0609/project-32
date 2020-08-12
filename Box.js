
   
class Box{
    constructor(x, y, width, height) {
      var options = {
        
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
     
      push();
      fill("pink");
       if(this.body.speed<3){
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
       }
        else{
     World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            pop();
       }
    
  }
  score(){
    if(this.visiblity<0 && this.visiblity>-105){
      score++;

    }
}
}
    

    
  

  
  