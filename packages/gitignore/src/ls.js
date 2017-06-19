import glob from 'glob'
import { exclude } from './config.json'

export default async (dir, ignore = []) => {
  return new Promise(resolve => {
    // A hack for applying glob only under 'dir'
    const cwd = process.cwd()
    process.chdir(dir)

    glob('**',
      {ignore: [...ignore, ...exclude], follow: false},
      (err, files) => {
        // Revert the change we made in cwd earlier
        process.chdir(cwd)

        files = err ? null : files
        resolve(files)
      }
    )
  })
}
