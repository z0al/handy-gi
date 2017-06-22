import { filterByGlob } from './lib/util'

export const info = {
  name: 'Node.js',
  template: 'Node'
}

export const match = async (files) => {
  const matches = filterByGlob('**/package.json', files)
  return matches.length > 0
}
