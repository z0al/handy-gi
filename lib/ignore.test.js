import { join } from 'path'
import ignore from './ignore'

const rootDir = join(__dirname, '..')

describe('ignore.js', () => {
  const gitignore = '### Node.js ###\n\n' +
                    '# Logs\n' +
                    'logs\n' +
                    '*.log\n' +
                    'npm-debug.log*\n' +
                    'yarn-debug.log*\n' +
                    'yarn-error.log*'

  it('throws an error if the path is invalid directory', async () => {
    // TODO
  })

  it('produces a gitignore string from given path', async () => {
    expect(await ignore(rootDir))
      .toEqual(expect.stringContaining(gitignore))
  })
})
