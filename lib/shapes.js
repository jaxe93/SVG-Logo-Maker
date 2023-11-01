 class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    

    render() {
        console.log(this.colr)
        return(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${this.shape} fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
        )
    }
    setColor(color){
        this.shapeColor = color
    }
}

//Triangle class
 class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
        this.shape = 'polygon points="150, 18 244, 182 56, 182"'
    }
}
// Circle class
 class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
        this.shape = 'circle cx="150" cy="100" r="80"'
    }
}
// Square class
 class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
        this.shape = 'rect x="50" y="20" width="150" height="150"'
    }
}

module.exports = {
    Triangle: Triangle,
    Circle: Circle,
    Square: Square,
    Shape: Shape,
}
