import fs from 'fs'
import { join } from 'path'

const templatesDir = join(__dirname, 'templates')

const readFile = async (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, text) => {
      if (err) {
        reject(err)
      } else {
        resolve(text)
      }
    })
  })
}

const generate = async (tempaltesList) => {
  let gitignore = ''

  for (let tmpl of tempaltesList) {
    const { name, template } = tmpl

    let text = await readFile(join(templatesDir, `${template}.gitignore`))
    gitignore += `### ${name} ###\n\n`
    gitignore += text
  }

  return gitignore
}

export default generate
