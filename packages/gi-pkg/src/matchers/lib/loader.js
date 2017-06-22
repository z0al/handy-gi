import { join } from 'path'
import ls from '../../ls'

const baseDir = join(__dirname, '..')

export default async () => {
  // Ignores *.test.js files and lib folder
  const list = await ls(baseDir, ['!**/*.js', '**/*.test.js', 'lib/**'])

  let modules = []
  for (let m of list) {
    modules.push(require(join(baseDir, m)))
  }
  return modules
}
