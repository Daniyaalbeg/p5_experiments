let movers = [];

function setup() {
  // put setup code here
  createCanvas(600,400);

  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover()
  }
}

function draw() {
  background(250);
  for (let i = 0; i < 10; i++) {
    movers[i].move()
    movers[i].display()
  }
}

class Mover {
  constructor() {
    this.v = createVector(0,0)
    this.l = createVector(random(100),random(100))
    this.a = createVector(1, 1)
    this.d = random(100)
  }

  move() {
    let mouse = createVector(mouseX, mouseY)
    let dir = p5.Vector.sub(mouse, this.l)
    dir.normalize()
    dir.mult(0.5);
    this.a = dir;
    this.v.add(this.a);
    this.l.add(this.v);

    if ((this.l.x > width) || (this.l.x < 0)) {
      this.v.x = this.v.x * -1;
    }
    if ((this.l.y > height) || (this.l.y < 0)) {
      this.v.y = this.v.y * -1;
    }
  }

  display() {
    stroke(0);
    fill(175);
    ellipse(this.l.x, this.l.y, this.d, this.d)
  }
}
