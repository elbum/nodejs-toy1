class Shape {
  static create(x, y) {
    return Shape(x, y);
  }

  name = "Shape";
  constructor(x, y) {
    this.move(x, y);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  area() {
    var x = 1;
    var y = 2;
    return this.x * this.y + x + y;
  }
}

var s = new Shape(0, 0);
// s.area();
s.move(6, 6);
console.log(s.area());

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
  area() {
    super.move(5, 5);
    if (this.radius === 0) {
      return super.area();
    } else if (this.x != 0 || this.y != 0) {
      return this.x * this.y;
    }
    return this.radius * this.radius * 3.14;
  }
}

var c = new Circle(0, 4, 10);
console.log(c.area());
