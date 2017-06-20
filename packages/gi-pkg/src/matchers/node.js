import { filterByGlob } from './lib/util'

export const info = {
  // match the associated file name in github/gitignore
  name: 'Node'
}

export const match = async (files) => {
  const matches = filterByGlob('**/package.json', files)
  return matches.length > 0
}
