import { load } from './matchers/lib'

/**
 * Matches the given files list against all available matchers
 *
 * @example
 * match(['README.md', 'package.json'])
 *  .then(matchers => { console.log(matchers) })
 * // outputs: [{name: 'Node.js', template: 'Node'}]
 *
 * @param  {Array}  files  to match against
 * @return {Promise}       with an array of { name, tempalte} of the
 *                         corresponding matchers
 */
const match = async (files) => {
  let modules = await load()
  let matchlist = []

  for (let mod of modules) {
    let res = await mod.match(files)

    if (res) {
      let { info: { name, template } } = mod
      matchlist.push({ name, template })
    }
  }
  return matchlist
}

export default match
