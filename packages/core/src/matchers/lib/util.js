import minimatch from 'minimatch'

export const filterByGlob = (glob, target) => {
  return target.filter(item => {
    return minimatch(item, glob)
  })
}
