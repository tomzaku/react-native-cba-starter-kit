var fs = require('fs')
var cs = require('change-case')
var path = require('path')
var R = require('ramda')
var { makeGetModuleName } = require('./name.js')

const appDir = `${process.cwd()}` // Where the app will be created
const libDir = `${__dirname}` // Where the command line running (src of lib)
const extension = '.ts'
const extensionx = '.tsx'
const joinAppPath = (...args) => path.join(appDir, ...args)
const joinLibPath = (...args) => path.join(libDir, ...args)

const mobileDir = joinAppPath('src')
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
  return path.join(pathModule, 'screen', 'main')
}
const getModuleStyleFile = (moduleName, fileName) => {
  const screenDir = getScreenDirPath(moduleName)
  const getModuleName = makeGetModuleName(fileName ? fileName : moduleName)
  return path.join(screenDir, `index.style${extension}`)
}

const getModuleIndexScreenFile = (moduleName) => {
  const screenDir = getScreenDirPath(moduleName)
  return path.join(screenDir, `index${extensionx}`)
}

const getScreenFilePath = ( moduleName, fileName ) => {
  const screenDir = getScreenDirPath(moduleName)
  const getModuleName = fileName ? makeGetModuleName(fileName) : makeGetModuleName(moduleName)
  return {
    phone: path.join(screenDir, `index${extensionx}`),
    tablet: path.join(screenDir, `index.tablet${extensionx}`)
  }
}
const getLogicDir = (moduleName) => {
  const modulePath = getModule(moduleName)
  return path.join(modulePath, 'redux')
}
const getModuleLogicFiles = (moduleName) => {
  const logicDir = getLogicDir(moduleName)
  return {
    action: path.join(logicDir, `action${extension}`),
    actionType: path.join(logicDir, `actionType${extension}`),
    reducer: path.join(logicDir, `reducer${extension}`),
    // saga: path.join(logicDir, `saga${extension}`),
    selector: path.join(logicDir, `selector${extension}`),
  }
}
const makeGetModulePath = (moduleName) => {
  const getModuleDir = () => getModule(moduleName)
  const getScreenDir = () => getScreenDirPath(moduleName)
  const getIndexScreenFile = () => getModuleIndexScreenFile(moduleName)
  const getAppIndex = () => path.join(moduleDir, `index${extension}`)
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
  }
}

const mainScreenRouterPath = path.join(mobileDir, 'router', `mainRoute${extensionx}`)

module.exports.makeGetModulePath = makeGetModulePath;
module.exports.mainScreenRouterPath = mainScreenRouterPath;
