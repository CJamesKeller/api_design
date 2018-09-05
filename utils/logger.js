const chalk = require('chalk');

const stamp = (id) => chalk.gray('[ ' + new Date() + ' ] ' + (id > 0) ? ' for ID: ' + id + ' ' : '');

module.exports = {
  log: {
    info: (msg, id = -1) => console.log(chalk.bgBlue('[INFO] ') + stamp(id) + chalk.blue(msg)),
    warn: (msg, id = -1) => console.log(chalk.bgYellow('[WARN] ') + stamp(id) + chalk.yellow(msg)),
    error: (msg, id = -1) => console.log(chalk.bgRed('[ERROR] ') + stamp(id) + chalk.red(msg)),
    sys: (msg, id = -1) => console.log(chalk.bgWhite('[SYS] ') + stamp(id) + chalk.gray(msg))
  }
};
