import { join } from 'path'
import ls from './util/ls'

const baseDir = join(__dirname, 'matchers')

const load = async () => {
  // Ignores *.test.js files and lib folder
  const ignoreList = ['!**/*.js', '**/*.test.js', '**/__mocks__/*']
  const list = await ls(baseDir, ignoreList)

  let modules = []
  for (let m of list) {
    modules.push(require(join(baseDir, m)))
  }
  return modules
}

export default load
