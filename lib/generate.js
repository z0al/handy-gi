import fs from 'fs'
import { join } from 'path'

const templatesDir = join(__dirname, '..', 'templates')

/**
 * Iterate over a list of template pairs to generate a string
 * containing all corrspondent .gitignore files contents
 *
 * @example
 * generate([{name: 'Node.js', template: 'Node', global: false}])
 *  .then(gi => { console.log(gi) })
 * // outputs the following string
 * // ### Node.js ###
 * // # Logs
 * // logs
 * // .log
 * // ...
 *
 * @param  {Array}  tempaltesList  of {name, template} pairs of target templates
 * @return {Promise}               with the full .gitignore string
 */
const generate = async (tempaltesList) => {
  let gitignore = ''

  for (let tmpl of tempaltesList) {
    const { name, template, global } = tmpl

    // calculate template file path (.gitignore file)
    const globalDir = global ? 'Global' : ''
    const templateFile = join(templatesDir, globalDir, `${template}.gitignore`)

    // Read .gitignore file
    let text = fs.readFileSync(templateFile, 'utf8')

    // Add a header
    gitignore += `### ${name} ###\n\n`
    gitignore += `${text}\n`
  }

  return gitignore
}

export default generate
