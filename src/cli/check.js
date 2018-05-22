// NOTE:  this file is intentionally written with es3

const shell = require('shelljs')
const which = require('which')
const chalk = require('chalk')

const log = console.log

const checkLib = async (lib, desc) => {
  try {
    await which.sync(lib)
  } catch (err) {
    log(chalk.red(desc))
    process.exit(1)
  }
}

const check = async () => {
  try {
    await checkLib('node', `Please install 'nodeJS' from https://nodejs.org/en/ and try again`)
    await checkLib('react-native', `Missing react-native-cli. Install with 'npm i -g react-native-cli' and try again.`)
    await checkLib('yarn', `Please install 'yarn' package from https://yarnpkg.com/lang/en/docs/install/#mac-stable and try again`)
  } catch (err) {
    log(chalk.red(pe.render(err)))
    process.exit(1)
  }
}

module.exports = check