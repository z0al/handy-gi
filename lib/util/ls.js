import glob from 'glob'
import { exclude as exclusionList } from '../config.json'

/**
 * @private USE ONLY!
 *
 * Asynchronous glob-based directory listing
 *
 * NOTE: For better performance we implicitly exclude all patterns specified
 * inside `exclude` list in lib/config.json`
 *
 * However, you would still gets their names listed, e.g: node_modules,
 * which enables us to perform matching checks as neccessary.
 *
 * Also, it doesn't follow symbolic links!
 *
 * @example
 * ls('path/to/my/node/module')
 *  .then(files => { console.log(files) })
 * // outputs(e.g): ['package.json','src/index.js', ...]
 *
 * ls('path/to/my/node/module', ['package.json'])
 *  .then(files => { console.log(files) })
 * // outputs(e.g): ['src/index.js', ...]
 *
 * @param  {String}  dir            target directory
 * @param  {Array}   [exclude=[]]   of glob patterns to exclude
 * @return {Promise}                with folders/files list in `dir`
 */
const ls = async (dir, exclude = []) => {
  return new Promise((resolve, reject) => {
    glob(
      '**', // matches anything
      {
        ignore: [...exclude, ...exclusionList],
        cwd: dir,
        follow: false // don't follow symbolic links
      }, (err, files) => {
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
