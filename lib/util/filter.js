import minimatch from 'minimatch'

export const byGlob = (pattern) => {
  return (item) => {
    return minimatch(item, pattern, { matchBase: true })
  }
}
