import { join } from 'path'
import ls from '../../ls'

const baseDir = join(__dirname, '..')

export default async () => {
  // Ignores *.test.js files and lib folder
  const modules = await ls(baseDir, ['!**/*.js', '**/*.test.js', 'lib/**'])
  return modules
}
