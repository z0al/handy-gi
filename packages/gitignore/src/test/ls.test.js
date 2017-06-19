import ls from '../ls'

const dir = process.cwd()

describe('ls', () => {
  it('lists all files', async () => {
    const files = await ls(dir)
    expect(files).not.toEqual([])
  })
  it('ignores given patterns', async () => {
    const files = await ls(dir, ['package.json'])
    expect(files.indexOf('node_modules/jest')).toEqual(-1)
    expect(files.indexOf('package.json')).toEqual(-1)
  })
})
