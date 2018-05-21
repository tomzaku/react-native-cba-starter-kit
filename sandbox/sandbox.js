var R = require('ramda')
var path = require('path')
const util = require('util');
var fs = require('fs')


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


const updateFile = async (moduleName, file) => {
  const rawText = await readFile(file, {encoding: 'utf-8'})
  regrex = new RegExp(`\n.*${moduleName}.*`,'g')
  const filePhoneRenamed = rawText.replace(regrex,'')
  // Save
  console.log('>>>filePhoneRenamed', filePhoneRenamed)
  // await writeFile(file, filePhoneRenamed)
}
updateFile('authentication', './SandBoxScreen.js').then((data)=> {

})