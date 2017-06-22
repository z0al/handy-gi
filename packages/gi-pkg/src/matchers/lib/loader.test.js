import load from './loader'

describe('loader', () => {
  const modulesList = [
    expect.objectContaining({
      info: {
        name: 'Node.js',
        template: 'Node'
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
