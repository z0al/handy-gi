import * as utils from './util'

test('filterByGlob', () => {
  const arr = ['package.json', 'subdir/package.json']
  const res = utils.filterByGlob('**/package.json', arr)
  expect(res).toEqual(arr)
})
