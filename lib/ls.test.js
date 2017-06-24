import ls from './ls'
import { join } from 'path'

const dir = join(__dirname, '..')

describe('ls.js', () => {
  const dirList = [
    'README.md',
    'package.json'
  ]

  it('lists all files', async () => {
    const files = await ls(dir)
    expect(files).toEqual(
      expect.arrayContaining(dirList)
    )
  })
  it('ignores given patterns', async () => {
    const files = await ls(dir, ['package.json'])
    expect(files).not.toEqual(
      expect.arrayContaining(dirList)
    )
  })
})
