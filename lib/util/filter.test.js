import filter from './filter'

describe('util/filter.js', () => {
  describe('byGlob', () => {
    it('returns a list of matches', () => {
      const arr = ['package.json', 'subdir/package.json']
      const res = filter.byGlob('**/package.json', arr)
      expect(res).toEqual(arr)
    })
  })
})
