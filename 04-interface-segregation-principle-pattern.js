// Una clase no deberías estar forzada a tener métodos implemantados que jamás va a utilizar
class Shape {
    constructor (name) {
        this.name = name;
    }
}

class Circle extends Shape{
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape{
    constructor(name, area) {
        super(name);
        this.area = area;
    }

    calculateArea() {
        return this.area * this.area;
    }
}

class Line extends Shape{
    constructor(name, pointA, pointB) {
        super(name);
        this.pointA = pointA;
        this.pointB = pointB;
    }

    distance(){
        return Math.pow((this.pointB.x - this.pointA.x), 2) +
               Math.pow((this.pointB.y - this.pointA.y), 2);
    }
}

let shapes = [
    new Circle('CircleA', 2),
    new Circle('CircleB', 3),
    new Rectangle('RectangeA', 3),
    new Line('LineA', {x: 1, y: 1}, {x: 6, y: 7}),
];

function shapeStats(shapes) {
    console.log('Shape stats')
    for (let shape of shapes) {
        //se resuelve el problema de no tener q implementar el metodo en la línea
        if(shape.calculateArea) {
            console.log(`${shape.name} has area of ${shape.calculateArea()} cm^2`);
        }
        if(shape.distance) {
            console.log(`${shape.name} has a distance of ${shape.distance()} cm between the point A and point B`);
        }

    }
}
shapeStats(shapes);