jest.mock('fs')

import generate from './generate'
import { join } from 'path'
import fs from 'fs'

const buildPath = (tmpl) => {
  let g = tmpl.global ? 'Global' : ''
  return join(__dirname, '..', 'templates', g, `${tmpl.template}.gitignore`)
}

describe('generate.js', () => {
  const tempaltesList = [
    {name: 'Node.js', template: 'Node', global: false},
    {name: 'Linux', template: 'Linux', global: true},
    {name: 'Ruby', template: 'Ruby', global: false}
  ]
  let gitignore = ''

  beforeAll(() => {
    for (let tmpl of tempaltesList) {
      let path = buildPath(tmpl)
      let content = `${tmpl.name} contents\n`
      fs.__setFileContent(path, content)

      gitignore += `### ${tmpl.name} ###\n\n`
      gitignore += content + '\n'
    }
  })

  it('produces a gitignore string from given templates list', async () => {
    expect(await generate(tempaltesList))
      .toEqual(expect.stringContaining(gitignore))
  })
})
