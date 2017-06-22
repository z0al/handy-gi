import load from './loader'

describe('loader', () => {
  it('loads matchers', async () => {
    const modules = await load()
    const node = modules.filter((m) => { return m.info.template === 'Node' })
    expect(node).not.toEqual([])
  })
})
