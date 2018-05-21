var { mainScreenRouterPath } = require('../helper/path')
var { makeGetModuleName } = require('../helper/name')
var fs = require('fs')
const { print } = require('gluegun')
const PrettyError = require('pretty-error')
const pe = new PrettyError()
const util = require('util');
const exec = util.promisify(require('child_process').exec);
// --------
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const setRoute = async (routeName = 'Main') => {
  try {
    const mainScreenPath = mainScreenRouterPath;
    const rawText = await readFile(mainScreenPath, {encoding: 'utf-8'})
    const getModuleName = makeGetModuleName(routeName)
    const rawTextAppliedModule = rawText.replace(new RegExp(`getStackNavigator\\(.*`), `getStackNavigator('${getModuleName.getClassName()}');`)
    await writeFile(mainScreenPath, rawTextAppliedModule)
  } catch(err) {
    print.error('ERR SetRoute: ')
    print.error(pe.render(err))
  }
}

module.exports = setRoute