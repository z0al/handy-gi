import ls from '../ls'
import { exclude } from '../config.json'

describe('ls', () => {
  it('lists all files', async () => {
    const files = await ls('.', exclude)
    expect(files).not.toEqual([])
  })
  it('excludes given patterns', async () => {
    const files = await ls('.', ['package.json', ...exclude])
    expect(files.indexOf('node_modules/.bin')).toEqual(-1)
    expect(files.indexOf('package.json')).toEqual(-1)
  })
})
