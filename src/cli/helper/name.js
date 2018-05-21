var cs = require('change-case')
var R = require('ramda')

const getModuleDirName = (moduleName) => {
  const moduleDirName = cs.snakeCase(moduleName)
  return moduleDirName
}

const getActionTypeName = (moduleName) => {
  return cs.constantCase(moduleName)
}

const makeGetModuleName = (moduleName) => {
  // const getFileScreen = (isTablet) => getModuleScreenFileName(moduleName, isTablet)
  const getActionType = () => cs.constantCase(moduleName)
  const getDir = () => cs.snakeCase(moduleName)
  const getClassName = () => cs.pascalCase(moduleName)
  const getAction = () => cs.camelCase(moduleName)
  return {
    getAction,
    getActionType,
    getDir,
    getClassName,
  }
}

module.exports.getModuleDirName = getModuleDirName
module.exports.makeGetModuleName = makeGetModuleName
module.exports.getActionTypeName = getActionTypeName
