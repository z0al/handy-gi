import { byGlob } from '../util/filter'

export const info = {
  name: 'Python',
  template: 'Python',
  global: false
}

export const match = async (files) => {
  // The pattern we test against
  const pattern = 'requirements.txt'

  // Try to find 'requirements.txt' ?
  const matches = files.filter(byGlob(pattern))

  // Did we?
  return matches.length > 0
}
