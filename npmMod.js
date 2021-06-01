const chalk = require('chalk');
const validator = require('validator');


//console.log(chalk.green.underline.inverse('Hello world!'));
const result = validator.isEmail('bapita@gmail.com');
result ? console.log(chalk.green.underline.inverse(result)):console.log(chalk.red.underline.inverse(result));
