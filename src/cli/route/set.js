var { mainScreenRouterPath } = require('../helper/path')
var { makeGetModuleName } = require('../helper/name')
var fs = require('fs')
const chalk = require('chalk')
const PrettyError = require('pretty-error')
const pe = new PrettyError()
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const log = console.log;
// --------
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const setRoute = async (routeName = 'MainTab') => {
  try {
    const mainScreenPath = mainScreenRouterPath;
    const rawText = await readFile(mainScreenPath, {encoding: 'utf-8'})
    const getModuleName = makeGetModuleName(routeName)
    const rawTextAppliedModule = rawText.replace(new RegExp(`initialRouteKey:.*`), `initialRouteKey: '${getModuleName.getClassName()}',`)
    await writeFile(mainScreenPath, rawTextAppliedModule)
  } catch(err) {
    log(chalk.red('ERR SetRoute: '))
    log(chalk.red(pe.render(err)))
  }
}

module.exports = setRoute