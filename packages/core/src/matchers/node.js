import { filterByGlob } from './lib/util'

export const info = {
  name: 'Node.js',
  template: 'Node'
}

export const match = async (files) => {
  // can we find 'package.json' ?
  return filterByGlob('**/package.json', files).length > 0
}
