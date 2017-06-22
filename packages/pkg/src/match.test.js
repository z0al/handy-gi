import match from './match'

describe('match.js', () => {
  const matchlist = [
    { name: 'Node.js', template: 'Node' }
  ]

  const files = [
    'packages/x/packages.json',
    'package.json',
    'README.md'
  ]

  it('produces a list containing { name, template }', async () => {
    expect(await (match(files))).toEqual(
      expect.arrayContaining(matchlist)
    )
  })
})
