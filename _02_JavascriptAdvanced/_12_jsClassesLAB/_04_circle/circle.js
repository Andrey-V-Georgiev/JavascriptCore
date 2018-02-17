class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

let circle = new Circle(3);
circle.diameter = 4;
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area);