const inquirer = require('inquirer');
var fs = require("fs")
var { Triangle, Circle, Square } = require("./lib/shapes.js")

// save each user choice to an object
var choices = {
  textColor: undefined,
  fillColor: undefined,
  text: undefined,
  shape: undefined,
}
// inquirer check box and inputs for label selection
const questions = [
  {
    type: 'checkbox',
    name: 'select shape',
    message: "What shape?",
    choices: ['square', 'triangle', 'circle']
  },
  {
    type: 'input',
    name: 'shape_color',
    message: "What color would you like the shape?",
  },
  {
    type: 'input',
    name: 'label_name',
    message: "What's your lable name?",
  },
  {
    type: 'input',
    name: 'label_color',
    message: "What's your lable text color?",
  },
];
// calling inquirer prompts
inquirer.prompt(questions).then((answers) => {
  choices.shape = answers['select shape'][0];
  choices.fillColor = answers['shape_color'];
  choices.text = answers['label_name'];
  choices.textColor = answers['label_color'];

  // imports classes from shapes.js  creates new instance of class.
  if (choices.shape === "triangle") {
    var shape = new Triangle(choices.text, choices.textColor, choices.shape, )
    shape.setColor(choices.fillColor)
  }
  if (choices.shape === "circle") {
    var shape = new Circle(choices.text, choices.textColor, choices.shape, choices.fillColor)
  }
  if (choices.shape === "square") {
    var shape = new Square(choices.text, choices.textColor, choices.shape, choices.fillColor)
  } 
// saves svg file after creation to file called examples
  const data = new Uint8Array(Buffer.from(shape.render()));
    fs.writeFile(`lib/examples/${choices.text + choices.textColor + choices.shape + choices.fillColor}.svg`, data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

});