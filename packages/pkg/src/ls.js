import glob from 'glob'
import { exclude } from './config.json'

const ls = async (dir, ignore = []) => {
  return new Promise((resolve, reject) => {
    glob('*',
      {ignore: [...ignore, ...exclude], cwd: dir, follow: false},
      (err, files) => {
        if (err) {
          reject(err)
        } else {
          resolve(files)
        }
      }
    )
  })
}

export default ls
