import load from '../loader'

describe('loader', () => {
  it('loads all matchers', async () => {
    const modules = await load()
    expect(modules).toEqual(['node.js'])
  })
})
