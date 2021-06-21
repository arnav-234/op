class hexagon{
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      polygon = Bodies.circle(x,y,r.options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }