/*import fs from "fs"
import { Triangle, Circle, Square } from "./lib/shapes.js"
import rl from "readline" */
const inquirer = require('inquirer');
var fs = require("fs")
var { Triangle, Circle, Square } = require("./lib/shapes.js")

const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});

var run = () => {
  var userText = "text"
  var userTextColor = "#ff0000"
  var userShape = "triangle"
  var userShapeColor = "#ff0000"


    var getText = () => readline.question("whats the text?", (text) => {
        userText = text;
        getUserTextColor()
    })

    var getUserTextColor = () => readline.question("what color would you like this text?", (textColor) => {
        userTextColor = textColor;
        getShape()
    })

    var getShape = () => readline.question("what shape?", (shape) => {
        userShape = shape;
        getShapeColor()
    })

    var getShapeColor = () => readline.question("what color would you like the shape?", (shapeColor) => {
        userShapeColor = shapeColor;
        readline.close()
        if (userShape === "triangle") {
            var shape = new Triangle(userText, userTextColor, userShape, )
            shape.setColor(userColor)
        }
        if (userShape === "circle") {
            var shape = new Circle(userText, userTextColor, userShape, userShapeColor)
        }
        if (userShape === "square") {
            var shape = new Square(userText, userTextColor, userShape, userShapeColor)
        } 
    
        
        const data = new Uint8Array(Buffer.from(shape.render()));
        fs.writeFile(`lib/examples/${userText + userTextColor + userShape + userShapeColor}.svg`, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        });
    })

    getText()

}

// save each user choice to an object
var choices = {
  textColor: undefined,
  fillColor: undefined,
  text: undefined,
  shape: undefined,
}

inquirer
  .prompt([
    {
      type: 'checkbox',
      message: 'would you like to make an emblem?',
      
      name: 'your choice',
      choices: [
        new inquirer.Separator(' = The shapes = '),
        {
          name: 'circle',
        },
        {
          name: 'square',
        },
        {
          name: 'triangle',
        },
        
      ],
      validate(answer) {
        if (answer.length < 1) {
          return 'You must choose one shape.';
        }

        return true;
      },
    },
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
    run ();
  }); 
  