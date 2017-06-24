import load from './load'

describe('loader.js', () => {
  const modulesList = [
    expect.objectContaining({
      info: {
        name: 'Node.js',
        template: 'Node',
        global: expect.any(Boolean)
      },
      match: expect.any(Function)
    })
  ]

  it('loads matchers', async () => {
    expect(await load()).toEqual(
      expect.arrayContaining(modulesList)
    )
  })
})
