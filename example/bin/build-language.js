#!/usr/bin/env node

const fs = require('fs')
const { sync } = require('glob')
const { mergeDeepRight, mapObjIndexed } = require('ramda')


const filePattern = `${__dirname}/../src/**/i18n.json`
const outputLanguageDataDir = `${__dirname}/../src/i18n/locales.__generate__`

const generateData = async () => {
	const messages = sync(filePattern)
		.map(filename => fs.readFileSync(filename, 'utf8'))
		.map(file => JSON.parse(file))
		.reduce(
			(collection, descriptors) => mergeDeepRight(collection, descriptors),
			{},
		)
	const keys = Object.keys(messages)
	for (let index=0; index< keys.length; index++) {
		const path = `${outputLanguageDataDir}/${keys[index]}.json`
		console.log('> ',path)
		await fs.writeFileSync(path, `${JSON.stringify(messages[keys[index]], null, 2)}`)
	}
}

generateData().then(() => {
	console.log('Generate done')
})