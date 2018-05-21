var fs = require('fs')


const appDir = `${process.cwd()}`
const baseDir = `${__dirname}/../base`

const isExistZkrn = () => {
  const zkrnFilePath = `${appDir}/.zkrn`
  return fs.existsSync(zkrnFilePath)
}