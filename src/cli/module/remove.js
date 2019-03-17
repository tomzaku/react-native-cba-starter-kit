var fs = require('fs')
const util = require('util');
const PrettyError = require('pretty-error')
const chalk = require('chalk');


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


const exec = util.promisify(require('child_process').exec);
var { makeGetModulePath } = require('../helper/path')
var { makeGetModuleName } = require('../helper/name')

const log = console.log;
const pe = new PrettyError()

const removeModuleDir = async (moduleName) => {
  const getModulePath = makeGetModulePath(moduleName);
  log(chalk.blue(`>>> Removing ${getModulePath.getModuleDir()}`))
  await exec(`rm -rf ${getModulePath.getModuleDir()}`)
}

const updateAppFile = async (moduleName, file) => {

  const rawText = await readFile(file, {encoding: 'utf-8'})
  regrex = new RegExp(`\n.*${moduleName}.*`,'g')
  const filePhoneRenamed = rawText.replace(regrex,'')
  // Save
  await writeFile(file, filePhoneRenamed)
}

const updateImportModule = async (moduleName) => {
  const getModulePath = makeGetModulePath(moduleName);

  const indexModulePath = getModulePath.getAppIndex()
  log(chalk.blue(`Removing ${indexModulePath}`))
  await updateAppFile(moduleName, indexModulePath)
}

const Remove = async (moduleName) => {
  const getModulePath = makeGetModulePath(moduleName);
  try {
    log(chalk.cyan("==============================================="))
    log(chalk.blue(`Removing module ${moduleName} begin...`))
    if (!getModulePath.isExist() ){
      throw `Module called \'${moduleName}\'is not existed`
    }
    await removeModuleDir(moduleName)
    log(chalk.blue('> Remove import module'))
    await updateImportModule(moduleName)

  } catch (err) {
    log(chalk.red.bold('ERR Create: '))
    log(chalk.red.bold(pe.render(err)))
  }
}

module.exports = Remove