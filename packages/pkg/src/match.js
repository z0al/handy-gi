import { load } from './matchers/lib'

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
