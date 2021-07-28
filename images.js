import fs from 'fs'
import path from 'path'

let folder = 'resources'
let types = [ 'gif', 'svg', 'jpg', 'png', 'jpeg' ]
let key = '[comment]: <> (replaceme)'
let README = 'README.md'

const run = async e => {
	let files = await fs.readdirSync(folder)
	let text = key
	for (let file of files ) {
		for (let type of types) {
			if (file.toLowerCase().substring(file.length - type.length) == type) {
				text += `
![${file}](${folder}/${encodeURI(file)})`

			}
		}
	}

	let readme = await ( await fs.readFileSync(README) ).toString()
	let idx = readme.indexOf(key)

	let fin = await fs.writeFileSync(README, readme.substring(0, idx) + text)

	console.log('done')
}

run()