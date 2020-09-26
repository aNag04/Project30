class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      block1 = new Box(120,275,30,40);
      block2 = new Box(150,275,30,40);
      block3 = new Box(180,275,30,40);
      block4 = new Box(210,275,30,40);
      block5 = new Box(240,275,30,40);
      block6 = new Box(270,275,30,40);
      block7 = new Box(300,275,30,40);

      block8 = new Box(330,235,30,40);
      block9 = new Box(360,235,30,40);
      block10 = new Box(390,235,30,40);
      block11 = new Box(420,235,30,40);
      block12 = new Box(450,235,30,40);

      block13 = new Box(360,195,30,40);
      block14 = new Box(390,195,30,40);
      block15 = new Box(420,195,30,40);

      blovk16 = new Box(390,155,30,40);

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}