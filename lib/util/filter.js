import minimatch from 'minimatch'

const byGlob = (glob, array) => {
  return array.filter(minimatch.filter(glob, { matchBase: true }))
}

module.exports = {
  byGlob: byGlob
}
