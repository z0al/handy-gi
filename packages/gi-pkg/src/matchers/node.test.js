import { match } from './node'

describe('Node matcher', () => {
  it('matches when a package.json exists', async () => {
    const files = ['package.json']
    expect(await match(files)).toEqual(true)

    const fake = ['.pachage.json', 'fakepackage.json', 'pachage.jso']
    expect(await match(fake)).toEqual(false)
  })
})
