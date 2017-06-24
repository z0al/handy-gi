import minimatch from 'minimatch'

export const filterByGlob = (glob, array) => {
  return array.filter(minimatch.filter(glob, {matchBase: true}))
}
