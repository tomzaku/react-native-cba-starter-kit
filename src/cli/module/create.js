const { makeGetModulePath, mainScreenRouterPath } = require('../helper/path')
const { makeGetModuleName } = require('../helper/name')
const fs = require('fs')
const { renameModule } = require('../helper/file')
const setRoute = require('../route/set')
const PrettyError = require('pretty-error')
const pe = new PrettyError()
const util = require('util');
const chalk = require('chalk');
const exec = util.promisify(require('child_process').exec);
// --------
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// ------------
const moduleLibDir = `${__dirname}/../../module/react-native`
const baseLibDir = `${__dirname}/../../base`
const log = console.log;


const updateFile = async (moduleName, file) => {
  const rawText = await readFile(file, {encoding: 'utf-8'})
  // replace 'SandBox' -> 'ModuleName'
  const rawTextRenamed = renameModule(rawText, moduleName, 'SandBox')
  // Save
  await writeFile(file, rawTextRenamed)
}

const renameScreen = async (moduleName) => {
  const getModulePath = makeGetModulePath(moduleName);
  const sandBoxPath= getModulePath.getScreenFile('SandBox')
  await updateListPath(moduleName, Object.values(sandBoxPath))
}

const updateListPath = async (moduleName, paths) => {
  for (let logicPath of paths) {
    log('Updating: ', logicPath)
    await updateFile(moduleName, logicPath)
  }
}
const renameLogic = async (moduleName) => {
  const logicFiles = makeGetModulePath(moduleName).getLogicFiles();
  const paths = Object.values(logicFiles)
  await updateListPath(moduleName, paths)
}

const renameConfig = async (moduleName) => {
  const configFiles = makeGetModulePath(moduleName).getConfigFile();
  await updateListPath(moduleName, Object.values(configFiles))
}

const makeModuleDir = async (moduleName) => {
  const getModulePath = makeGetModulePath(moduleName);

  log(chalk.blue(`Copy ${moduleLibDir} > ${getModulePath.getModuleDir()}`))
  await exec(`mkdir ${getModulePath.getModuleDir()}`)
  await exec(`cp -r ${moduleLibDir}/* ${getModulePath.getModuleDir()}`)
}
const getReplaceData = (moduleName) => {
  const getModuleName = makeGetModuleName(moduleName)
  const dirName = getModuleName.getDir()
  const actionName = getModuleName.getAction()
  return `import ${actionName} from './${dirName}'\n\nconst app = {
    ${actionName},`
}
const updateImportModuleFile = async (file, moduleName, fileType) => {
  const replacedData = getReplaceData(moduleName)
  const rawText = await readFile(file, {encoding: 'utf-8'})

  const filePhoneRenamed = rawText.replace(/\nconst app.*/, replacedData)
  // Save
  await writeFile(file, filePhoneRenamed)
}

const updateImportModule = async (moduleName) => {
  // index.js
  const getModulePath = makeGetModulePath(moduleName);
  const indexModulePath = getModulePath.getAppIndex()
  log(chalk.blue(`Update ${indexModulePath}`))
  await updateImportModuleFile(indexModulePath, moduleName)
}

const create = async (moduleName) => {
  const getModulePath = makeGetModulePath(moduleName);
  try {
    log(chalk.white(`Creating module ${moduleName} begin...`))
    if (getModulePath.isExist() ){
      throw `Module called \'${moduleName}\'is existed`
    }
    log(chalk.cyan("==============================================="))
    log(chalk.blue(`> Copy screen & logic from sand to your app`))
    await makeModuleDir(moduleName)
    log(chalk.cyan("==============================================="))
    // log(chalk.blue('Renaming screen...'))
    await renameScreen(moduleName)
    // log(chalk.blue('Renaming logic...'))
    await renameLogic(moduleName)
    // log(chalk.blue('Renaming config...'))
    await renameConfig(moduleName)
    log(chalk.blue('> Update import module'))
    await updateImportModule(moduleName)
    await setRoute(moduleName)
    log(chalk.yellowBright('Create successfully!'))

  } catch (err) {
    log(chalk.red.bold('ERR Create: '))
    log(chalk.red.bold(pe.render(err)))
  }
}

module.exports = create