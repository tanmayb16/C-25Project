class Paper {
    constructor(x, y, width, height){
      var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
    }
    
    this.width = width;
    this.height = height;
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(x, y, width, options);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    ellipse(0,0,70,70);
    imageMode(CENTER);
    image(this.image, 0, 0, 85,85);
    pop();
  }
}