// const fs = require('fs');
// const util = require('util');
// const readFile = util.promisify(fs.readFile);
var cs = require('change-case')

const renameModule = (data, dest='', source='SandBox') => {
  return data
    .replace(new RegExp(cs.camelCase(source), "g"), cs.camelCase(dest))
    .replace(new RegExp(cs.pascalCase(source), "g"), cs.pascalCase(dest))
    .replace(new RegExp(cs.snakeCase(source), "g"), cs.snakeCase(dest))
    .replace(new RegExp(cs.constantCase(source), "g"), cs.constantCase(dest))
}

module.exports.renameModule = renameModule
module.exports.default = renameModule
