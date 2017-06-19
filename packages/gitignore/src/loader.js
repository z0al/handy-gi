import { join } from 'path'
import ls from './ls'

const baseDir = join(__dirname, 'matchers')

export default async () => {
  // Ignore everthing not .js
  const modules = await ls(baseDir, ['!**/*.js'])
  return modules
}
