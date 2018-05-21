var fs = require('fs')
var cs = require('change-case')
var path = require('path')
var R = require('ramda')
var { makeGetModuleName } = require('./name.js')

const appDir = `${process.cwd()}` // Where the app will be created
const libDir = `${__dirname}` // Where the command line running (src of lib)


const joinAppPath = (...args) => path.join(appDir, ...args)
const joinLibPath = (...args) => path.join(libDir, ...args)

const mobileDir = joinAppPath('src', 'mobile')
const moduleDir = path.join(mobileDir, 'app')


const isExistedModule = (moduleName) => {
  const modulePath = getModule(moduleName)
  return fs.existsSync(modulePath)
}

const getModule = (moduleName) => {
  const dirName = makeGetModuleName(moduleName).getDir()
  return path.join(moduleDir, dirName)
}

const getScreenDirPath = (moduleName) => {
  const pathModule = getModule(moduleName)
  return path.join(pathModule, 'screen')
}
const getModuleStyleFile = (moduleName, fileName) => {
  const screenDir = getScreenDirPath(moduleName)
  const getModuleName = makeGetModuleName(fileName ? fileName : moduleName)
  return path.join(screenDir, 'style', getModuleName.getClassName() + 'Screen.style.js')
}

const getModuleIndexScreenFile = (moduleName) => {
  const screenDir = getScreenDirPath(moduleName)
  return path.join(screenDir, 'index.js')
}

// const getAppModuleIndex = (moduleName) => {
//   return path.join(moduleDir, 'index.js')
// }
// const getModuleAppAction = (module) => {
//   return path.join(moduleDir, 'action.js')
// }
// const getModuleAppReselect = (module) => {
//   return path.join(moduleDir, 'reselect.js')
// }

const getScreenFilePath = ( moduleName, fileName ) => {
  const screenDir = getScreenDirPath(moduleName)
  const getModuleName = fileName ? makeGetModuleName(fileName) : makeGetModuleName(moduleName)
  return {
    phone: path.join(screenDir, getModuleName.getClassName() + 'Screen.js'),
    tablet: path.join(screenDir, getModuleName.getClassName() + 'Screen.tablet.js')
  }
}
const getLogicDir = (moduleName) => {
  const modulePath = getModule(moduleName)
  return path.join(modulePath, 'logic.redux')
}
const getModuleLogicFiles = (moduleName) => {
  const logicDir = getLogicDir(moduleName)
  return {
    action: path.join(logicDir, 'action.js'),
    actionType: path.join(logicDir, 'actionType.js'),
    reducer: path.join(logicDir, 'reducer.js'),
    saga: path.join(logicDir, 'saga.js'),
  }
}
const makeGetModulePath = (moduleName) => {
  const getModuleDir = () => getModule(moduleName)
  const getScreenDir = () => getScreenDirPath(moduleName)
  const getIndexScreenFile = () => getModuleIndexScreenFile(moduleName)
  const getAppIndex = () => path.join(moduleDir, 'index.js')
  const getAppAction = () => path.join(moduleDir, 'action.js')
  const getAppReselect = () => path.join(moduleDir, 'reselect.js')
  const getStyleFile = (fileName) => getModuleStyleFile(moduleName, fileName)
  const getScreenFile = (fileName) => getScreenFilePath(moduleName, fileName)
  const isExist = () => isExistedModule(moduleName)
  const getLogicFiles = () => getModuleLogicFiles(moduleName)
  return {
    getModuleDir,
    getScreenDir,
    getIndexScreenFile,
    getScreenFile,
    getStyleFile,
    isExist,
    getLogicFiles,
    getAppIndex,
    getAppAction,
    getAppReselect,
  }
}

const mainScreenRouterPath = path.join(mobileDir, 'router', 'MainScreen.js')

module.exports.makeGetModulePath = makeGetModulePath;
module.exports.mainScreenRouterPath = mainScreenRouterPath;
