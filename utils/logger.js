const chalk = require('chalk');

function stamp (id) {
  // This date could be better formatted, but to avoid more deps or hand-writing for now, it is left as-is
  let substring = '[ ' + new Date() + ' ] ';

  if (id) substring += `for ID: ${id} `;

  return chalk.gray(substring);
}

module.exports = {
  info: (msg, id) => console.log(chalk.bgBlue.white('[INFO]') + stamp(id) + chalk.blue(msg)),
  warn: (msg, id) => console.log(chalk.bgYellow('[WARN]') + stamp(id) + chalk.yellow(msg)),
  error: (msg, id) => console.log(chalk.bgRed('[ERROR]') + stamp(id) + chalk.red(msg)),
  sys: (msg, id) => console.log(chalk.bgWhite('[SYS]') + stamp(id) + chalk.gray(msg))
};
