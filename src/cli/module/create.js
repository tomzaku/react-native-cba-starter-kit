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
const moduleLibDir = `${__dirname}/../../module`
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
  const screenFilePath= getModulePath.getScreenFile(moduleName)

  await updateFile(moduleName, sandBoxPath.phone)
  await updateFile(moduleName, sandBoxPath.tablet)
  await updateFile(moduleName, getModulePath.getIndexScreenFile())

  // Rename file
  const renamePhone = await exec(`mv ${sandBoxPath.phone} ${screenFilePath.phone}`)
  
  const renameTablet = await exec(`mv ${sandBoxPath.tablet} ${screenFilePath.tablet}`)

  const sandBoxStylePath = getModulePath.getStyleFile('SandBox')
  const moduleStylePath = getModulePath.getStyleFile(moduleName)
  const renameStyle = await exec(`mv ${sandBoxStylePath} ${moduleStylePath}`)
}

const renameLogic = async (moduleName) => {
  const logicFiles = makeGetModulePath(moduleName).getLogicFiles();
  await updateFile(moduleName, logicFiles.action)
  await updateFile(moduleName, logicFiles.actionType)
  await updateFile(moduleName, logicFiles.reducer)
  await updateFile(moduleName, logicFiles.saga)
}

const makeModuleDir = async (moduleName) => {
  const getModulePath = makeGetModulePath(moduleName);

  log(chalk.blue(`Copy ${moduleLibDir} > ${getModulePath.getModuleDir()}`))
  await exec(`cp -r ${moduleLibDir} ${getModulePath.getModuleDir()}`)
}
const getReplaceData = (type, moduleName) => {
  const getModuleName = makeGetModuleName(moduleName)
  const dirName = getModuleName.getDir()
  const actionName = getModuleName.getAction()
  switch (type) {
    case 'index': return `import ${actionName} from './${dirName}'\n\nexport default {
  ${actionName},`
    case 'action': return `import { action as ${actionName} } from './${dirName}/logic.redux'\n\nexport {
  ${actionName},`
    case 'reselect': return `import { reselect as ${actionName} } from './${dirName}/logic.redux'\n\nexport {
  ${actionName},`
    default: return ``
  }
}
const updateImportModuleFile = async (file, moduleName, fileType) => {
  const replacedData = getReplaceData(fileType, moduleName)
  const rawText = await readFile(file, {encoding: 'utf-8'})

  const filePhoneRenamed = rawText.replace(/\nexport.*/, replacedData)
  // Save
  await writeFile(file, filePhoneRenamed)
}

const updateImportModule = async (moduleName) => {
  // index.js
  const getModulePath = makeGetModulePath(moduleName);

  const indexModulePath = getModulePath.getAppIndex()
  const appActionPath = getModulePath.getAppAction()
  const appReselectPath = getModulePath.getAppReselect()
  log(chalk.blue(`Update ${indexModulePath}`))
  await updateImportModuleFile(indexModulePath, moduleName, 'index')
  // action
  log(chalk.blue(`Update ${appActionPath}`))
  await updateImportModuleFile(appActionPath, moduleName, 'action')
  //reselect
  log(chalk.blue(`Update ${appReselectPath}`))
  await updateImportModuleFile(appReselectPath, moduleName, 'reselect')

}

const create = async (moduleName) => {
  const getModulePath = makeGetModulePath(moduleName);
  try {
    log(chalk.white(`Creating module ${moduleName} begin...`))
    if (getModulePath.isExist() ){
      throw `Module called \'${moduleName}\'is existed`
    }
    log(chalk.cyan("==============================================="))
    log(chalk.blue(`Copy screen & logic from sand to your app`))
    await makeModuleDir(moduleName)
    log(chalk.cyan("==============================================="))
    log(chalk.blue('Renaming screen...'))
    await renameScreen(moduleName)
    log(chalk.blue('Renaming logic...'))
    await renameLogic(moduleName)
    log(chalk.blue('Update import module'))
    await updateImportModule(moduleName)
    await setRoute(moduleName)
    log(chalk.blue('Create successfully!'))

  } catch (err) {
    log(chalk.red.bold('ERR Create: '))
    log(chalk.red.bold(pe.render(err)))
  }
}
module.exports = create