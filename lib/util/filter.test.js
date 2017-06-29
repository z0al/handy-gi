import { byGlob } from './filter'

describe('util/filter.js', () => {
  describe('byGlob', () => {
    it('returns a list of matches', () => {
      const arr = ['package.json', 'subdir/package.json']
      const res = arr.filter(byGlob('**/package.json'))
      expect(res).toEqual(arr)
    })
  })
})
