import { byGlob } from '../util/filter'

export const info = {
  name: 'Node.js',
  template: 'Node',
  global: false
}

export const match = async (files) => {
  // The pattern we test against
  const pattern = '**/package.json'

  // Try to find 'package.json' ?
  const matches = files.filter(byGlob(pattern))

  // Did we?
  return matches.length > 0
}
