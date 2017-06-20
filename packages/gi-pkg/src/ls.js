import glob from 'glob'
import { exclude } from './config.json'

export default async (dir, ignore = []) => {
  return new Promise(resolve => {
    glob('**',
      {ignore: [...ignore, ...exclude], cwd: dir, follow: false},
      (err, files) => {
        files = err ? null : files
        resolve(files)
      }
    )
  })
}
