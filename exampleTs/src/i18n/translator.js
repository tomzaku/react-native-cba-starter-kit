const fs = require('fs')
const { sync } = require('glob')
const { mergeDeepRight } = require('ramda')


const filePattern = './src/**/*.lang.json'
const outputLanguageDataDir = './src/i18n/'

const generateData = async () => {
	const defaultMessages = sync(filePattern)
		.map(filename => fs.readFileSync(filename, 'utf8'))
		.map(file => JSON.parse(file))
		.reduce(
			(collection, descriptors) => mergeDeepRight(collection, descriptors),
			{},
		)
	await fs.writeFileSync(outputLanguageDataDir + 'i18n.__generate__.json', `${JSON.stringify(defaultMessages, null, 2)}`)
}
generateData()