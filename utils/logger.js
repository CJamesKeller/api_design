const chalk = require('chalk');
const log = console.log;

module.exports = {
  logger: {
    info: (msg) => log(chalk.blue(msg))
  }
};
