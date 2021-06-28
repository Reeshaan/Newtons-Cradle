class Bob{
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0,
          'density':1.4,
          'isStatic':true,
      }
      this.radius=radius
      this.body = Bodies.circle(x, y, this.radius/2, options);
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     ellipseMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("white");
     ellipse(0, 0, this.radius,this.radius );
      pop();
    }
  };