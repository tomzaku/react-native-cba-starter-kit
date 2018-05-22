// NOTE:  this file is intentionally written with es3

const shell = require('shelljs')
const which = require('which')
const chalk = require('chalk')

const log = console.log

const check = async () => {
  try {
    which('node', function (err, resolvedPath) {
      if (err) {
        throw `Please install 'nodeJS' from https://nodejs.org/en/ and try again`
      }
      // er is returned if no "node" is found on the PATH
      // if it is found, then the absolute path to the exec is returned
    })
    which('react-native', function (err, resolvedPath) {
      if (err) {
        throw 'Missing react-native-cli. Install with `npm i -g react-native-cli` and try again.'
      }
      // er is returned if no "node" is found on the PATH
      // if it is found, then the absolute path to the exec is returned
    })
    which('yarn', function (err, resolvedPath) {
      if (err) {
        throw `Please install 'yarn' package from https://yarnpkg.com/lang/en/docs/install/#mac-stable and try again`
      }
      // er is returned if no "node" is found on the PATH
      // if it is found, then the absolute path to the exec is returned
    })
  } catch (err) {
    log(chalk.red(pe.render(err)))
  }
}
check()